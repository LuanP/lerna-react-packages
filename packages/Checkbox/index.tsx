import React from 'react'
import MaterialCheckbox from '@material-ui/core/Checkbox'

const Checkbox = () => {
  const [state, setState] = React.useState({
    checkedA: true,
  })

  const handleChange = (name: any) => (event: any) => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
      <MaterialCheckbox
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
   )
}

export default Checkbox
