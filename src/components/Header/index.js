import Header from "./Header";
import { connect } from "react-redux";

const mapState = (state) => ({
  text: state.app.text
});

export default connect(mapState)(Header);