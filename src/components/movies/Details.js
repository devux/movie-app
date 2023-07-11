import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const MovieDetailItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

function MovieDetails(props) {
    return (
        <MovieDetailItem>

            <div>
                <h2>{props.data.length ? "Movie Details - Please select any movie" : "Movie Details"}</h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Title:</h4></Grid>
                    <Grid item xs={9}><p> {props.data.title}</p></Grid>
                </Grid>


                <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Description:</h4></Grid>
                    <Grid item xs={9}><p> {props.data.description}</p></Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Director:</h4></Grid>
                    <Grid item xs={9}><p> {props.data.director}</p></Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={3}><h4>ReleaseYear:</h4></Grid>
                    <Grid item xs={9}><p> {props.data.releaseYear}</p></Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={3}><h4>Rating:</h4></Grid>
                    <Grid item xs={9}><p> {props.data.rating}</p></Grid>
                </Grid>
            </div>

        </MovieDetailItem>
    )
}

export default MovieDetails;