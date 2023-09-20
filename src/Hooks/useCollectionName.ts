import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

const useCollectionName = (mintAccounts: string[]) => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    const getCollectionName = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/collection-name`,
          {
            params: {
              mintAccounts: mintAccounts,
            },
          }
        );

        setTestData(data);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    if (mintAccounts.length > 1) {
      getCollectionName();
    }
  }, [mintAccounts]);

  return testData;
};

export default useCollectionName;
