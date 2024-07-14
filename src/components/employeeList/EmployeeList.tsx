import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import EmployeeCard from '../employeeCard/EmployeeCard';
import { selectEmployee } from '../../redux/selectedEmployeeSlice';
import styles from './EmployeeList.module.scss';
import { Employee } from '../../redux/types';

const EmployeeList: React.FC = () => {
  const { employees } = useSelector((state: RootState) => state.employees);
  const {
    name: searchName,
    birthday: searchBirthday,
    role: searchRole,
    isArchive: searchIsArchive,
  } = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmployeeClick = (employee: Employee) => {
    dispatch(selectEmployee(employee));
    navigate(`/employee/${employee.id}`);
  };

  const filteredEmployees = employees.filter((employee) => {
    const nameMatch = employee.name.toLowerCase().includes(searchName.toLowerCase());
    const birthdayMatch = employee.birthday.toLowerCase().includes(searchBirthday.toLowerCase());
    const roleMatch = searchRole ? employee.role === searchRole : true;
    const isArchiveMatch = searchIsArchive ? employee.isArchive === searchIsArchive : true;
    return nameMatch && birthdayMatch && roleMatch && isArchiveMatch;
  });

  return (
    <div>
      {filteredEmployees.length > 0 ? (
        <ul className={styles.list}>
          {filteredEmployees.map((employee) => (
            <li key={employee.id} onClick={() => handleEmployeeClick(employee)}>
              <EmployeeCard employee={employee} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>Список пуст</p>
      )}
    </div>
  );
};

export default EmployeeList;