import { useState } from 'react';
import getRandomAnimal from './getRandomAnimal';
import AnimalShow from './AnimalShow';
import './App.css'



function App() {

const [animals, setAnimals] = useState([]);

const handleClick = () => {
  setAnimals([...animals, getRandomAnimal()]);
};
const renderedAnimals = animals.map((animal, index) => {
  return <AnimalShow type={animal} key={index} />
});

  return (
    <div className='app'>
    <button onClick={handleClick}>Add Animal</button>
    <div className='animal-list'>{renderedAnimals} </div>
    </div>
  );
}
export default App;