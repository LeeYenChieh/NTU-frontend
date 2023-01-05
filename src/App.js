import NavBar from './components/navigationBar';
import MainPage from './containers/mainPage'
import SearchPage from './containers/searchPage';
import DetailPage from './containers/detailPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element = {<MainPage />} />
            <Route path="/search/:search" element = {<SearchPage />} />
            <Route path="/detail/:id" element = {<DetailPage />}/>
        </Routes>
    </Router>
);
}

export default App;
