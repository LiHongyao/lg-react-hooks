import { useCallback, useRef, useEffect } from 'react';

interface IRefs {
  fn: () => void;
  timer: any;
}

function useDebounce(fn: () => void, delay: number, deps: any[] = []) {
  const { current } = useRef<IRefs>({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      if (current.timer) {
        clearTimeout(current.timer);
      }
      current.timer = setTimeout(() => {
        // @ts-ignore
        current.fn.call(null, ...args);
      }, delay);
    },
    [deps],
  );
}

export default useDebounce;
