# Togetharr

**Togetharr** is a self-hosted Discord bot that creates synced watch parties using **Jellyfin**.

It lets Discord users:
- join a watch party voice channel  
- get temporary Jellyfin access  
- select a movie  
- and watch together in sync  

---

## Features

- Temporary Jellyfin access via Discord  
- Watch Party–only media library  
- Synced playback (play / pause / seek)  
- Automatic cleanup when the party ends  
- Optional Overseerr integration for requests  
- No permanent media sharing  
- Designed for Unraid / Docker  

---

## How it Works (High Level)

Discord users → Togetharr bot → Jellyfin API → Media streams


- Users talk in Discord voice  
- Togetharr controls Jellyfin via API  
- Video streams directly from Jellyfin to users  
- Discord never handles video data  

---

## Core Concepts

### Watch Party Voice Channel
The voice channel is the **source of truth**.

If nobody is in the channel:
- the party ends automatically  
- access is revoked  
- everything resets  

---

### Watch Party Library
A dedicated Jellyfin library that:
- only contains the currently selected movie(s)  
- is the only library party users can see  

This prevents exposing your real media libraries.

---

### Temporary Jellyfin Users
Users get:
- a Jellyfin account created on first `/join`  
- access enabled while in the party  
- access revoked when they leave  

No permanent sharing.

---

## User Commands

### `/join`
Opt in to watch parties (first time only).  
Creates or re-enables your Jellyfin watch-party account.

---

### `/search <title>`
Search for movies in the server.

Example:
/search alien


---

### `/new [count]`
Show recently added movies.

Example:
/new 10


---

### `/genre <name> [count]`
Browse by genre.

Example:
/genre horror


---

### `/random [genre]`
Pick something at random.

Example:
/random sci-fi


---

### `/watch <title>`
Select the movie for the watch party.

Example:
/watch alien


Only one movie can be active at a time.

---

### `/play`
Start synced playback for everyone.

---

### `/pause`
Pause playback for everyone.

---

### `/resume`
Resume playback for everyone.

---

### `/sync`
Force resync all viewers to the current party time.

---

### `/status`
Show current party status.

---

### `/request <title>`
Request missing content via Overseerr.

Example:
/request dune part two


---

### `/end`
End the watch party manually.

Also runs automatically when the voice channel is empty.

---

## Automatic Behavior

### Auto Enable
If a user has opted in before:
- joining the Watch Party voice channel  
- automatically re-enables their Jellyfin access  

No need to type `/join` every time.

---

### Auto Revoke
When a user leaves the voice channel:
- a grace timer starts (default: 5 minutes)  
- if they don’t return, access is revoked  

---

### Auto End
When the voice channel is empty:
- party ends automatically  
- all access is revoked  
- Watch Party library is cleaned up  

---

## Media Handling

Togetharr never moves your real media files.

Instead it uses:
- hardlinks or symlinks into a temporary folder  

This avoids:
- Radarr re-downloading files  
- breaking your existing library  
- wasting disk space  

Cleanup simply removes the links.

---

## Requirements

- Discord bot token  
- Jellyfin server with API key  
- Jellyfin Watch Party library  
- Docker (recommended)  
- Optional:
  - Overseerr  
  - Radarr / Sonarr  

---

## Architecture

Discord
|
v
Togetharr (Node.js)
|
v
Jellyfin API
|
v
User devices (browser / TV / mobile)


---

## Philosophy

Togetharr is designed to:

- avoid permanent media sharing  
- keep access temporary and scoped  
- use Discord as the UI  
- let Jellyfin do the heavy lifting  
- require minimal manual cleanup  

It’s basically:

> Netflix Party, but self-hosted and controlled by Discord.

---

## Project Status

This project is in early development.

Planned phases:
- v1: Join / watch / play / cleanup  
- v2: True sync + drift correction  
- v3: Overseerr automation + queue  

---

## License

MIT

Use it. Modify it. Self-host it. Break it. Improve it.
