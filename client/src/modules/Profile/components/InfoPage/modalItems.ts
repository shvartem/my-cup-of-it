import { IProfileData } from '../types';

export default function getModalItems({
  firstname, lastname, company, description,
}: IProfileData) {
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
