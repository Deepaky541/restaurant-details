import { useState } from 'react';
import './App.css';
import { RestaurantDetails } from './components/RestaurantDetails';
import data from "./db.json"


function App() {
  const [info, setinfo] = useState(data);
  const [btn, setbtn] = useState(5)

  return (
    <div className="App">
      {info.details.map((el) => {
        if (btn === 5) {
          return <RestaurantDetails data={el} />;
        } else if (btn === 4 && el.ratings >= 4) {
          return <RestaurantDetails data={el} />;
        } else if (btn === 3 && el.ratings >= 3) {
          return <RestaurantDetails data={el} />;
        } else if (btn === 2 && el.ratings >= 2) {
          return <RestaurantDetails data={el} />;
        } else if (btn === 1 && el.ratings >= 1) {
          return <RestaurantDetails data={el} />;
        }
       
})}
      <button onClick={()=>{setbtn(1)}}>1 star and above</button>
      <button onClick={()=>{setbtn(2)}}>2 star and above</button>
      <button onClick={()=>{setbtn(3)}}>3 star and above</button>
      <button onClick={()=>{setbtn(4)}}>4 star and above</button>
      <button onClick={()=>{setbtn(5)}}>show all</button>
    </div>
  );
}

export default App;
