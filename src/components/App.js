import '../styles/App.css';
import Nav from './Nav';
import RouteSwitch from './RouteSwitch';
function App() {
  return (
    <div className="App">
      <RouteSwitch>
        <Nav></Nav>
      </RouteSwitch>
    </div>
  );
}

export default App;
