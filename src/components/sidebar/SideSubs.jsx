import Icon from '@mui/material/Icon'

export default function SideSubs(props) {
  return (
    <div>
      {props.subs.icon ? <Icon>{props.subs.icon}</Icon> : ''}
      {props.subs.name}
    </div>
  )
}