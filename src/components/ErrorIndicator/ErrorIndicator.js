import React from 'react'

import './ErrorIndicator.scss'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <p className="boom">BOOM!</p>
      <p>something has gone terribly wrong</p>
    </div>
  )
}

export default ErrorIndicator
