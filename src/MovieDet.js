import './MovieDet.css';

function Card(props){
    return (
        <>
  <div className="movie">
    <div className="col">
      <div id="image">
        <img src={props.pic}  alt="Movie" />
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="bold">Movie : &nbsp;</div>
        <div className="movie_name">{props.movie}</div>
        <div className="bold"> &nbsp; {props.yr}</div>
      </div>
      <div className="row">
        <div className="bold">Director : &nbsp;</div>
        <div className="dir">{props.dir}</div>
      </div>
      <div className="row">
        <div className="bold">Genre :&nbsp;</div>
        <div className="plot">{props.genre}</div>
      </div>
      <div className="row">
        {" "}
        <span>Know more at &nbsp; </span>
        <a href={props.link}>Imdb</a>
      </div>
    </div>
  </div>
</>
    )
}

export default Card;