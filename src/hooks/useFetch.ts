function useFetch() {
  const fetchUrlResponseStatus = async (url: string): Promise<number> => {
    const responseStatus: number = await fetch(url).then((res) => {
      return res.status;
    });
    return responseStatus;
  };

  return { fetchUrlResponseStatus };
}

export default useFetch;