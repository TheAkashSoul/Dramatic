import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const Slice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const data = {
        movieId: nanoid(),
        movie: action.payload,
      };
      state.movies.push(data);
    },
    removeMovie: (state, action) => {
      const movieIdToRemove = action.payload;
      const updatedMovies = state.movies.filter((movie) => {
        return movie.movie.id !== movieIdToRemove;
      });

      state.movies = updatedMovies;
    },
  },
});

export const { addMovie, removeMovie } = Slice.actions;
export default Slice.reducer;
