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
  collection: string | null;
}

const useCollection = (solanaAddress: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const imageData: NftImage[] = [];
  const nftCollection: string[] = [];
  console.log(nftCollection);

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
      if (data.grouping[0]) {
        imageData.push({
          id: data.id,
          image: data.content.links.image,
          name: data.content.metadata.name,
          collection: data.grouping[0].group_value,
        });
        if (nftCollection.includes(data.grouping[0].group_value)) {
          return;
        } else {
          nftCollection.push(data.grouping[0].group_value);
        }
      } else {
        imageData.push({
          id: data.id,
          image: data.content.links.image,
          name: data.content.metadata.name,
          collection: 'none',
        });
        if (nftCollection.includes('none')) {
          return;
        } else {
          nftCollection.push('none');
        }
      }
    });
  }

  return imageData;
};

export default useCollection;
