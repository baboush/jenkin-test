import listMovies from "../models/content.js";

export const getAllMovie = async () => {
  const response = listMovies.map((movie) => {
    return { id: movie.id, title: movie.title };
  });
  return response;
};

export const addMovie = async (movie) => {
  const newMovie = { ...movie };
  listMovies.push(newMovie);
  console.log(listMovies);
  return [...listMovies];
};

export const getMovieById = async (id) => {
  const movie = listMovies.find((movie) => movie.id === id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
};

export const updateMovie = async (id, updatedData) => {
  const index = listMovies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    throw new Error("Movie not found");
  }
  listMovies[index] = { ...listMovies[index], ...updatedData };
  return listMovies[index];
};
