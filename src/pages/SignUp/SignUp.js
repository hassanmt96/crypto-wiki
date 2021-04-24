import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';
import Form from './Form';

function SignUp() {
  return (
    <>
      <div>
        <Form />
        <InfoSection {...homeObjThree} />
      </div>
      {/* <InfoSection {...homeObjOne} />
      */}
    </>
  );
}

export default SignUp;
