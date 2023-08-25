import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((e) => setError(e.message));

    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
