import ProfileList from './ProfileList';
import { connect } from 'react-redux';

const mapState = (state) => ({
  text: state.app.text,
  profiles: state.app.profiles,
});

export default connect(mapState)(ProfileList);