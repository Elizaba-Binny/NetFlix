import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  
  return (
    <div>
      
      <Nav/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Original" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchurl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
