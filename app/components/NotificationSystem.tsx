'use client'

import React, { useState, useEffect, useRef } from 'react'
import { notificationsData, type Notification } from '../config/notifications'

interface NotificationSystemProps {
  className?: string
}

export default function NotificationSystem({ className = '' }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData)
  const [showNotificationPanel, setShowNotificationPanel] = useState(false)
  const notificationPanelRef = useRef<HTMLDivElement>(null)

  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel)
  }

  // Handle click outside to close notification panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showNotificationPanel && 
        notificationPanelRef.current && 
        !notificationPanelRef.current.contains(event.target as Node)
      ) {
        setShowNotificationPanel(false)
      }
    }

    if (showNotificationPanel) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNotificationPanel])

  const markNotificationAsRead = (notificationId: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const handleNotificationClick = (notification: Notification) => {
    // Mark as read first
    markNotificationAsRead(notification.id)
    
    // Handle specific notification actions
    if (notification.id === 1) { // Event notification
      // Open LagosEncore website
      window.open('https://lagosencore.com/', '_blank')
    } else if (notification.id === 3) { // Loco Instagram tease notification
      window.open('https://www.instagram.com/reel/DPMSPa3jU2h/?igsh=MWp0MTZib3NtaHJzdw==', '_blank')
    }
    
    // Close notification panel
    setShowNotificationPanel(false)
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <>
      {/* Mobile Inbox Icon with Notification */}
      <div className={`md:hidden fixed top-4 left-3 z-50 transition-opacity duration-300 ${
        showNotificationPanel ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${className}`}>
        <button 
          onClick={toggleNotificationPanel}
          className="relative text-white hover:text-chrome transition-colors focus:outline-none"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {unreadCount}
            </div>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {showNotificationPanel && (
        <>
          {/* Backdrop */}
          <div className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
          
          {/* Notification Panel */}
          <div 
            ref={notificationPanelRef}
            className="md:hidden fixed top-16 left-3 right-3 z-50 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl max-h-80 overflow-y-auto"
          >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">Notifications</h3>
              <button 
                onClick={toggleNotificationPanel}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    notification.read 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-red-900/20 border-red-700'
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">
                        {notification.title}
                      </h4>
                      <p className="text-gray-300 text-xs mt-1">
                        {notification.message}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        {notification.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-red-500 rounded-full ml-2 mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </>
      )}
    </>
  )
}
