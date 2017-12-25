import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.getIn(['myClass', 'hasEchoed']) ? 'The class has echoed' : 'The class has not echoed',
});

export default connect(mapStateToProps)(Message);
