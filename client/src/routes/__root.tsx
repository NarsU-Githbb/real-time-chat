import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      {/* 
        The Outlet is where your pages (like index.tsx or about.tsx) 
        will dynamically swap in and out based on the active URL (cool)
      */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* The Footer will now stay universally visible across all your pages */}
      <Footer />
      
      {/* The floating developer drawer tool */}
      <TanStackRouterDevtools />
    </div>
  )
}