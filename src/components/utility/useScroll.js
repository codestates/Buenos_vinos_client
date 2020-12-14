import React from 'react';
import _ from 'lodash';

export default function useScroll() {
  const [state, setState] = React.useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  React.useEffect(() => {
    const throttledScroll = _.throttle(onScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return state;
}
