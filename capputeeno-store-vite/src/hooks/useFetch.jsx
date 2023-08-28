import React, { useEffect, useState } from 'react';

const useFetch = (url, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query
          })
        });

        let actualData = await response.json();
        setData(actualData);
        setError(null);

      } catch (err) {
        setError(err.message);
        setData(null);

      } finally {
        setLoading(false);
      };
    };
    
    getData();

  }, [])

  return { data, error, loading };
}

export default useFetch;