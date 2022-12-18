import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const value = localStorage.getItem(key);
  let docValue = initialValue;
  if (value != null) {
    docValue = JSON.parse(value);
  }

  const [storedValue, setStoredValue] = useState(docValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);
  return [storedValue, setStoredValue];
};
