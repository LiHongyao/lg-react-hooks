import { useCallback, useEffect, useState } from 'react';

function useDateCountdown(targetDate: Date) {
  const [data, setData] = useState(['00', '00', '00', '00']);

  const formatNumber = useCallback((n: number) => {
    const nStr = n.toString();
    return nStr[1] ? nStr : '0' + nStr;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const minus = targetDate.getTime() - currentDate.getTime();
      if (minus < 0) {
        clearInterval(timer);
        return;
      }
      const day = formatNumber(Math.floor(minus / 1000 / 60 / 60 / 24));
      const hours = formatNumber(Math.floor((minus / 1000 / 60 / 60) % 24));
      const minutes = formatNumber(Math.floor((minus / 1000 / 60) % 60));
      const seconds = formatNumber(Math.floor((minus / 1000) % 60));
      setData([day, hours, minutes, seconds]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return data;
}

export default useDateCountdown;