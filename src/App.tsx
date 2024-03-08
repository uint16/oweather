import React from 'react';
import './App.css';
import Weather from './components/weather/Weather';
import SearchLocation from './components/searchLocation/SearchLocation';
import { useSelector } from 'react-redux';
import UnitSelector from './components/selectors/UnitSelector';
import { RootState } from './store/store';

function App() {

  const selectedCity = useSelector((state: RootState) => state.app.selectedCity)

  return (
    <div className="App">
      <UnitSelector />
      <SearchLocation />
      { selectedCity && <Weather {...selectedCity}/> }
    </div>
  );
}

export default App;
