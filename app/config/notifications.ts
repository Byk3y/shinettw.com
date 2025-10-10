export interface Notification {
  id: number
  type: string
  title: string
  message: string
  timestamp: Date
  read: boolean
}

export const notificationsData: Notification[] = [
  {
    id: 3,
    type: 'music',
    title: 'New Song Tease',
    message: 'Just teased "Loco" on my Instagram - new music coming soon! 🔥',
    timestamp: new Date(),
    read: false
  },
  {
    id: 1,
    type: 'event',
    title: 'Upcoming Event',
    message: 'Encore Bi-Monthly Live Performance - Oct 17, 2025 (Invite Only)',
    timestamp: new Date(),
    read: false
  }
]
