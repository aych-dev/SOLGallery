import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface CollectionInformation {
  account: string;
  offChainMetaData: { metadata: { name: string } };
}

interface SpecificData {
  account: string;
  name: string;
}

const useCollectionName = (mintAccounts: string[]) => {
  const [testData, setTestData] = useState<CollectionInformation[]>([]);
  const generalData: SpecificData[] = [];

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

  testData.forEach((data) => {
    generalData.push({
      account: data.account,
      name: data.offChainMetaData.metadata.name,
    });
  });

  return generalData;
};

export default useCollectionName;
