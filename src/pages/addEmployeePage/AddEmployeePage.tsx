import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { addEmployee } from '../../redux/employeeSlice';
import styles from './AddEmployeePage.module.scss';
import ava from '../../assets/ava.png';
import BtnHome from '../../components/btnHome/BtnHome';
import SuccessMessage from '../../components/successMessage/SuccessMessage';

interface EmployeeFormInputs {
  name: string;
  phone: string;
  birthday: string;
  role: string;
  isArchive: boolean;
}

const AddEmployeePage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const { control, register, handleSubmit, reset, formState: { errors, isValid } } = useForm<EmployeeFormInputs>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      birthday: '',
      role: '',
      isArchive: false,
    },
  });

  const onSubmit = (data: EmployeeFormInputs) => {
    const newEmployee = {
      id: Math.random(), // Генерация случайного ID
      ...data,
    };
    dispatch(addEmployee(newEmployee));
    reset(); // Сброс формы после добавления сотрудника
    setShowSuccess(true); // Показать сообщение об успехе
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className={styles.container}>
      {showSuccess && <SuccessMessage />}
      <img className={styles.avatar} src={ava} alt="avatar" />
      <form className={styles.info} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>Номер телефона:</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MaskedInput
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                {...field}
                showMask
              />
            )}
          />
          {errors.phone && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>Дата рождения:</label>
          <Controller
            name="birthday"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MaskedInput
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                {...field}
                showMask
              />
            )}
          />
          {errors.birthday && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>Должность:</label>
          <select {...register('role', { required: true })}>
            <option value="">Выберите должность</option>
            <option value="Повар">Повар</option>
            <option value="Официант">Официант</option>
            <option value="Водитель">Водитель</option>
          </select>
          {errors.role && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label>
            <input type="checkbox" {...register('isArchive')} />
            В архиве
          </label>
        </div>
        <button type="submit" disabled={!isValid}>Сохранить</button>
      </form>
      <BtnHome />
    </section>
  );
};

export default AddEmployeePage;