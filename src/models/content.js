const listeMovies = [
  {
    id: 1,
    title: "Inception",
    type: "movie", // 'movie' | 'series'
    genre: ["sci-fi", "thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    year: 2010,
    duration: 148, // en minutes (movie) ou nb d'épisodes (series)
    rating: "PG-13", // 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17'
    plan: "premium", // 'basic' | 'standard' | 'premium'
    score: 0, // score calculé dynamiquement
    viewCount: 0,
    status: "active", // 'active' | 'archived' | 'coming_soon'
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Stranger Things",
    type: "series",
    genre: ["sci-fi", "horror"],
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard"],
    year: 2016,
    duration: 34, // nombre d'épisodes
    rating: "TV-14",
    plan: "standard",
    score: 0,
    viewCount: 0,
    status: "active",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "The Godfather",
    type: "movie",
    genre: ["crime", "drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino"],
    year: 1972,
    duration: 175,
    rating: "R",
    plan: "premium",
    score: 0,
    viewCount: 0,
    status: "active",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];

export default listeMovies;
