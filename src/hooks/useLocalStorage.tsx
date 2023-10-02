function useLocalStorage(){
  function getFromLocalStorage(key: string): string | null {
    const dataFromLocalStorage: string | null = localStorage.getItem(key);
  
    return dataFromLocalStorage;
  }
  
  function saveToLocalStorage(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }  
  
  function removeFromLocalStorage(key: string): void {
    return localStorage.removeItem(key);
  }
  
  function clearLocalStorage(): void {
    return localStorage.clear();
  }

  return {
    getFromLocalStorage,
    saveToLocalStorage,
    removeFromLocalStorage,
    clearLocalStorage
  }
}


export default useLocalStorage;