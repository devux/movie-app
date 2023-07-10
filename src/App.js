import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ButtonAppBar from './components/layout/AppBar';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MovieDetailItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function App() {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios.get('https://movie-api-pied-six.vercel.app/api/movies') // Replace with your movie API endpoint
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onClickMovie = useCallback((orderDetails) => {
    axios.get(`https://movie-api-pied-six.vercel.app/api/movies/${orderDetails.id}`) // Replace with your movie API endpoint
      .then(response => {
        setMovieDetails(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <ButtonAppBar />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={movieDetails ? 8 : 12}>
            <Item>
              <h2>Movie List</h2>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {movies.map(movie => (
                  <div>
                    <ListItem onClick={() => onClickMovie(movie)} >
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={`${movie.title}-${movie.director}`} secondary={movie.description} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>

                ))}

              </List>

            </Item>
          </Grid>

          {movieDetails &&
            <Grid item xs={4}>

              <MovieDetailItem>
                <div>
                <h2>Movie Details</h2>
                  <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Title:</h4></Grid>
                    <Grid item xs={9}><p> {movieDetails.title}</p></Grid>
                  </Grid>
          

                  <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Description:</h4></Grid>
                    <Grid item xs={9}><p> {movieDetails.description}</p></Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Director:</h4></Grid>
                    <Grid item xs={9}><p> {movieDetails.director}</p></Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={3}><h4>ReleaseYear:</h4></Grid>
                    <Grid item xs={9}><p> {movieDetails.releaseYear}</p></Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Rating:</h4></Grid>
                    <Grid item xs={9}><p> {movieDetails.rating}</p></Grid>
                  </Grid>


                  {/* </h4> */}
                </div>

              </MovieDetailItem>
            </Grid>
          }



        </Grid>
      </Box>

      <button onClick={() => setMovieDetails(null)}>Reset</button>



    </div>
  );
}

export default App;
