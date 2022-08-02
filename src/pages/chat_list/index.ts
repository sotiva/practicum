import chat_list from './chat_list.hbs';
import style from './style.scss';
import avatar from './src/modules/avatar';



export default chat_list({

  avatar: avatar('#', 'avatar', ''),

  // title: title('Вход'),

  login: 'Логин',

  input_login: input('input__login', 'text', 'login', ''),

  password: 'Пароль',

  input_password: input('input__password', 'password', 'password', ''),

  button: button('button', 'submit', '', 'Войти'),

  link: link('link', 'link_registration', 'Зарегестрироваться'),

});
