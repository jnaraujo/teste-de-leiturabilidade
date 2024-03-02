// code from https://www.codemzy.com/blog/reactjs-debounce-hook

import { type DependencyList, useCallback, useEffect } from "react";

function debounce<T>(func: (...args: Array<T>) => unknown, wait = 200) {
  let timeout: number | NodeJS.Timeout;

  function executedFunction(...args: Array<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  executedFunction.cancel = function () {
    clearTimeout(timeout);
  };
  return executedFunction;
}

function useDebounce<T>(
  callback: (...args: Array<T>) => unknown,
  delay = 1000,
  deps: DependencyList = [],
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(debounce(callback, delay), [
    delay,
    ...deps,
  ]);

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback, delay]);
  return debouncedCallback;
}

export default useDebounce;
