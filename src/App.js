import Card from './MovieDet';
import './MovieDet.css';

function App() {
  return (
    <>
    <div className="nav">
      <div className="nav_txt">Movies that I like</div>
    </div>
    <Card movie="Inception" dir="Christopher Nolan" yr="(2014)" genre="Sci-fi" pic="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" link="https://www.imdb.com/title/tt1375666/"/>
    <Card movie="Edge Of Tomorrow" dir="Doug Liman" yr="(2014)" genre="Sci-fi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-uYPkMBwR3839SeocPELr1oab2QiU2UkeA&usqp=CAU" link="https://www.imdb.com/title/tt1631867/"/>
    </>
    );
}

export default App;
