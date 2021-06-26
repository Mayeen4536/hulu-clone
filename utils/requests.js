const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedy: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchAdventure: {
        title: 'Adventure',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchCrime: {
        title: 'Crime',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=80`
    },
    fetchDocumentary: {
        title: 'Documentary',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchScifi: {
        title: 'Sci-fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchFamily: {
        title: 'Family',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`
    },
    
    
}