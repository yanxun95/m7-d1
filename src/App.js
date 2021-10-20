import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './component/Search';
import Company from './component/Company';
import Favorites from './component/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact render={(routerProps) => <Search />} />
          <Route path="/company/:name" exact render={(routerProps) => <Company />} />
          <Route path="/favorite/" exact render={(routerProps) => <Favorites />} />
        </header>
      </div>
    </Router>
  );
}

export default App;
