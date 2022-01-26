import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const Film = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  const fetchMovie = async (id) => {

    const url = 'https://pr-movies.herokuapp.com/api/movies/'+id;
    let response = await fetch(url);
    let responseJson = await response.json();
    setMovie(responseJson);
    console.log(movie);
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  
    return (
      <div className="content">
        <div className="content5">
        <div className="film-add">
        <img  className="film-add" src={movie.image} alt='movie' />
        </div>
        <div className="div-2-add">
        <h2 className="title-add">{movie.title}</h2>
        <p className="add-content">{movie.content}</p>
            <div className="btn-div">
              <button type="submit" className="button2">
                <Link class="link-btn2" to={'./home'}>Back</Link></button>
            </div>
        </div>
      </div>
        <footer class='footer' >
          <p class="footer">Copy right 2022 - Films</p>
        </footer>

    
    </div>
    );

}

export default Film;