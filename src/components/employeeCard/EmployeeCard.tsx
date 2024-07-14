import React from 'react';
import ava from '../../assets/ava.png';
import styles from './EmployeeCard.module.scss';

interface Employee {
  id:number;
  name: string;
  role: string;
  phone: string;
  birthday: string;
}

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {

  return (
    <section className={styles.container} >
      <img className={styles.avatar} src={ava} alt="avatar" />
      <div className={styles.info}>
        <h2>Имя: {employee.name}</h2>
        <h2>Должность: {employee.role}</h2>
        <h2>Номер телефона: {employee.phone}</h2>
        <h2>Дата рождения: {employee.birthday}</h2>
      </div>
    </section>
  );
};

export default EmployeeCard;