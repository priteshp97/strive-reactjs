import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant="danger">This is a {props.text} alert—check it out!</Alert>
);
export default WarningSign;
