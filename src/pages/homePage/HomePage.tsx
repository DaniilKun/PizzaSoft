import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEmployees } from '../../redux/employeeSlice';
import EmployeeList from '../../components/employeeList/EmployeeList';
import EmployeeForm from '../../components/employeeForm/EmployeeForm';
import employeesData from '../../data/employees.json';
import styles from './HomePage.module.scss';
import BtnAddEmployee from '../../components/btnAddEmployee/BtnAddEmployee';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      dispatch(setEmployees(JSON.parse(storedEmployees)));
    } else {
      dispatch(setEmployees(employeesData));
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Employee List</h1>
      <EmployeeForm />
      <BtnAddEmployee/>
      <EmployeeList />
    </div>
  );
};

export default HomePage;