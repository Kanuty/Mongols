import React, {Fragment} from 'react';

import divider from './img/lol_divider.png';

import './style.scss';

export const Divider = () => {
  return (
    <Fragment>
      {/* TODO change image of divider. Right now it is copied version from universe.leagueoflegends.com */}
      <img className="divider" src={divider} alt="Divider"></img>
    </Fragment>
  );
}