import React, { useState, useEffect, useCallback } from 'react';
import ButtonAppBar from '../layout/AppBar';
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
import { getMovies } from '../slices/moviesSlice';
import { getMovieDetails } from '../slices/movieDetailsSlice';
import { useDispatch, useSelector } from 'react-redux'
import MovieDetails from './Details';
import Loading from '../shared/Loading';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ListMovies() {
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([]);
    const { data } = useSelector((state) => state.movieDetails)

    useEffect(() => {
        dispatch(getMovies())
            .then((response) => {
                setMovies(response.payload)
            })
    }, [dispatch])


    const onClickMovie = useCallback((orderDetails) => {
        dispatch(getMovieDetails(orderDetails))
    }, [dispatch]);

    return (
        <div>
            <ButtonAppBar />
            <br />{
                movies.length ? <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} style={{overflow: "scroll"}}>
                        <Grid item xs={8}>
                            <Item>
                                <h2>Movie List</h2>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {movies.map(movie => (
                                        <div>
                                            <ListItem onClick={() => onClickMovie(movie)} style={{cursor: "pointer"}} >
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
                        {data &&
                            <Grid item xs={4}>
                                <MovieDetails data={data} />
                            </Grid>
                        }
                    </Grid>
                </Box> : <Loading />
            }
        </div>
    );
}

export default ListMovies;
