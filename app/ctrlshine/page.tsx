import React from 'react'
import { Metadata } from 'next'
import CtrlShineClient from './CtrlShineClient'

export const metadata: Metadata = {
  title: 'Ctrl + Shine 1.0 - Past Event | ShineTTW',
  description: 'Relive Ctrl + Shine 1.0, the past event featuring ShineTTW. View photos, get updates on future events, and join the community for exclusive access.',
  keywords: 'Ctrl + Shine, ShineTTW event, past event, Lagos music event, Nigerian music, Afro-Sentio',
  alternates: {
    canonical: 'https://shinettw.com/ctrlshine',
  },
}

export default function CtrlShinePage() {
  return <CtrlShineClient />
}
