// import logo from './logo.svg';
// import './App.css';
import Card from './MovieDet';
import './MovieDet.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Reac
    //     </a>
    //   </header>
    // </div>
    <>
    <div className="nav">
      <div className="nav_txt">Movies that I like</div>
    </div>
    <Card movie="Inception" dir="Christopher Nolan" genre="Sci-fi" pic="./images/inception.jpg" link="https://www.imdb.com/title/tt1375666/"/>
    <Card movie="Edge Of Tomorrow" dir="Doug Liman" genre="Sci-fi" pic="./images/eot.jpg" link="https://www.imdb.com/title/tt1631867/"/>
    </>
    );
}

export default App;
