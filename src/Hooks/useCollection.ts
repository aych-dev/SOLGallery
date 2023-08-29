import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface CollectionData {
  id: string;
  content: {
    files: [{ uri: string }];
    metadata: { name: string };
  };
}

export interface NftImage {
  uri: string;
  id: string;
  name: string;
}

const useCollection = (solanaAddress: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const imageData: NftImage[] = [];

  console.log(testData);

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
    testData.forEach((data) => {
      imageData.push({
        id: data.id,
        uri: data.content.files[0].uri,
        name: data.content.metadata.name,
      });
    });
  }

  return imageData;
};

export default useCollection;
