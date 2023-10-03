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

export interface nftCollections {
  id: string;
  collection: string;
  image: string;
}

const useCollection = (solanaAddress: string) => {
  const [testData, setTestData] = useState<CollectionData[]>([]);
  const imageData: NftImage[] = [];
  const nftCollection: nftCollections[] = [];
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCollection = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://cryptic-anchorage-73113-c632759ca232.herokuapp.com//solana-address`,
          {
            params: {
              ownerAddress: solanaAddress,
            },
          }
        );
        setIsLoading(false);
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
        if (
          nftCollection.some(
            (obj) => obj.collection === data.grouping[0].group_value
          )
        ) {
          return;
        } else {
          nftCollection.push({
            collection: data.grouping[0].group_value,
            id: data.id,
            image: data.content.links.image,
          });
        }
      } else {
        imageData.push({
          id: data.id,
          image: data.content.links.image,
          name: data.content.metadata.name,
          collection: 'none',
        });
        if (nftCollection.some((obj) => obj.collection === 'none')) {
          return;
        } else {
          nftCollection.push({
            collection: 'none',
            id: data.id,
            image: 'none',
          });
        }
      }
    });
  }

  return { imageData, nftCollection, isLoading };
};

export default useCollection;
