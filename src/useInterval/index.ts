import { useEffect, useRef } from 'react';

type Fn = () => void;
function useInterval(cb: Fn, delay: number = 1000) {
  const cbRef = useRef<any>();
  // 缓存函数
  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  // 定时器
  useEffect(() => {
    const timer = setInterval(() => {
      const clearFn = cbRef.current && cbRef.current();
      if (clearFn) {
        clearFn();
        clearInterval(timer);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [delay, cbRef]);
}

export default useInterval;