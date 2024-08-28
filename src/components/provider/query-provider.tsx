"use client"

import { ReactElement, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: ReactNode }): ReactElement {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
