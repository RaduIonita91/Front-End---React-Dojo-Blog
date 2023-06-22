import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // this one fires after every action/render
  // [] is called dependency array. if empty, will make execute only after initial render. add the states you want to be monitored
  // useEffect -> good place to fetch data
  // npx json-server --watch data/db.json --port 8000 -> used to create a fake server out of a json
  useEffect(() => {
    // this controller takes care of fetches that are aborted. so, you need to associate it to the fetch; that signal part
    const abortCont = new AbortController();

    setTimeout(() => {
      //just for proving the Loading part
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data!");
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 100);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
