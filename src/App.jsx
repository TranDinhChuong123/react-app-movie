import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch';
import { MovieProvider } from '../context/MovieProvider';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataMovieRate, setDataMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setMovieSearch('')
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setMovieSearch(data.results)
      console.log('data ', data);
    } catch (error) {
      console.log(error.stack);
    }
  }
  useEffect(() => {
    const fetchMovie = async () => {
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      try {

        const [responseData1, responseData2] = await Promise.all([
          fetch(url1, options).then(res => res.json()),
          fetch(url2, options).then(res => res.json())
        ]);

        setDataMovie(responseData1.results)
        console.log('responseData2.results', responseData2.results);
        setDataMovieRate(responseData2.results)

      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }

    fetchMovie()
  }, [])
  return (
    <>
      <MovieProvider>
        <div>
          <Header onSearch={handleSearch} />
          <Banner />

          {movieSearch.length > 0 ? (<MovieSearch title={'Kết quả tìm kiếm'} data={movieSearch} />)
            : (
              <>
                <MovieList title={"Phim Hot"} data={dataMovie} />
                <MovieList title={"Phim Đề cử"} data={dataMovieRate} />
              </>)}

        </div>
      </MovieProvider>
    </>
  )
}

export default App
