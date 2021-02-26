import Profile from "./Profile";
import { connect } from "react-redux";

const mapState = (state) => ({
  text: state.app.text,
  profiles: state.app.profiles,
});

export default connect(mapState)(Profile);