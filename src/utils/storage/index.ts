const getDataFromLocalStorage = (key: string) => {
  try {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  } catch (error) {
    console.log("Error getting data from local storage", error);
    return null;
  }
};

const setDataToLocalStorage = (key: string, data: unknown) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
    return null;
  } catch (error) {
    console.log("Error setting data to local storage", error);
  }
};

const removeDataFromLocalStorage = (key: string) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.log("Error removing data from local storage", error);
  }
};

const clearLocalStorage = () => {
  try {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  } catch (error) {
    console.log("Error clearing local storage", error);
  }
};

const storage = {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  removeDataFromLocalStorage,
  clearLocalStorage,
};

export default storage;
