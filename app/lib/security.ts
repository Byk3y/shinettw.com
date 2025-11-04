// Security utilities for preventing bot signups

// Simple in-memory rate limiter
// Note: In serverless, each function instance has its own memory
// This provides basic protection but isn't perfect across instances
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

/**
 * Rate limiting: Maximum 5 signups per IP per hour
 * Note: This is per-instance in serverless. For strict rate limiting, use Vercel KV.
 */
export function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const key = `rate_limit:${identifier}`
  const record = rateLimitStore.get(key)

  const maxRequests = 5 // Increased from 3 to reduce false positives
  const windowMs = 60 * 60 * 1000 // 1 hour

  if (!record || record.resetAt < now) {
    // New window
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs })
    
    // Clean up old entries to prevent memory growth
    if (rateLimitStore.size > 1000) {
      const entries = Array.from(rateLimitStore.entries())
      for (const [k, v] of entries) {
        if (v.resetAt < now) {
          rateLimitStore.delete(k)
        }
      }
    }
    
    return { allowed: true, remaining: maxRequests - 1 }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  rateLimitStore.set(key, record)
  return { allowed: true, remaining: maxRequests - record.count }
}

/**
 * Detect if a name looks like a bot-generated random string
 * Targets specific patterns seen in bot signups: "OkXybdSomdr00vMjId", "owyhWfKhICYEIfVEYCP"
 */
export function isSuspiciousName(name: string): boolean {
  if (!name || name.length < 2) return false

  const trimmed = name.trim()
  if (trimmed.length < 2) return false

  // Pattern 1: Mix of numbers and letters in long string (bot generator pattern)
  const hasNumbers = /\d/.test(trimmed)
  const hasLetters = /[a-zA-Z]/.test(trimmed)
  
  if (hasNumbers && hasLetters && trimmed.length >= 12) {
    // Check for random mixed case (like "OkXybdSomdr00vMjId")
    const upperCaseCount = (trimmed.match(/[A-Z]/g) || []).length
    const lowerCaseCount = (trimmed.match(/[a-z]/g) || []).length
    const totalLetters = upperCaseCount + lowerCaseCount
    
    // Very mixed case in long strings is suspicious
    if (totalLetters > 10 && upperCaseCount > 3 && lowerCaseCount > 3) {
      // Check vowel ratio - bot names often have low vowel content
      const vowelCount = (trimmed.match(/[aeiouAEIOU]/g) || []).length
      if (vowelCount / totalLetters < 0.15) {
        return true
      }
    }
  }

  // Pattern 2: Too many repeated characters (obvious bot pattern)
  const repeatedChars = /(.)\1{5,}/i
  if (repeatedChars.test(trimmed)) {
    return true
  }

  // Pattern 3: All uppercase/lowercase long strings with numbers (like "ABC123XYZ456")
  if (trimmed.length >= 10 && hasNumbers && (trimmed === trimmed.toUpperCase() || trimmed === trimmed.toLowerCase())) {
    return true
  }

  return false
}

/**
 * Get client IP address (works with Vercel and other platforms)
 */
export function getClientIP(headers: Headers): string {
  // Vercel
  const vercelIP = headers.get('x-vercel-forwarded-for') || headers.get('x-forwarded-for')
  if (vercelIP) {
    return vercelIP.split(',')[0].trim()
  }

  // Fallback
  return headers.get('x-real-ip') || 'unknown'
}

/**
 * Validate email format more strictly
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false
  
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(email)
}

/**
 * Check if honeypot field is filled (bots often fill hidden fields)
 */
export function checkHoneypot(honeypotValue: string | undefined): boolean {
  // Honeypot should be empty for real users
  return !honeypotValue || honeypotValue.trim() === ''
}

