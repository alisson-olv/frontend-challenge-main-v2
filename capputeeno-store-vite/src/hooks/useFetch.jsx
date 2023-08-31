import React, { useEffect, useState } from 'react';

const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3333/', {
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

  }, [query])

  return { data, error, loading };
}

export default useFetch;