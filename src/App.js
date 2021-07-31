import React, { useState, useEffect } from 'react';
import getCheeseDirectory from './APIs';
import './App.css';

const App = () => {
  const [cheeseDirectory, setCheeseDirectory] = useState([]);

  useEffect(() => {
    getCheeseDirectory()
      .then((cheeseDirectoryData) => {
        console.log("This is data", cheeseDirectoryData.data.CheeseDirectory)
        setCheeseDirectory(cheeseDirectoryData.data.CheeseDirectory)
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);



  return (
    <div>

    </div>
  );
}

export default App;
