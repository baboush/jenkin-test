import {
  addMovie,
  getAllMovie,
  getMovieById,
  updateMovie,
} from "../../services/catalogue-service.js";

describe("catalog-service", () => {
  beforeEach(() => {
    // Rien à réinitialiser sur des fonctions pures
    // Sur un objet avec état, on remettrait à zéro ici
  });

  describe("getAllMovie", () => {
    it(
      ("should is array all movies",
      async () => {
        const movies = await getAllMovie();
        expect(movies).toBeInstanceOf(Array);
      }),
    );

    it("should return an array of movies with id and title", async () => {
      const movies = await getAllMovie();
      expect(movies).toBeInstanceOf(Array);
      movies.forEach((movie) => {
        expect(movie).toHaveProperty("id");
        expect(movie).toHaveProperty("title");
      });
    });
  });

  describe("addMovie", () => {
    it("should add a new movie to the list", async () => {
      const newMovie = {
        id: 4,
        title: "The Matrix",
        type: "movie",
        genre: ["sci-fi", "action"],
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne"],
        year: 1999,
        duration: 136,
        rating: "R",
        plan: "premium",
        score: 0,
        viewCount: 0,
        status: "active",
        createdAt: "2026-01-01T00:00:00.000Z",
      };
      const moviesBefore = await getAllMovie();
      const response = await addMovie(newMovie);
      expect(response.length).toBe(moviesBefore.length + 1);
      expect(response).toContainEqual(
        expect.objectContaining({ id: 4, title: "The Matrix" }),
      );
    });
  });

  describe("getMovieById", () => {
    it("should return the movie with the given id", async () => {
      const movie = await getMovieById(1);
      expect(movie).toHaveProperty("id", 1);
      expect(movie).toHaveProperty("title", "Inception");
    });
  });

  describe("updateMovie", () => {
    it("should update the movie and return update", async () => {
      const newMovie = {
        id: 2,
        title: "The Matrix",
        type: "movie",
        genre: ["sci-fi", "action"],
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne"],
        year: 1999,
        duration: 136,
        rating: "R",
        plan: "premium",
        score: 0,
        viewCount: 0,
        status: "active",
        createdAt: "2026-01-01T00:00:00.000Z",
      };

      const update = await updateMovie(newMovie.id, newMovie);

      expect(newMovie.id).toBeDefined();
      expect(JSON.stringify(update)).toBe(JSON.stringify(newMovie));
    });
  });
});
