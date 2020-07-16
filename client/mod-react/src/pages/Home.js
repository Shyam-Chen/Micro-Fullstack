import React, { useRef, useEffect } from 'react';

import Header from '../../../app-components/dist/header/Header';

customElements.get('app-header') || customElements.define('app-header', Header);

const useEvt = (evtName, evtFunc) => {
  const evtRef = useRef(null);

  useEffect(() => {
    if (!evtRef.current) return null;
    evtRef.current.$on(evtName, evtFunc);
  }, [evtName, evtFunc, evtRef]);

  return evtRef;
};

export default function () {
  const onMessage = useEvt('message', evt => { console.log(evt.detail.text); });

  return (
    <h2 className="app-nav-item" style={{ borderColor: 'red' }}>
      Home
      <app-header></app-header>
      <app-header title={'Title 2'} ref={onMessage}></app-header>
    </h2>
  );
}
