# millimeter
> A browser experiment shipped with a built-in Gun DB relay server

I built it in a few hours on a lazy Saturday as a proof of concept, but it has a lot of potential. For example, if it became popular enough, and with NAT hole punching, perhaps by leveraging webtorrent, Millimeter users could be relay peers for a globally connected Gun swarm.

If you don't know what Gun is, see http://gun.eco. In short, it is an open source local-first decentralized graph database.

### Status
This is currently a work in progress. The current push is not working correctly. I am reworking how `BrowserWindow` and `BrowserView` renders content with a focus on electron's `ipc`.

## Features
- Search or visit a URL from the address bar

# Install
1. Clone this repo
2. `> npm install`
3. `> npm start`
4. Browse to http://localhost:30210/gun in Millimeter and another browser and start typing. Millimeter is relaying the data between itself and the other browser!

## Much TODO
- Add a bittorrent-tracker server
- Back/Forward buttons
- History
- Bookmarks
- Tabs
- Settings
- Automatic upgrades
