import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface CollectionData {
  content: { files: NftImage[] };
}

export interface NftImage {
  uri: string;
}

const useCollection = (solanaAddress: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const imageData: NftImage[] = [];

  useEffect(() => {
    const getCollection = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/`, {
          params: {
            solanaAddress: solanaAddress,
          },
        });
        setTestData(data.items);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    getCollection();
  }, [solanaAddress]);

  if (testData) {
    testData.map((data) => {
      return imageData.push(data.content.files[0]);
    });
  }

  return { imageData };
};

export default useCollection;
