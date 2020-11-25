import React, { useRef, useEffect } from 'react';

import Footer from '../../../app-components/dist/footer/Footer';

customElements.get('app-footer') || customElements.define('app-footer', Footer);

const useEvt = (evtName, evtFunc) => {
  const evtRef = useRef(null);

  useEffect(() => {
    if (!evtRef.current) return null;
    evtRef.current.addEventListener(evtName, evtFunc);
  }, [evtName, evtFunc, evtRef]);

  return evtRef;
};

export default function () {
  const onGood = useEvt('good', evt => { console.log(evt.detail.text); });

  return (
    <>
      <h2 class="app-nav-item" style={{ borderColor: 'green' }}>
        About
      </h2>
      <app-footer title={'Good 123'} ref={onGood}></app-footer>
    </>
  );
}
