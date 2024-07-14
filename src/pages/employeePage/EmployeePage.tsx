import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { RootState } from '../../redux/store';
import { updateEmployee } from '../../redux/employeeSlice';
import styles from './EmployeePage.module.scss';
import ava from '../../assets/ava.png';
import BtnHome from '../../components/btnHome/BtnHome';

interface EmployeeFormInputs {
  name: string;
  phone: string;
  birthday: string;
  role: string;
  isArchive: boolean;
}

const EmployeePage: React.FC = () => {
  const selectedEmployee = useSelector((state: RootState) => state.selectedEmployee.selectedEmployee);
  const dispatch = useDispatch();
  const { control, register, handleSubmit, reset } = useForm<EmployeeFormInputs>();

  useEffect(() => {
    if (selectedEmployee) {
      reset({
        name: selectedEmployee.name,
        phone: selectedEmployee.phone,
        birthday: selectedEmployee.birthday,
        role: selectedEmployee.role,
        isArchive: selectedEmployee.isArchive,
      });
    }
  }, [selectedEmployee, reset]);

  const onSubmit = (data: EmployeeFormInputs) => {
    if (selectedEmployee) {
      const updatedEmployee = { ...selectedEmployee, ...data };
      dispatch(updateEmployee(updatedEmployee));
    }
  };

  if (!selectedEmployee) {
    return <div>Сотрудник не найден</div>;
  }

  return (
    <section className={styles.container}>
      <img className={styles.avatar} src={ava} alt="avatar" />
      <form className={styles.info} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <input {...register('name')} />
        </div>
        <div>
          <label>Номер телефона:</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <MaskedInput
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                {...field}
              />
            )}
          />
        </div>
        <div>
          <label>Дата рождения:</label>
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <MaskedInput
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                {...field}
              />
            )}
          />
        </div>
        <div>
          <label>Должность:</label>
          <select {...register('role')}>
            <option value="Повар">Повар</option>
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" {...register('isArchive')} />
            В архиве
          </label>
        </div>
        <button type="submit">Сохранить</button>
      </form>
      <BtnHome />
    </section>
  );
};

export default EmployeePage;