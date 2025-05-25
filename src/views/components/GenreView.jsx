import './GenreView.css';

function GenreView({ genresList, onGenreClick }) {
    return (
      <div className="genre-tag">
        {genresList.map((genre) => (
          <ul><li key={genre.id} onClick={() => onGenreClick(genre.id)}>
            {genre.genre}
          </li></ul>
        ))}
      </div>
    )
  }
  
  export default GenreView;