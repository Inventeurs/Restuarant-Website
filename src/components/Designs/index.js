import React from 'react';
import {
  DesignImg1,
  DesignImg2
} from './DesignElements';
import design1 from '../../images/design01.svg';
//import design2 from '../../images/design02.svg';

const Design = () => {

  return (
    <div>
        <DesignImg1 src= {design1} alt="Design"/>
        {/*<DesignImg2 src= {design2} alt="Design"/>*/}
    </div>
  );
};

export default Design;
