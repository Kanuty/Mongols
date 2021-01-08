import React, { FunctionComponent } from 'react';

import {Divider} from "../../components/Divider";
import {WayFinder} from "../../components/WayFinder";

export const TestingViev: FunctionComponent = () => {

  return (
    <div className="globalContainer">
      <Divider/>
      <Divider/>
      <WayFinder title="Mongol"/>
      <Divider/>
    </div>
  );
}
