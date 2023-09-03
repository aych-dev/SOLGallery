import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface CollectionData {
  id: string;
  content: {
    links: { image: string };
    metadata: { name: string };
  };
  grouping: [{ group_value: string }];
}

export interface NftImage {
  image: string;
  id: string;
  name: string;
  collection: string[];
}

const useCollection = (solanaAddress: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const imageData: NftImage[] = [];
  console.log(imageData);

  useEffect(() => {
    const getCollection = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/`, {
          params: {
            ownerAddress: solanaAddress,
          },
        });
        setTestData(data);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    if (solanaAddress) {
      getCollection();
    }
  }, [solanaAddress]);

  if (testData) {
    testData.forEach((data) => {
      imageData.push({
        id: data.id,
        image: data.content.links.image,
        name: data.content.metadata.name,
        collection: data.grouping.map((group) => {
          return group.group_value;
        }),
      });
    });
  }

  return imageData;
};

export default useCollection;
