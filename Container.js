import { connect } from 'react-redux';
import { addTask, editPendingTask, publishTask } from '../../Actions/Actions';
import ToDoForm from './ToDoForm';

const mapStateToProps = ({ pendingTask }) => ({
  pendingTask,
});

const mapDispatchToProps = {
  addTask,
  editPendingTask,
  publishTask
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ToDoForm);