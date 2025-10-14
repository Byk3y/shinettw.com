export interface MusicItem {
  id: number;
  title: string;
  subtitle: string;
  coverArt: string;
  streamingLinks: {
    primary?: string;
    appleMusic: string;
    spotify: string;
    youtube: string;
  };
  isPresave?: boolean; // New field to indicate if this is a presave track
}

export const musicData: MusicItem[] = [
  {
    id: 0,
    title: "LOCO",
    subtitle: "Single",
    coverArt: "/music/loco-cover.jpg",
            streamingLinks: {
              primary: process.env.NEXT_PUBLIC_ENCORE_URL || "https://shinettw.ffm.to/loco",
      appleMusic: "https://music.apple.com/us/artist/shinettw/1649199436",
      spotify: "https://open.spotify.com/artist/shinettw",
      youtube: "https://www.youtube.com/@shinettw"
    },
    isPresave: true
  },
  {
    id: 1,
    title: "TIME",
    subtitle: "Single",
    coverArt: "/music/single-time.jpg",
    streamingLinks: {
      primary: "https://shinettw.ffm.to/time",
      appleMusic: "https://music.apple.com/us/artist/shinettw/1649199436",
      spotify: "https://open.spotify.com/artist/shinettw",
      youtube: "https://www.youtube.com/@shinettw"
    }
  },
  {
    id: 2,
    title: "The Chosen One",
    subtitle: "Debut EP",
    coverArt: "/music/ep-the-chosen-one.jpg",
    streamingLinks: {
      appleMusic: "https://music.apple.com/us/artist/shinettw/1649199436",
      spotify: "https://open.spotify.com/artist/shinettw",
      youtube: "https://www.youtube.com/@shinettw"
    }
  },
  {
    id: 3,
    title: "I Go",
    subtitle: "feat. Bob Sinclar",
    coverArt: "/music/shine ttw & bob sinclar (i go).jpeg",
    streamingLinks: {
      primary: "https://bobsinclar2025.lnk.to/IGo",
      appleMusic: "https://music.apple.com/us/artist/shinettw/1649199436",
      spotify: "https://open.spotify.com/artist/shinettw",
      youtube: "https://www.youtube.com/@shinettw"
    }
  },
  {
    id: 4,
    title: "AUNTY MARY",
    subtitle: "feat. Spinall, Darkoo",
    coverArt: "/music/AUNTY MARY, (Spinall, Shine ttw, Darkoo vibes).jpeg",
    streamingLinks: {
      primary: "https://SPINALL.lnk.to/EKOGROOVE",
      appleMusic: "https://music.apple.com/us/artist/shinettw/1649199436",
      spotify: "https://open.spotify.com/artist/shinettw",
      youtube: "https://www.youtube.com/@shinettw"
    }
  }
];
