import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ITodoState } from './reducer';
import Component from './Component'

/* 操作を加えることもできるが、今回は何も操作を加えない stateをそのままPropsに渡す */
const mapStateToProps = (state: ITodoState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

/* ReduxのStore由来のデータとDispatcherをPropsに格納して、TodoComponentに渡す。 */
export default connect(mapStateToProps, mapDispatchToProps)(Component);