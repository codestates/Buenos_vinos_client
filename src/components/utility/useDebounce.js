import { useState, useEffect } from 'react';

function useDebounce(value, timeout) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
}

export default useDebounce;
