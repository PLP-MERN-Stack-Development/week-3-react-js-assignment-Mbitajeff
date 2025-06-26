import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get from localStorage then parse stored json or return initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Ignore write errors
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage; 