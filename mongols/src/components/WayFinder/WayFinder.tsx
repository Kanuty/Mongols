import React, {FunctionComponent} from 'react';

import './style.scss';

// TODO change this name tomoreuniversal/meaningfull
interface Khaganat {
  title: string;
}

export const WayFinder: FunctionComponent<Khaganat> = (props) => {
  return (
      <div className="wayFinder">
        <div className="titles" >
          <h3>
            {/* <a href=""></a> */}
            {props.title}
          </h3>
        </div>
        <div className="pagePosition">
          <div className="goToTop"></div>
          <ul className="wayFinderPosition">
            {/* TODO for each section on page, make li element with a */}
          </ul>
        </div>
      </div>
  );
}