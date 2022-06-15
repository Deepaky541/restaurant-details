import './App.css';
import { RestaurantDetails } from './components/RestaurantDetails';
import data from "./db.json"

function App() {
  return (
    <div className="App">
      {data.details.map((el)=>(<RestaurantDetails data={el} />))}
    </div>
  );
}

export default App;
