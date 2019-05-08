import MovieDatabase from '../apis/MovieDatabase';
import LocalServer from '../apis/LocalServer';

export const selectRegion = (region, lang) => {
    return {
        type: 'REGION_SELECTED',
        payload: { region, lang }
    }
} 

export const fetchMovieList = (locale) => async dispatch => {
    const response = await MovieDatabase.get('/movie/now_playing', {
        params: {
            region: locale.region,
            language: locale.lang
        }
    });
    dispatch({ type: 'FETCH_LIST', payload: response.data.results });
};

export const fetchGenreList = () => async dispatch => {
    const response = await MovieDatabase.get('/genre/movie/list');
    dispatch({ type: 'FETCH_GENRES', payload: response.data.genres });
}

export const fetchExternalId = (movieId = null) => async dispatch => {
    const response = await MovieDatabase.get(`/movie/${movieId}/external_ids`);
    dispatch({ type: 'FETCH_EXTERNAL_IDS', payload: response.data });
}

export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}

export const selectPlace = (place) => {
    return {
        type: 'PLACE_SELECTED',
        payload: place
    }
}

export const fetchSchedule = (movieId = null) => async dispatch => {
    const response = await LocalServer.get(`/schedule/${movieId}`);
    dispatch({ type: 'FETCH_SCHEDULE', payload: response.data });
}

export const selectShowing = (showing) => {
    return {
        type: 'SHOWING_SELECTED',
        payload: showing
    }
}