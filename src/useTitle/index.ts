import { useEffect } from 'react';

function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
    // 兼容微信环境
    if (/MicroMessenger/i.test(navigator.userAgent)) {
      const i = document.createElement('iframe');
      i.src = '/favicon.icon';
      i.style.display = 'none';
      i.onload =  () => {
        setTimeout(() => {
          i.remove();
        }, 0);
      };
      document.body.appendChild(i);
    }
  }, []);
  return;
}

export default useTitle;
