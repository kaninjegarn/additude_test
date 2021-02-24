import GiphyList from "./GiphyList";
import { connect } from "react-redux";

const mapState = (state) => ({
  giphys: state.app.giphys,
  text: state.app.text
});

export default connect(mapState)(GiphyList);