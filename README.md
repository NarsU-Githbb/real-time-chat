How to run in dev mode:

1. Go to client/ directory

2. Use "npm install" (or smth)

3. Use "npm run dev" & voila!

Files structure - with explanation of specific files that are new to me:

```
├── server/                 # Everything Backend related
├── client/                 # Everything frontend related
    ├── Public/             # Static assets (favicons, manifest files)
    ├── src/                # The core frontend codebase
        ├── assets/         # App graphics & icons
        ├── routes/         # Routes to different pages
        ├── components/     # Custom React components (Sidebar, MessageList, ChatInput)
            ├── ui/         # Shadcn/ui layout blocks
        ├── lib/            # Shared logic utilities (e.g., utils.js class-merging engine)
    ├── eslint.config.js    # Code quality and linting settings (Catches unused variables, broken syntax)
    ├── package.json        # Frontend dependencies list (React, Tailwind, Socket-client) & npm scripts
    ├── package-lock.json   # Cryptographic version lock ensuring matching builds across computers
    ├── components.json     # Shadcn/ui theme configuration (Tells CLI where to download UI code)
    ├── routeTree.gen.ts    # Automatically generated file that maps your src/routes/ (tanstack router)
    └── vite.config.js      # The bundler engine (Manages hot-reloading & backend server proxies)
```
