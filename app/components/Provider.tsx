"use client";

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

function Provider({children}: {children: ReactNode}) {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Provider