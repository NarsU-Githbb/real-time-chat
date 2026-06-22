How to run in dev mode:

1. Go to client/ directory & use "npm install" for the frontend.

2. Then go to server/ directory & use "npm install" for the backend.

3. Write "npx tsx src/server.ts" & now the project is online in http://localhost:3000/ 


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
## Generate Pinggy link

1. Use this command to generate Pinggy link:

```
ssh -p 443 -R0:localhost:5173 free.pinggy.io
```
2. Copy paste the https Pinggy link & add /connecting at the end of the url.

3. You can now send this link to the user you want to start the chat with (along with the chat ID)