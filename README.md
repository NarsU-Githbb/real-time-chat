# Real-Time Chat Application

## Overview

A modern, full-stack chat application, where you have a chat with your friend. It doesn't keep track of the chat data, so it's perfect for that sensitive business information that you don't want to keep any logs of... That is until I decide to make database for this project, then you're sensitive business information will stay in the database until human extinction & beyond!

## Getting Started (Development Mode)

How to run in dev mode:

1. Go to client/ directory & use "npm install" for the frontend.

2. Then go to server/ directory & use "npm install" for the backend.

3. Write "npx tsx src/server.ts" & now the project is online in http://localhost:3000/ 

## User Guide 

1. In the main page press "onboard the ecosystem"

2. ...(write the rest)

## Generate Pinggy link

1. Use this command to generate Pinggy link:

```
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```
2. Copy paste the https Pinggy link & You can now send this link to the user you want to start the chat with (along with the chat ID). 

3. it should bring the user2 into the main page, where he should press "Tag Along as Co-Pilot" button. There he can give the chat id, username & access into the chat with you.

## Tech Stack

This system runs as a single Node.js application:

**Backend:** Node.js + Express + Socket.IO
**Frontend:** React (Vite)
**Styling:** Tailwind CSS + Shadcn UI
**Real-time communication:** Socket.IO 
**Deployment:** Docker
**Packages:** npm


## Files structure

with explanation of specific files that are new to me:

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
