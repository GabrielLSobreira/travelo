import { useState } from 'react';
import { ToTop } from './styles';

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener('scroll', () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });

  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src="/assets/logo.png" alt="Travelo Logo" />
    </ToTop>
  );
}
