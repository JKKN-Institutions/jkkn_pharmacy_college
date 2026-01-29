'use client'

import { useEffect } from 'react'

export default function CircularsPage() {
  useEffect(() => {
    window.location.replace('/pdf/CIRCULARS-AND-NOTICES.pdf')
  }, [])

  return null
}
