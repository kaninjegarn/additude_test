
import Input from "./Input";
import { connect } from "react-redux";

const mapState = (state) => ({
  text: state.app.text,
  gender: state.app.gender,
  search: state.app.search
});

export default connect(mapState)(Input);