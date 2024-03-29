import React from 'react'
import MaterialButton from '@material-ui/core/Button'


const Button = (props: any) => (
  <MaterialButton variant="contained" color="primary">
    {props.children}
  </MaterialButton>
)

export default Button
