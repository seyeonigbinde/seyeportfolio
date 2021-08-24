import './App.css'
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App
