import React, { useState, useEffect } from 'react';
import getCheeseDirectory from './APIs';
import CheeseList from './components/CheeseList';
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

  const handleChange = (event) => {
    setLanguage(event.target.value)
  };

  return (
    <>
      <header>
        <h1>Canadian Cheese Directory</h1>
        <h2>Agriculture and Agri-Food Canada</h2>
        <nav></nav>
      </header>

      <main>
        <form>
          <label htmlFor={language}>Language: / Langage:
            <select
              id={language}
              name={language}
              value={language}
              onChange={handleChange}
            >
              <option value="EN">Englsh</option>
              <option value="FR">Francais</option>
            </select>
          </label>
        </form>

        <CheeseList cheeseDirectory={cheeseDirectory} language={language} />
      </main>

      <footer></footer>
    </>
  );
};

export default App;
