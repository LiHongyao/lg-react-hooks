import { useState, useCallback } from 'react';

function useBoolean(defaultValue?: boolean) {
  const [state, setState] = useState(!!defaultValue);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);
  const setFalse = useCallback(() => {
    setState(false);
  }, []);
  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
}

export default useBoolean;
