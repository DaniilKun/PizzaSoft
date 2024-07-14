import React from 'react';
import styles from './SuccessMessage.module.scss';

const SuccessMessage: React.FC = () => {
  return (
    <div className={styles.successMessage}>
      <p>Успех!</p>
    </div>
  );
};

export default SuccessMessage;