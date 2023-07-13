import React from 'react'
import { IconContext } from 'react-icons';
import { FiFlag } from 'react-icons/fi';


const Flagicon = ({ countrycode }) => {
    const flagSize = "1rem";
  return (
      <>
      
      <IconContext.Provider value={{ size: flagSize }}>
      <FiFlag />
    </IconContext.Provider>
      
      </>
  )
}

export default Flagicon