import { useEffect, useState } from 'react';
import './App.css';
import PictureOfDay from './components/PictureOfDay';
import NasaAPI from './API/NasaAPI';
import NearEarthObjects from './components/NearEarthObjects';

function App() {
  const apiKey = 'c7Ci2OVnPeP6Yh4MkFuybfaN7mazytb4bT78tfXG';
  const [apod, setApod] = useState({});
  const [neoWs, setNeoWs] = useState({});

  useEffect(() => {
    fetchAPOD();
    fetchNeoWs();
  }, []);

  const fetchAPOD = async () => {
    const result = await NasaAPI.getAPOD(apiKey);
    setApod(result);
  };
  
  const fetchNeoWs = async () => {
    const result = await NasaAPI.getNeoWs(apiKey);
    setNeoWs(result);
  }

  return (
    <div className="App">
      <PictureOfDay apod={apod} />
      <NearEarthObjects neoWs={neoWs}/>
    </div>
  );
}

export default App;