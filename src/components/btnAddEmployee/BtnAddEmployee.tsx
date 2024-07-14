import { useNavigate } from 'react-router-dom';
import styles from './BtnAddEmployee.module.scss';


const BtnAddEmployee = () => {
  const navigate = useNavigate();


  const handleExit = () => {
    navigate(`/new-employee`);
  };

  return (
    <button className={styles.btn} onClick={handleExit}>Создать сотрудника</button>
  )
}

export default BtnAddEmployee