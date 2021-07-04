import './App.css';
//import Composers from './components/Composers';
import Mood from './components/Mood';
import FavoritesPage from './components/FavoritesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <RouterExample /> */}
        <Mood />
        <FavoritesPage />
        {/* <Composers /> */}
      </header>
    </div>
  );
}

export default App;
