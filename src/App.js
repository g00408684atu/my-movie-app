// Import Bootstrap CSS for styling the application
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BrowserRouter as 'Router', Route, and Routes from 'react-router-dom' for handling client-side routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Import components from their respective paths
import Content from './Components/content'
import Footer from './Components/footer';
import Header from './Components/header';
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
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
