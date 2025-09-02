export interface Event {
  id: number
  title: string
  date: string
  city: string
  location: string
  venue: string
  status: 'upcoming' | 'sold-out' | 'cancelled' | 'completed'
  action: string
  actionType: 'rsvp' | 'tickets' | 'reminder' | 'sold-out'
  ticketUrl?: string
  description?: string
  imageUrl: string
  price?: string
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Ctrl + Shine 1.0",
    date: "August 20, 2024",
    city: "Lagos",
    location: "Nigeria",
    venue: "Ctrl + Shine 1.0",
    status: "completed",
    action: "View Photos",
    actionType: "rsvp",
    description: "Ctrl + Shine 1.0 - Past Event with Shine TTW",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop&crop=center&auto=format&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "FREE"
  },
  {
    id: 2,
    title: "Encore Bi-Monthly Live Performance",
    date: "October 17, 2025",
    city: "Private Venue",
    location: "Nigeria", 
    venue: "Private Venue",
    status: "upcoming",
    action: "Invite Only",
    actionType: "rsvp",
    description: "Encore Bi-Monthly Live Performance - Exclusive Event",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=400&fit=crop&crop=center&auto=format&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Invite Only"
  },
  {
    id: 3,
    title: "Ctrl + Shine 2.0",
    date: "November 22, 2025",
    city: "Lagos",
    location: "Nigeria",
    venue: "Ctrl + Shine 2.0",
    status: "upcoming", 
    action: "RSVP",
    actionType: "rsvp",
    description: "Ctrl + Shine 2.0 - The Sequel Event",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=400&fit=crop&crop=center&auto=format&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "FREE"
  }
]

export const getEventsByStatus = (status: Event['status']) => {
  return eventsData.filter(event => event.status === status)
}

export const getUpcomingEvents = () => {
  return getEventsByStatus('upcoming')
}

export const getEventsByLocation = (location: string) => {
  return eventsData.filter(event => 
    event.city.toLowerCase().includes(location.toLowerCase()) ||
    event.location.toLowerCase().includes(location.toLowerCase())
  )
}
