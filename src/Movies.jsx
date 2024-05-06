import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesPropagation, setCurrentPage, setCurrentPageadd, setCurrentPageaddmin } from './MoviesSlice1';

export default function Movies() {
  const dispatch = useDispatch();
  const {movies3} = useSelector((state) => state.movies1);
  const {currentPage} = useSelector((state) => state.movies1);

  useEffect(() => {
    dispatch(moviesPropagation(currentPage));
  }, [currentPage]);


  return (
    <div className='row'>
      {movies3.map((movie) => (
        <div className='col-md-3' key={movie.id}>
          <div className='movie mt-3'>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className='w-100' alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
            <p>{movie.overview.split(' ').slice(0, 10).join(' ')}</p>
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <button
          className='btn btn-danger me-3'
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPageaddmin())}
        >
          Previous
        </button>
        <button className='btn btn-secondary' onClick={() => dispatch(setCurrentPageadd())}>
          Next
        </button>
      </div>
    </div>
  );
}