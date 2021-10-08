// import { IProfile } from '../../../../redux/types';
// import { IUser } from '../../../../redux/allUsersTypes';

export default function getModalItems({
  firstname, lastname, company, description,
}: any) {
  return [
    {
      name: 'firstname',
      label: 'Ваше Имя',
      initialValue: firstname,
    },
    {
      name: 'lastName',
      label: 'Ваша Фамилия',
      initialValue: lastname,
    },
    {
      name: 'description',
      label: 'Описание',
      isTextarea: true,
      initialValue: description,
    },
    // {
    //   name: 'careerStart',
    //   label: 'Начало карьеры',
    //   initialValue: '',
    // },
    {
      name: 'company',
      label: 'Место работы',
      initialValue: company,
    },
  ];
}
