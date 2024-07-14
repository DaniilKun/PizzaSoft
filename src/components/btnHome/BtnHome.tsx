import { useNavigate } from 'react-router-dom';
import styles from './BtnHome.module.scss';


const BtnHome = () => {
  const navigate = useNavigate();


  const handleExit = () => {
    navigate(`/`);
  };

  return (
    <button className={styles.btn} onClick={handleExit}>Назад</button>
  )
}

export default BtnHome