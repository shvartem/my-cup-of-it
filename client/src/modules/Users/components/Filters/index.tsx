import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
// import { skipPartiallyEmittedExpressions } from 'typescript';
import { title } from 'process';
import { IProfile } from '../../../../types/usersTypes';
import UserCard from '../../../Home/componenets/UserCard';
// import user from '../../../../redux/slices/user';
import styles from './Filters.module.css';

const { Option } = Select;

interface UserProps{
  users: IProfile[];

}

const Filters: React.FC<UserProps> = ({ users }) => {
  // const [companies, setCompanies] = useState<string[]>([]);
  const [filteredUsers, setFilterUser] = useState(users);
  const [filteredUsersPrev, setFilterUserPrev] = useState(users);
  // const [filteredTypeUsers, setfilteredTypeUsers] = useState<string[]>();
  const [filteredCompany, setfilteredCompany] = useState<string[]>();
  const [filteredTeh, setfilteredTeh] = useState<string[]>();

  // const filterByconpany = (user:IProfile) => {
  //   if (companies.length === 0) return true;
  //   // console.log(1111111111111111111111111, companies.includes(user.company || 'no company'));
  //   return companies.includes(user.company || 'no company');
  // };
  // useEffect срабатывает при изменении массива companies
  // useEffect(() => {
  //   // записываю в filteredUsers для вывода фильтрую массив users
  //   setFilterUser(users.filter(filterByconpany));
  // }, [companies]);

  const company = Array.from(new Set(users.map((el) => {
    if (el.company === null || el.company === '') { return 'no company'; }
    return el.company;
  })));
  console.log(company);

  const technologies = Array.from(new Set(users.map((f) => f.technologies.map((t) => t.title)).flat()));
  console.log(2200000, technologies);

  // function handleChange(value:string[]) {
  //   if (value.length === 0) return setFilterUser(users);
  //   console.log(users);
  //   console.log(`selected ${value}`);
  //   const newUser = filteredUsers.filter((user) => value.includes(user.company || 'no company'));
  //   const newUser2 = newUser.filter((user) => user.technologies.some((t) => value.includes(t.title)));
  //   // if (value.length === 0) return setFilterUser(newUser2);
  //   console.log(111111, newUser);
  //   console.log(222222, newUser2);
  //   return setFilterUser(newUser2);
  //   // if (value.length === 0) return setFilterUser(users);
  // }

  function handleChangetypeUser(value:string[]) {
    if (value.length === 0) return setFilterUser(users);
    if (value.includes('Студенты')) return setFilterUser(filteredUsers.filter((user) => user.isMentor === false));
    if (value.includes('Менторы')) return setFilterUser(filteredUsers.filter((user) => user.isMentor === true));
    return true;
  }
  function handleChangeCompanies(value:string[]) {
    setfilteredCompany(value);
    console.log('пред', filteredUsersPrev);
    if (value.length === 0) return setFilterUser(users);
    console.log(`selected ${value}`);
    const newUser = filteredUsersPrev.filter((user) => value.includes(user.company || 'no company'));
    // setFilterUserPrev(newUser);
    console.log('наст', newUser);
    return setFilterUser(newUser);
  }
  function handleChangetechnologies(value:string[]) {
    setfilteredTeh(value);
    console.log('пред', filteredUsersPrev);

    if (value.length === 0) return setFilterUser(users);
    const newUser = filteredUsersPrev.filter((user) => user.technologies.some((t) => value.includes(t.title)));
    console.log('наст', newUser);
    // setFilterUserPrev(newUser);
    return setFilterUser(newUser);
  }
  return (
  // <div className={styles.bodyFilser}>
    <div className={styles.conteinerFilters}>
      <div className={styles.conteinerSiorch}>
        <div className={styles.search1}>
          {' '}
          <p> SEARCH</p>
          {' '}
        </div>

        Тип пользователя
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetypeUser} tokenSeparators={[',']}>
          <Option value="Студенты">Студенты</Option>
          <Option value="Менторы">Менторы</Option>
        </Select>

        Компании:
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangeCompanies} tokenSeparators={[',']}>
          {company.map((el) => <Option key={el} value={el}>{el}</Option>)}
        </Select>
        {' '}
        Технологии:
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetechnologies} tokenSeparators={[',']}>
          {/* <div> */}
          {technologies.map((el) => <Option key={el} value={el}>{el}</Option>)}
          {/* </div> */}
        </Select>
      </div>
      {/* <div> */}
      <div className={styles.conteinerUserCand}>
        <div className={styles.headerUserCard}>
          {' '}
          <p> Пользователи</p>
          {' '}
        </div>
        <div className={styles.conteinerUser}>
          {filteredUsers.map((user) => <UserCard mentor={user} />)}
        </div>
      </div>
    </div>
  // </div>
  );
};
export default Filters;
