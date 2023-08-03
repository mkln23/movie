import './MovieDet.css';
import './images/inception.jpg';
import './images/eot.jpg';

// import img from './images/eot.jpg'
// import './images/'
// // import inception from './images/inception.jpg';
// // import picChoose from './MoviePic';

// function pic(movie){
//   var path;
//   switch(movie){
//       case "Inception":{ path="./images/inception.jpg"; break; }
//       case "Edge Of Tomorrow":{ path="./images/eot.jpg"; break; }
//          default : {path="";break;}
//   }
//   return path;
// }



function Card(props){
    return (
        <>
  <div className="movie">
    <div className="col">
      <div id="image">
        {/* <img src= {pic(props.movie)} alt="Movie" /> */}
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="bold">Movie : &nbsp;</div>
        <div className="movie_name">{props.movie}</div>
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

function insertPic(props){
  var pic=document.createElement("img");
  pic.setAttribute("src",props.pic);
  document.getElementById("image").appendChild(pic)
  return (<></>);
}

export default Card;