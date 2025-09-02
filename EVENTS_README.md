# Events Management Guide

## Overview
The Events section has replaced the old About section and provides a clean, card-based layout for upcoming shows and tour dates.

## File Structure
- **Component**: `app/components/Events.tsx` - Main Events component
- **Configuration**: `app/config/events.ts` - Events data and management functions
- **Navigation**: Updated in `app/components/Hero.tsx` (both desktop and mobile)

## How to Update Events

### 1. Edit Events Data
Open `app/config/events.ts` and modify the `eventsData` array:

```typescript
export const eventsData: Event[] = [
  {
    id: 1,
    date: "March 15, 2025",
    city: "Lagos",
    location: "Nigeria",
    venue: "The Terra Kulture Arena",
    status: "upcoming",
    action: "RSVP",
    actionType: "rsvp",
    description: "ShineTTW Live in Lagos - The Chosen One EP Tour"
  },
  // Add more events here...
]
```

### 2. Event Properties

| Property | Type | Description | Options |
|----------|------|-------------|---------|
| `id` | number | Unique identifier | Auto-increment |
| `date` | string | Event date | "March 15, 2025" |
| `city` | string | City name | "Lagos" |
| `location` | string | Country/State | "Nigeria" |
| `venue` | string | Venue name | "The Terra Kulture Arena" |
| `status` | string | Event status | "upcoming", "sold-out", "cancelled", "completed" |
| `action` | string | Button text | "RSVP", "Buy Tickets", "Remind Me" |
| `actionType` | string | Button style | "rsvp", "tickets", "reminder", "sold-out" |
| `ticketUrl` | string | Optional ticket link | "https://example.com/tickets" |
| `description` | string | Event description | "ShineTTW Live in Lagos..." |

### 3. Action Button Styles

Different action types automatically get different button styles:

- **RSVP**: Chrome background with black text
- **Buy Tickets**: Red background with white text  
- **Remind Me**: Gray background with white text
- **Sold Out**: Gray background with white text

### 4. Status Badges

Event status is displayed as a colored badge:
- **Upcoming**: Green badge
- **Sold Out**: Red badge
- **Cancelled**: Gray badge
- **Completed**: Blue badge

## Helper Functions

The configuration file includes helper functions:

```typescript
// Get events by status
getEventsByStatus('upcoming')

// Get all upcoming events
getUpcomingEvents()

// Search events by location
getEventsByLocation('Lagos')
```

## Responsive Design

The Events section is fully responsive:
- **Mobile**: Single column layout
- **Desktop**: Two-column grid layout
- **Hover Effects**: Chrome border highlights and subtle animations

## Adding New Event Types

To add new event types or modify button styles, edit the `getActionButtonStyle` function in `Events.tsx`:

```typescript
const getActionButtonStyle = (actionType: string) => {
  switch (actionType) {
    case 'rsvp':
      return 'bg-chrome text-black hover:bg-white'
    case 'tickets':
      return 'bg-red-600 hover:bg-red-700 text-white'
    case 'reminder':
      return 'bg-gray-700 hover:bg-gray-600 text-white'
    case 'new-type': // Add new type here
      return 'bg-blue-600 hover:bg-blue-700 text-white'
    default:
      return 'bg-chrome text-black hover:bg-white'
  }
}
```

## Navigation Updates

The navigation has been automatically updated:
- **Desktop**: Top navigation bar shows "EVENTS" instead of "ABOUT"
- **Mobile**: Side drawer shows "EVENTS" instead of "ABOUT"
- **Links**: All navigation links point to `#events` section

## Testing Changes

After updating events:
1. Save the configuration file
2. The website will automatically reload
3. Navigate to the Events section to see changes
4. Test on both desktop and mobile views

## Future Enhancements

Potential improvements for the Events section:
- Event filtering by location/date
- Calendar view integration
- Ticket purchasing flow
- Event reminders and notifications
- Social media sharing
- Event photos and galleries
