
import GenderSearch from "./GenderSearch";
import { connect } from "react-redux";

const mapState = (state) => ({
  gender: state.app.gender,
  nation: state.app.nation
});

export default connect(mapState)(GenderSearch);