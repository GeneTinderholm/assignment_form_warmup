import React, {PropTypes} from 'react'
import {Alert} from 'reactstrap'

const SuccessMessage = ({success}) => {
  if (!success) {
    return null
  }

  return (
    <Alert color="success">
      Your data was successfully submitted!
    </Alert>
  )
}

SuccessMessage.propTypes = {
  success: PropTypes.bool,
}

export default SuccessMessage
