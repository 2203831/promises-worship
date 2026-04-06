# 🎵 Promises Worship

A free, mobile-first web platform for Christian worship musicians.
Find chords, lyrics, and tools to help you lead worship confidently.

---

## ✨ Features

- 🎸 Chord charts with transpose, capo, and key selection
- 🇵🇭 English + Filipino (OPM) worship songs
- 🎼 Multi-instrument support (Guitar, Piano, Ukulele, Bass, Violin)
- 🙌 Worship Mode — fullscreen, distraction-free lyrics
- 📋 Setlist builder with drag-and-drop
- 🥁 Built-in metronome
- ↕ Auto-scroll for live playing
- 🔍 Search by title, artist, or lyrics
- ❤️ Favorites and recently played
- 🌗 Dark / Light mode + font size settings
- 📱 PWA — installable on mobile

---

## 🛠️ Tech Stack

- React 18
- Tailwind CSS
- React Router v6
- Hosted on Vercel

---

## 🚀 Getting Started

### Run locally (requires Node.js)
```bash
git clone https://github.com/YOUR_USERNAME/promises-worship.git
cd promises-worship
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy
Push to GitHub → auto-deploys on Vercel.

---

## 📁 Project Structure

```
promises-worship/
├── public/
│   ├── index.html
│   └── manifest.json
└── src/
    ├── components/
    │   ├── BottomNav.jsx
    │   ├── ChordDiagram.jsx
    │   ├── Layout.jsx
    │   ├── SongCard.jsx
    │   ├── SongViewer.jsx
    │   └── TopBar.jsx
    ├── context/
    │   └── AppContext.jsx
    ├── data/
    │   └── songs.js
    ├── hooks/
    │   ├── useAutoScroll.js
    │   └── useMetronome.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── Library.jsx
    │   ├── NotFound.jsx
    │   ├── Profile.jsx
    │   ├── Search.jsx
    │   ├── SetlistDetail.jsx
    │   ├── Setlists.jsx
    │   └── SongPage.jsx
    ├── App.jsx
    ├── index.css
    └── index.js
```

---

## 🎵 Song Library

| Title | Artist | Language |
|---|---|---|
| Way Maker | Sinach | 🌍 English |
| Reckless Love | Cory Asbury | 🌍 English |
| Goodness of God | Bethel Music | 🌍 English |
| What A Beautiful Name | Hillsong Worship | 🌍 English |
| Higit Sa Lahat | True Worshippers | 🇵🇭 Filipino |
| Magpakailanman | Worship Philippines | 🇵🇭 Filipino |
| Ikaw Ang Lahat | Elevation Worship PH | 🇵🇭 Filipino |
| Awit ng Pagpuri | ACTS Church | 🇵🇭 Filipino |

---

## 🙏 Contributing

Want to add songs or improve the app?

1. Fork this repo
2. Create a branch: `git checkout -b add-new-song`
3. Add your changes
4. Submit a Pull Request

---

## 📄 License

MIT License — free to use, modify, and share.

---

*Built with ❤️ for the worship community*
