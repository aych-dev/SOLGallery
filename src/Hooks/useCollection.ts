import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface CollectionData {
  content: { files: NftImage[] };
}

interface NftImage {
  uri: string;
}

const useCollection = (solanaWallet: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const ImageData: NftImage[] = [];

  useEffect(() => {
    const getCollection = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/`, {
          params: {
            ownerAddress: solanaWallet,
          },
        });
        setTestData(data.items);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    getCollection();
  }, [solanaWallet]);

  testData.map((data) => {
    ImageData.push(data.content.files[0]);
  });

  return { testData, ImageData };
};

export default useCollection;
