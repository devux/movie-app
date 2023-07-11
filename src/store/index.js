import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../components/slices/moviesSlice'
import movieDetailsSlice from '../components/slices/moviesSlice'

export default configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetails: movieDetailsSlice
  },
})