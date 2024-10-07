// Import Bootstrap CSS for styling the application
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BrowserRouter as 'Router', Route, and Routes from 'react-router-dom' for handling client-side routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Import components from their respective paths
import Content from './Components/content'
import Footer from './Components/footer';
import Header from './Components/header';
import Read from './Components/read';
import Movies from './Components/movies';
import Movieitem from './Components/movieitem';
import Create from './Components/create';
import NavigationBar from './Components/navigationbar';
function App() {
  return (
    // The Router component wraps everything to enable client-side routing
    <Router>
      <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieitem" element={<Movieitem />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
