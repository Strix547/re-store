import React from 'react'

import './LoadSpinner.scss'

const LoadSpinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-rolling">
        <div></div>
      </div>
    </div>
  )
}

export default LoadSpinner
