import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setBirthday, setRole, setIsArchive } from '../../redux/searchSlice';
import styles from './EmployeeForm.module.scss';

const EmployeeForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthday(e.target.value));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRole(e.target.value));
  };

  const handleIsArchiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsArchive(e.target.checked));
  };

  return (
    <section className={styles.form}>
      <div className={styles.inputItem}>
        <label htmlFor="name">Имя:</label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          placeholder="Имя"
          required
        />
      </div>
      <div className={styles.inputItem}>
        <label htmlFor="birthday">Дата рождения:</label>
        <input
          id="birthday"
          type="text"
          onChange={handleBirthdayChange}
          placeholder="Дата рождения"
          required
        />
      </div>
      <div className={styles.inputItem}>
        <label htmlFor="role">Должность:</label>
        <select id="role" onChange={handleRoleChange} required>
          <option value="">Выберите должность</option>
          <option value="waiter">Официант</option>
          <option value="cook">Повар</option>
          <option value="driver">Водитель</option>
        </select>
      </div>
      <div className={styles.inputItem}>
        <label htmlFor="isArchive">В архиве:</label>
        <input
          id="isArchive"
          type="checkbox"
          onChange={handleIsArchiveChange}
        />
      </div>
    </section>
  );
};

export default EmployeeForm;