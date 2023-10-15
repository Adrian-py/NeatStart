function useFetch() {
  const fetchUrlResponseStatus = async (url: string): Promise<boolean> => {
    return await fetch(url, { method: "GET", mode: 'no-cors',}).then((res) => {
      return res.ok === true;
    });
  };

  return { fetchUrlResponseStatus };
}

export default useFetch;