import Profile from "./Profile";
import { connect } from "react-redux";

const mapState = (state) => ({
  text: state.app.text,
  profiles: state.app.profiles,
  search: state.app.search,
});

export default connect(mapState)(Profile);