import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@/index.css'
import { routeTree } from './routeTree.gen'
import { io } from "socket.io-client" 



// 👈 Create the single, persistent socket instance
const socket = io("http://localhost:3000", {
  autoConnect: true,
})

const router = createRouter({ 
  routeTree,
  context: {
    socket,
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}