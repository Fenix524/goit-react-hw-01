import css from './TaskTitle.module.css';
import { BiTask } from "react-icons/bi";

const TaskTitle = ({text}) => {
  return (
    <h2 className={css.taskTitle}>
      <BiTask size={50}/> {text}
    </h2>
  );
};

export default TaskTitle;
