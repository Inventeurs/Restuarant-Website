import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { SwitchContainer, SwitchH} from './SwitchElements';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 22,
    padding: 1,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#FF944D',
    '&$checked': {
      transform: 'translateX(18px)',
      color: '#fff',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#FF944D',
        borderColor: '#FF944D',
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid #FF944D`,
    borderRadius: 10,
    opacity: 1,
    backgroundColor: '#fff',
  },
  checked: {},
}))(Switch);

const ToggleSwitch = () => {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <SwitchContainer>
        <SwitchH> Show only vegetarian </SwitchH>
        <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
      </SwitchContainer>
  );
}

export default ToggleSwitch;
