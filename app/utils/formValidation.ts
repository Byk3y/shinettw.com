// Shared form validation utilities used across forms and actions

export interface ValidationResult {
  isValid: boolean
  error?: string
}

/**
 * Validates email format using standard regex
 */
export function validateEmail(email: string): ValidationResult {
  if (!email.trim()) {
    return { isValid: false, error: 'Email address is required' }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }
  
  return { isValid: true }
}

/**
 * Cleans phone number by removing spaces, dashes, and parentheses
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[\s\-\(\)]/g, '')
}

/**
 * Validates Nigerian phone number format
 * Accepts formats: 07010137539, +2347010137539, 2347010137539
 */
export function validateNigerianPhone(phone: string): ValidationResult {
  if (!phone.trim()) {
    return { isValid: false, error: 'Phone number is required' }
  }
  
  const cleanPhone = cleanPhoneNumber(phone)
  const nigerianPhoneRegex = /^(\+?234|0)?[789][01]\d{8}$/
  
  if (!nigerianPhoneRegex.test(cleanPhone)) {
    return { 
      isValid: false, 
      error: 'Please enter a valid Nigerian phone number (e.g., 07010137539)' 
    }
  }
  
  return { isValid: true }
}

/**
 * Validates required text field
 */
export function validateRequired(value: string, fieldName: string): ValidationResult {
  if (!value.trim()) {
    return { isValid: false, error: `${fieldName} is required` }
  }
  
  return { isValid: true }
}

/**
 * Validates full name (required text field)
 */
export function validateFullName(fullName: string): ValidationResult {
  return validateRequired(fullName, 'Full name')
}

/**
 * Validates first name (required text field)
 */
export function validateFirstName(firstName: string): ValidationResult {
  return validateRequired(firstName, 'First name')
}

/**
 * Validates last name (required text field)
 */
export function validateLastName(lastName: string): ValidationResult {
  return validateRequired(lastName, 'Last name')
}
