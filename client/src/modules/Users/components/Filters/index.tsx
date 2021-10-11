import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
// import { skipPartiallyEmittedExpressions } from 'typescript';
// import { title } from 'process';
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
  // const [filteredUsersPrev, setFilterUserPrev] = useState(users);
  const [filteredTypeUsers, setfilteredTypeUsers] = useState<string[]>([]);
  const [filteredCompany, setfilteredCompany] = useState<string[]>([]);
  const [filteredTeh, setfilteredTeh] = useState<string[]>([]);

  const typeUser = Array.from(new Set(filteredUsers.map((el) => {
    if (el.isMentor === true) {
      return 'Менторы';
    }
    return 'Студенты';
  })));
  const company = Array.from(new Set(filteredUsers.map((el) => {
    if (el.company === null || el.company === '') { return 'no company'; }
    return el.company;
  })));

  const technologies = Array.from(new Set(filteredUsers.map((f) => f.technologies.map((t) => t.title)).flat()));

  function handleChangetypeUser(value:string[]) {
    setfilteredTypeUsers(value);
    // setfilteredTypeUsers(value);
    // if (value.length === 0) return setFilterUser(users);
    // if (value.includes('Студенты')) return setFilterUser(filteredUsers.filter((user) => user.isMentor === false));
    // if (value.includes('Менторы')) return setFilterUser(filteredUsers.filter((user) => user.isMentor === true));
    // return true;
  }
  function handleChangeCompanies(value:string[]) {
    setfilteredCompany(value);
    // if (filteredTeh?.length === 0 && filteredTypeUsers?.length === 0) {
    // setFilterUserPrev(users);
    //   const newUser = filteredUsersPrev.filter((user) => value.includes(user.company || 'no company'));
    //   setfilteredCompany(value);
    //   if (value.length === 0) return setFilterUser(users);
    //   return setFilterUser(newUser);
    // }
    // if (filteredTeh?.length === 0 && filteredTypeUsers?.length !== 0) {
    //   let prev;
    //   if (filteredTypeUsers.includes('Студенты')) prev = users.filter((user) => user.isMentor === false);
    //   if (filteredTypeUsers.includes('Менторы')) prev = users.filter((user) => user.isMentor === true);
    //   // @ts-ignore
    //   const newUser = prev.filter((user) => value.includes(user.company || 'no company'));
    //   setfilteredCompany(value);
    //   // @ts-ignore
    //   if (value.length === 0) return setFilterUser(prev);
    //   return setFilterUser(newUser);
    // }
    // // @ts-ignore
    // const prev = users.filter((user) => user.technologies.some((t) => filteredTeh.includes(t.title)));
    // setFilterUserPrev(prev);
    // const newUser = prev.filter((user) => value.includes(user.company || 'no company'));
    // setfilteredCompany(value);
    // if (value.length === 0) return setFilterUser(prev);
    // return setFilterUser(newUser);
  }
  function handleChangetechnologies(value:string[]) {
    setfilteredTeh(value);
    // if (filteredCompany?.length === 0) {
    //   setFilterUserPrev(users);
    //   const newUser = filteredUsersPrev.filter((user) => user.technologies.some((t) => value.includes(t.title)));
    //   setfilteredTeh(value);
    //   if (value.length === 0) return setFilterUser(users);
    //   return setFilterUser(newUser);
    // }
    // const prev = filteredUsersPrev.filter((user) => filteredCompany.includes(user.company || 'no company'));
    // setFilterUserPrev(prev);
    // const newUser = prev.filter((user) => user.technologies.some((t) => value.includes(t.title)));
    // setfilteredTeh(value);
    // if (value.length === 0) return setFilterUser(prev);
    // return setFilterUser(newUser);
  }

  const byCompanies = useCallback((user:IProfile) => {
    if (filteredCompany.length === 0) return true;
    return filteredCompany.includes(user.company || 'no company');
  }, [filteredCompany]);
  const byType = useCallback((user:IProfile) => {
    if (filteredTypeUsers.length === 0) return true;
    if (filteredTypeUsers.includes('Менторы') && user.isMentor) return true;
    return filteredTypeUsers.includes('Студенты') && !user.isMentor;
  }, [filteredTypeUsers]);
  const byStack = useCallback((user:IProfile) => {
    if (filteredTeh.length === 0) return true;
    return user.technologies.some((t) => filteredTeh.includes(t.title));
  }, [filteredTeh]);

  useEffect(() => {
    const filtered = users.filter(byType).filter(byCompanies).filter(byStack);
    setFilterUser(filtered);
  }, [byType, byCompanies, users, byStack]);

  // const filterClickCompany = () => {
  //   setFilterUser(users);
  // };

  return (
    <div className={styles.conteinerFilters}>
      <div className={styles.conteinerSiorch}>
        <div className={styles.search1}>
          {' '}
          <p> SEARCH</p>
          {' '}
        </div>
        <FilterOutlined />
        Тип пользователя
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetypeUser} tokenSeparators={[',']}>
          {typeUser.map((el) => <Option key={el} value={el}>{el}</Option>)}
        </Select>
        {/* <FilterOutlined onClick={filterClickCompany} /> */}
        Компании:
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangeCompanies} tokenSeparators={[',']}>
          {company.map((el) => <Option key={el} value={el}>{el}</Option>)}
        </Select>
        {' '}
        <FilterOutlined />
        Технологии:
        <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetechnologies} tokenSeparators={[',']}>
          {technologies.map((el) => <Option key={el} value={el}>{el}</Option>)}
        </Select>
      </div>
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
  );
};
export default Filters;
