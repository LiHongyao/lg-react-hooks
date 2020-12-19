import { useEffect } from 'react';

function useTitle(title: string) {
  useEffect(() => {
    // 兼容微信环境
    if (/MicroMessenger/i.test(navigator.userAgent)) {
      const i = document.createElement('iframe');
      i.src = '/favicon.icon';
      i.style.display = 'none';
      i.onload =  () => {
        document.title = title;
        setTimeout(() => {
          i.remove();
        }, 0);
      };
      document.body.appendChild(i);
    }else {
      document.title = title;
    }
  }, []);
  return;
}

export default useTitle;
