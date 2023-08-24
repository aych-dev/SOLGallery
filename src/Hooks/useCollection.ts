import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useCollection = () => {
  const [testData, setTestData] = useState([]);
  console.log(testData);
  useEffect(() => {
    const getCollection = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/`);
        setTestData(data);
        console.log(data);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    getCollection();
  }, []);

  return { testData };
};

export default useCollection;
