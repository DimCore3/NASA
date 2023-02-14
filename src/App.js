import { useEffect, useState } from 'react';
import './App.css';
import PictureOfDay from './components/PictureOfDay';
import PictureOfDayAPI from './API/PictureOfDayAPI';
import NearEarthObjects from './components/NearEarthObjects';

function App() {
  const apiKey = 'c7Ci2OVnPeP6Yh4MkFuybfaN7mazytb4bT78tfXG';
  const [apod, setApod] = useState({});

  useEffect(() => {
    fetchAPOD();
  }, []);

  const fetchNeoWs = async () => {
    
  }

  const fetchAPOD = async () => {
    const result = await PictureOfDayAPI.getAPOD(apiKey);
    setApod(result);
  };

  return (
    <div className="App">
      <PictureOfDay apod={apod} />
      <NearEarthObjects/>
    </div>
  );
}

export default App;