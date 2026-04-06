export const SONGS = [
  {
    id: "1",
    title: "Way Maker",
    artist: "Sinach",
    key: "B",
    tempo: 68,
    timeSignature: "4/4",
    difficulty: "beginner",
    language: "english",
    tags: ["contemporary", "praise", "healing"],
    capo: 0,
    favorite: true,
    trending: true,
    featured: true,
    coverGradient: "from-blue-900 to-purple-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "You are here moving in our midst", chords: [{ chord: "B", pos: 0 }, { chord: "E", pos: 18 }] },
          { lyrics: "I worship You I worship You", chords: [{ chord: "F#", pos: 0 }, { chord: "B", pos: 18 }] },
          { lyrics: "You are here working in this place", chords: [{ chord: "B", pos: 0 }, { chord: "E", pos: 18 }] },
          { lyrics: "I worship You I worship You", chords: [{ chord: "F#", pos: 0 }, { chord: "B", pos: 18 }] },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { lyrics: "You are Way Maker Miracle Worker Promise Keeper", chords: [{ chord: "B", pos: 0 }, { chord: "E", pos: 14 }, { chord: "F#", pos: 30 }] },
          { lyrics: "Light in the darkness my God that is who You are", chords: [{ chord: "G#m", pos: 0 }, { chord: "E", pos: 20 }, { chord: "B", pos: 37 }] },
          { lyrics: "You are Way Maker Miracle Worker Promise Keeper", chords: [{ chord: "F#", pos: 0 }, { chord: "B", pos: 14 }, { chord: "E", pos: 30 }] },
          { lyrics: "Light in the darkness my God that is who You are", chords: [{ chord: "G#m", pos: 0 }, { chord: "E", pos: 20 }, { chord: "F#", pos: 37 }] },
        ],
      },
      {
        type: "bridge",
        label: "Bridge",
        lines: [
          { lyrics: "Even when I don't see it You're working", chords: [{ chord: "E", pos: 0 }, { chord: "B", pos: 22 }] },
          { lyrics: "Even when I don't feel it You're working", chords: [{ chord: "E", pos: 0 }, { chord: "F#", pos: 22 }] },
          { lyrics: "You never stop You never stop working", chords: [{ chord: "G#m", pos: 0 }, { chord: "E", pos: 20 }] },
          { lyrics: "You never stop You never stop working", chords: [{ chord: "B", pos: 0 }, { chord: "F#", pos: 20 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU", chords: ["B", "E", "F#", "G#m"] },
      piano: { notes: "Play block chords, pedal on downbeats" },
      ukulele: { chords: ["A", "D", "E", "F#m"], capoNote: "Transpose down 2" },
    },
  },
  {
    id: "2",
    title: "Higit Sa Lahat",
    artist: "True Worshippers",
    key: "G",
    tempo: 72,
    timeSignature: "4/4",
    difficulty: "intermediate",
    language: "filipino",
    tags: ["OPM", "ballad", "intimate"],
    capo: 0,
    favorite: false,
    trending: true,
    featured: true,
    filipinoSpotlight: true,
    coverGradient: "from-amber-900 to-red-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "Higit sa lahat ng bagay sa mundong ito", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 20 }] },
          { lyrics: "Higit sa lahat ng tao sa aking paligid", chords: [{ chord: "Em", pos: 0 }, { chord: "C", pos: 20 }] },
          { lyrics: "Higit sa lahat ng pangarap at plano", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 20 }] },
          { lyrics: "Ikaw lamang ang aking pag-ibig", chords: [{ chord: "C", pos: 0 }, { chord: "D", pos: 20 }] },
        ],
      },
      {
        type: "chorus",
        label: "Koro",
        lines: [
          { lyrics: "Ikaw ang aking buhay at lakas", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 18 }] },
          { lyrics: "Ikaw ang aking katotohanan", chords: [{ chord: "Em", pos: 0 }, { chord: "C", pos: 18 }] },
          { lyrics: "Walang makakapantay sa Iyo", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 18 }] },
          { lyrics: "Higit sa lahat Ikaw ang Diyos ko", chords: [{ chord: "C", pos: 0 }, { chord: "D", pos: 24 }, { chord: "G", pos: 36 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU", chords: ["G", "D", "Em", "C"] },
      piano: { notes: "Arpeggio pattern recommended for verses, full chords for chorus" },
      ukulele: { chords: ["G", "D", "Em", "C"], capoNote: "Same key works great" },
    },
  },
  {
    id: "3",
    title: "Reckless Love",
    artist: "Cory Asbury",
    key: "A",
    tempo: 74,
    timeSignature: "4/4",
    difficulty: "beginner",
    language: "english",
    tags: ["contemporary", "love", "grace"],
    capo: 0,
    favorite: true,
    trending: false,
    featured: false,
    coverGradient: "from-rose-900 to-pink-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "Before I spoke a word You were singing over me", chords: [{ chord: "A", pos: 0 }, { chord: "E", pos: 22 }] },
          { lyrics: "You have been so so good to me", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 18 }] },
          { lyrics: "Before I took a breath You breathed Your life in me", chords: [{ chord: "A", pos: 0 }, { chord: "E", pos: 22 }] },
          { lyrics: "You have been so so kind to me", chords: [{ chord: "D", pos: 0 }, { chord: "E", pos: 18 }] },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { lyrics: "Oh the overwhelming never-ending reckless love of God", chords: [{ chord: "A", pos: 0 }, { chord: "E", pos: 28 }, { chord: "D", pos: 40 }] },
          { lyrics: "Oh it chases me down fights til I'm found", chords: [{ chord: "A", pos: 0 }, { chord: "E", pos: 18 }] },
          { lyrics: "Leaves the ninety-nine", chords: [{ chord: "D", pos: 0 }] },
          { lyrics: "And I couldn't earn it and I don't deserve it", chords: [{ chord: "A", pos: 0 }, { chord: "E", pos: 20 }] },
          { lyrics: "Still You give Yourself away", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 14 }] },
          { lyrics: "Oh the overwhelming never-ending reckless love of God", chords: [{ chord: "E", pos: 0 }, { chord: "D", pos: 28 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU", chords: ["A", "E", "D"] },
      piano: { notes: "Slow arpeggio for verse, swell into chorus" },
      ukulele: { chords: ["A", "E", "D"] },
    },
  },
  {
    id: "4",
    title: "Magpakailanman",
    artist: "Worship Philippines",
    key: "C",
    tempo: 65,
    timeSignature: "4/4",
    difficulty: "beginner",
    language: "filipino",
    tags: ["OPM", "hymn", "worship"],
    capo: 0,
    favorite: false,
    trending: true,
    featured: false,
    filipinoSpotlight: true,
    coverGradient: "from-green-900 to-teal-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "Sa bawat umaga na aking ginigising", chords: [{ chord: "C", pos: 0 }, { chord: "G", pos: 20 }] },
          { lyrics: "Ang iyong biyaya ay bago", chords: [{ chord: "Am", pos: 0 }, { chord: "F", pos: 18 }] },
          { lyrics: "Sa bawat sandali ng aking buhay", chords: [{ chord: "C", pos: 0 }, { chord: "G", pos: 20 }] },
          { lyrics: "Ikaw ang aking Diyos", chords: [{ chord: "F", pos: 0 }, { chord: "G", pos: 14 }] },
        ],
      },
      {
        type: "chorus",
        label: "Koro",
        lines: [
          { lyrics: "Magpakailanman Panginoon", chords: [{ chord: "C", pos: 0 }, { chord: "G", pos: 16 }] },
          { lyrics: "Ikaw ang aking lakas at kanlungan", chords: [{ chord: "Am", pos: 0 }, { chord: "F", pos: 20 }] },
          { lyrics: "Magpakailanman sa iyong presensya", chords: [{ chord: "C", pos: 0 }, { chord: "G", pos: 16 }] },
          { lyrics: "Doon ko mahahanap ang kapayapaan", chords: [{ chord: "F", pos: 0 }, { chord: "G", pos: 22 }, { chord: "C", pos: 36 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU", chords: ["C", "G", "Am", "F"] },
      piano: { notes: "Simple block chords, very congregational" },
      ukulele: { chords: ["C", "G", "Am", "F"] },
    },
  },
  {
    id: "5",
    title: "Goodness of God",
    artist: "Bethel Music",
    key: "E",
    tempo: 67,
    timeSignature: "4/4",
    difficulty: "intermediate",
    language: "english",
    tags: ["contemporary", "testimony", "gratitude"],
    capo: 0,
    favorite: false,
    trending: true,
    featured: true,
    coverGradient: "from-indigo-900 to-blue-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "I love You Lord Oh Your mercy never fails me", chords: [{ chord: "E", pos: 0 }, { chord: "A", pos: 22 }] },
          { lyrics: "All my days I've been held in Your hands", chords: [{ chord: "E", pos: 0 }, { chord: "B", pos: 20 }] },
          { lyrics: "From the moment that I wake up until I lay my head", chords: [{ chord: "C#m", pos: 0 }, { chord: "A", pos: 28 }] },
          { lyrics: "Oh I will sing of the goodness of God", chords: [{ chord: "E", pos: 0 }, { chord: "B", pos: 20 }] },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { lyrics: "Cause all my life You have been faithful", chords: [{ chord: "E", pos: 0 }, { chord: "A", pos: 20 }] },
          { lyrics: "And all my life You have been so so good", chords: [{ chord: "E", pos: 0 }, { chord: "B", pos: 22 }] },
          { lyrics: "With every breath that I am able", chords: [{ chord: "C#m", pos: 0 }, { chord: "A", pos: 20 }] },
          { lyrics: "Oh I will sing of the goodness of God", chords: [{ chord: "E", pos: 0 }, { chord: "B", pos: 20 }, { chord: "A", pos: 36 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU DU", chords: ["E", "A", "B", "C#m"] },
      piano: { notes: "Gospel feel, strong left hand bass" },
      ukulele: { chords: ["E", "A", "B", "C#m"] },
    },
  },
  {
    id: "6",
    title: "Ikaw Ang Lahat",
    artist: "Elevation Worship PH",
    key: "D",
    tempo: 80,
    timeSignature: "4/4",
    difficulty: "intermediate",
    language: "filipino",
    tags: ["OPM", "contemporary", "praise"],
    capo: 0,
    favorite: true,
    trending: false,
    featured: false,
    filipinoSpotlight: true,
    coverGradient: "from-yellow-900 to-orange-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "Sa aking puso ay nandoon Ka", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 16 }] },
          { lyrics: "Sa bawat hakbang Ikaw ang gabay", chords: [{ chord: "Bm", pos: 0 }, { chord: "G", pos: 18 }] },
          { lyrics: "Hindi ako mag-iisa", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 14 }] },
          { lyrics: "Sapagkat Ikaw ay lagi kong kasama", chords: [{ chord: "G", pos: 0 }, { chord: "A", pos: 20 }] },
        ],
      },
      {
        type: "chorus",
        label: "Koro",
        lines: [
          { lyrics: "Ikaw ang lahat ng kailangan ko", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 18 }] },
          { lyrics: "Ikaw ang sapat sa akin", chords: [{ chord: "Bm", pos: 0 }, { chord: "G", pos: 16 }] },
          { lyrics: "Sa iyong kapangyarihan ako'y nabubuhay", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 22 }] },
          { lyrics: "Ikaw ang lahat sa aking buhay", chords: [{ chord: "G", pos: 0 }, { chord: "A", pos: 22 }, { chord: "D", pos: 34 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU", chords: ["D", "A", "Bm", "G"] },
      piano: { notes: "Contemporary pop feel with synth pad underneath" },
      ukulele: { chords: ["D", "A", "Bm", "G"] },
    },
  },
  {
    id: "7",
    title: "What A Beautiful Name",
    artist: "Hillsong Worship",
    key: "D",
    tempo: 68,
    timeSignature: "4/4",
    difficulty: "intermediate",
    language: "english",
    tags: ["contemporary", "Jesus", "exaltation"],
    capo: 0,
    favorite: false,
    trending: false,
    featured: true,
    coverGradient: "from-violet-900 to-purple-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "You were the Word at the beginning", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 20 }] },
          { lyrics: "One with God the Lord Most High", chords: [{ chord: "Bm", pos: 0 }, { chord: "G", pos: 16 }] },
          { lyrics: "Your hidden glory in creation", chords: [{ chord: "D", pos: 0 }, { chord: "A", pos: 20 }] },
          { lyrics: "Now revealed in You our Christ", chords: [{ chord: "G", pos: 0 }, { chord: "A", pos: 16 }] },
        ],
      },
      {
        type: "chorus",
        label: "Chorus",
        lines: [
          { lyrics: "What a beautiful Name it is", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 18 }] },
          { lyrics: "What a beautiful Name it is", chords: [{ chord: "A", pos: 0 }, { chord: "Bm", pos: 18 }] },
          { lyrics: "The Name of Jesus Christ my King", chords: [{ chord: "G", pos: 0 }, { chord: "D", pos: 18 }] },
          { lyrics: "What a beautiful Name it is", chords: [{ chord: "A", pos: 0 }, { chord: "D", pos: 18 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU DU", chords: ["D", "A", "Bm", "G"] },
      piano: { notes: "Rich chord voicings, pedal through verses" },
      ukulele: { chords: ["D", "A", "Bm", "G"] },
    },
  },
  {
    id: "8",
    title: "Awit ng Pagpuri",
    artist: "ACTS Church",
    key: "F",
    tempo: 88,
    timeSignature: "4/4",
    difficulty: "beginner",
    language: "filipino",
    tags: ["OPM", "upbeat", "praise"],
    capo: 0,
    favorite: false,
    trending: true,
    featured: false,
    filipinoSpotlight: true,
    coverGradient: "from-cyan-900 to-teal-900",
    sections: [
      {
        type: "verse",
        label: "Verse 1",
        lines: [
          { lyrics: "Purihin ang Diyos sa lahat ng oras", chords: [{ chord: "F", pos: 0 }, { chord: "C", pos: 20 }] },
          { lyrics: "Ang Kanyang pag-ibig ay walang hangganan", chords: [{ chord: "Dm", pos: 0 }, { chord: "Bb", pos: 22 }] },
          { lyrics: "Siya ang ating lakas at kanlungan", chords: [{ chord: "F", pos: 0 }, { chord: "C", pos: 20 }] },
          { lyrics: "Ang Diyos na ating Amang makapangyarihan", chords: [{ chord: "Bb", pos: 0 }, { chord: "C", pos: 26 }] },
        ],
      },
      {
        type: "chorus",
        label: "Koro",
        lines: [
          { lyrics: "Umawit tayo ng papuri", chords: [{ chord: "F", pos: 0 }, { chord: "C", pos: 16 }] },
          { lyrics: "Sa Diyos na ating hari", chords: [{ chord: "Dm", pos: 0 }, { chord: "Bb", pos: 16 }] },
          { lyrics: "Ang lahat ng nilalaman ng mundo", chords: [{ chord: "F", pos: 0 }, { chord: "C", pos: 22 }] },
          { lyrics: "Ay magpuri sa kanya magpakailanman", chords: [{ chord: "Bb", pos: 0 }, { chord: "C", pos: 24 }, { chord: "F", pos: 36 }] },
        ],
      },
    ],
    instruments: {
      guitar: { strumming: "D DU UDU D", chords: ["F", "C", "Dm", "Bb"] },
      piano: { notes: "Energetic, upbeat gospel feel" },
      ukulele: { chords: ["F", "C", "Dm", "Bb"] },
    },
  },
];

export const KEYS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const CHORD_NOTES = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3,
  E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8,
  Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

export function transposeChord(chord, semitones) {
  if (!chord) return chord;
  const match = chord.match(/^([A-G][#b]?)(.*)$/);
  if (!match) return chord;
  const [, root, suffix] = match;
  const noteIndex = CHORD_NOTES[root];
  if (noteIndex === undefined) return chord;
  const newIndex = ((noteIndex + semitones) % 12 + 12) % 12;
  const newRoot = KEYS[newIndex];
  return newRoot + suffix;
}

export const SAMPLE_SETLIST = {
  id: "sl1",
  name: "Sunday Morning Service",
  date: "2026-04-06",
  songs: [
    { songId: "1", key: "B", notes: "Start soft, build to chorus" },
    { songId: "3", key: "A", notes: "" },
    { songId: "5", key: "E", notes: "Key moment — slow it down" },
    { songId: "7", key: "D", notes: "End with big outro" },
  ],
};

export const CHORD_DIAGRAMS = {
  guitar: {
    G: { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3], barre: null },
    C: { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0], barre: null },
    D: { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2], barre: null },
    Em: { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], barre: null },
    Am: { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0], barre: null },
    F: { frets: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 4, 3, 1], barre: { fret: 1, from: 0, to: 5 } },
    A: { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 2, 3, 4, 0], barre: null },
    E: { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], barre: null },
    B: { frets: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 2, from: 1, to: 5 } },
    Bm: { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 2, from: 1, to: 5 } },
    "F#": { frets: [2, 2, 4, 4, 4, 2], fingers: [1, 1, 3, 4, 2, 1], barre: { fret: 2, from: 0, to: 5 } },
    "G#m": { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, from: 0, to: 5 } },
    "C#m": { frets: [-1, 4, 6, 6, 5, 4], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 4, from: 1, to: 5 } },
  },
};
