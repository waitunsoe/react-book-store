import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    const fetchData = () => {
      fetch(url, options)
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
    }

    let options = {
      signal,
      method
    };

    if (method === "GET") {
      fetchData();
    }

    if(method === "POST" && postData) {
      options = {
        ...options,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      }
      fetchData();
    }

    return () => {
      abortController.abort();
    };

  }, [url, postData]);

  return { data, setPostData, loading, error };
};

export default useFetch;
