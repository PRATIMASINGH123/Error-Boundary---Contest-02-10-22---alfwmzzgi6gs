import React, { useState } from "react";

const Component = (props) => {

  const {error , change} = props;  
  
  return (
    <>
    {    
       error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
