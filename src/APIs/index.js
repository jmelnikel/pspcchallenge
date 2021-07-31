import axios from 'axios';

const getCheeseDirectory = async () => {
  const baseURL = "/canadianCheeseDirectory.json"

  const getCheeseDirectoryAxios = axios.create({
    baseURL,
  });

  return await getCheeseDirectoryAxios.get();
}

export default getCheeseDirectory;