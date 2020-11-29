import { useCallback, useRef, useEffect } from 'react';


type FunctionType = <T>(...args: T[]) => void;
interface IRefs {
  fn: FunctionType;
  timer: any;
}

function useDebounce(fn: FunctionType, delay: number, deps: any[] = []) {
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
       
        current.fn.call(null, ...args);
      }, delay);
    },
    [deps],
  );
}


export default useDebounce;
