import './data.css';

function Card(){
    return (
        <>
  <div className="nav">
    <div className="nav_txt">Movies that I like</div>
  </div>
  <div className="movie">
    <div className="col">
      <div className="image">
        {/* <img src="images/inception.jpg" alt="Movie Photo" /> */}
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="bold">Movie : &nbsp;</div>
        <div className="movie_name">Inception</div>
      </div>
      <div className="row">
        <div className="bold">Director : &nbsp;</div>
        <div className="dir">Christopher Nolan</div>
      </div>
      <div className="row">
        <div className="bold">Genre :&nbsp;</div>
        <div className="plot">Sci-fi</div>
      </div>
      <div className="row">
        {" "}
        <span>Know more at &nbsp; </span>
        <a href="https://www.imdb.com/title/tt1375666/">Imdb</a>
      </div>
    </div>
  </div>
</>

    )
}

export default Card;