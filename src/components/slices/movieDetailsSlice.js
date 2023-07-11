import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getMovieDetails = createAsyncThunk('users/getMovies', async (orderDetails) => {
  const response = await axios.get(`https://movie-api-pied-six.vercel.app/api/movies/${orderDetails.id}`)
  return response.data
})
export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'fulfilled'
      }
    })
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default movieDetailsSlice.reducer