export const API_KEY = "9bfed311926b5d91bde2a7314b05f931";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/"
export const VIDEO_URL = "https://api.themoviedb.org/3/movie/{movie_id}/videos"

export const requests = {
    TrendingMovies:`${BASE_URL}trending/all/week?api_key=${API_KEY}&language=en-US`,
    PopularMovies: `${BASE_URL}movie/popular?api_key=${API_KEY}`,
    TopRatedMovies: `${BASE_URL}movie/top_rated?api_key=${API_KEY}`,
    NowPlayingMovies: `${BASE_URL}movie/now_playing?api_key=${API_KEY}`,
    UpcomingMovies: `${BASE_URL}movie/upcoming?api_key=${API_KEY}`,
    AnimatedMovies: `${BASE_URL}movie/popular?api_key=${API_KEY}&with_genres=16`,
    ComedyMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,
    ActionMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,
    ScienceAndFiction: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=878`,
    AdventuresMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=12`,
    CrimeMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=80`,
    DocumentaryMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,
    DramaMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=18`,
    FantasyMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=14`,
    HorrorMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    ThrilledMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=53`,
    WarMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10752`,
};

