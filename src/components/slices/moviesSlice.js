import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getMovies = createAsyncThunk('users/getMovies', async () => {
  const response = await axios.get('https://movie-api-pied-six.vercel.app/api/movies')
  return response.data
})
export const moviesSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getMovies.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})
export default moviesSlice.reducer