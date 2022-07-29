import edit_profile from "./edit_profile.hbs";
import header from '../../components/header';
import avatar from '../../modules/avatar';
//import title from '../../components/title';
import input from '../../components/input';
import button from '../../components/button';
import link from '../../components/link';
import style from './style.scss';


export default edit_profile({

   header: header('Изменить данные'),
    
   avatar: avatar('#', 'photo', 'Изменить фото'),
  
    //title: title('Регситрация'),

   mail:'Почта',

   input_mail:input("input__mail", "email", "mail", ""),

   login:'Логин',

   input_login:input("input__login", "text", "login", ""),

   name:'Имя',

  input_name:input("input__name", "text", "name", ""),

  surname: 'Фамилия',

   input_surname:input("input__surname", "text", "surname", ""),

   phone: 'Телефон',
    
    input_phone: input("input__phone", "tel", "phone", ""),

  button:button('button', 'submit', '', 'Сохранить'),

   link_changePassword: link('link', 'link_input', 'Изменить пароль'),

   link_delete: link('link', 'link_input', 'Удалить данные'),

});