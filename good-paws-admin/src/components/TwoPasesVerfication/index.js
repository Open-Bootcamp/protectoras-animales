import React from 'react'
import { FaCheck } from 'react-icons/fa'

const TwoPasesVerification = ({ pase }) => {
  return (
    <div className='container-Verification'>
      <div className='circle'>
        {pase ? (
          <div className='circleOne'></div>
        ) : (
          <FaCheck color=' #578887' />
        )}
      </div>
      <div className={`${pase ? 'line' : 'line line-alt'}`}></div>
      <div className='circle'>{!pase && <FaCheck color=' #578887' />}</div>
    </div>
  )
}

export default TwoPasesVerification
