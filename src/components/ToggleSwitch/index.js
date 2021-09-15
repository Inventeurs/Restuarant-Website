import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
//import './ToggleSwitch.css';
import { SwitchContainer, SwitchH} from './SwitchElements';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 30,
    height: 15,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#FF9F0D',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#FF9F0D',
        borderColor: '#FF9F0D',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid #FF9F0D`,
    borderRadius: 9,
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
