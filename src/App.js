import './App.css';
//import Composers from './components/Composers';
import Mood from './components/Mood';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <RouterExample /> */}
        <Mood />
        {/* <Composers /> */}
      </header>
    </div>
  );
}

export default App;
