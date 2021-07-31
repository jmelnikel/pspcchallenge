import React, { useState, useEffect } from 'react';
import getCheeseDirectory from './APIs';
import CheeseList from './components/CheeseList'
import './App.css';

const App = () => {
  const [cheeseDirectory, setCheeseDirectory] = useState([]);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    getCheeseDirectory()
      .then((cheeseDirectoryData) => {
        setCheeseDirectory(cheeseDirectoryData.data.CheeseDirectory)
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);



  return (
    <>
      <header>
        <h1>Canadian Cheese Directory</h1>
        <h2>Agriculture and Agri-Food Canada</h2>
        <nav></nav>
      </header>

      <main>
        <CheeseList cheeseDirectory={cheeseDirectory} language={language} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
