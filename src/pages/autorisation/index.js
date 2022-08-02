import autorisation from './autorisation.hbs';
import header from '../../components/header';
import input from '../../components/input';
import title from '../../components/title';
import button from '../../components/button';
import link from '../../components/link';
import style from './style.scss';

export default autorisation({

  header: header('Messenger'),

  // title: title('Вход'),

  login: 'Логин',

  input_login: input('input__login', 'text', 'login', ''),

  password: 'Пароль',

  input_password: input('input__password', 'password', 'password', ''),

  button: button('button', 'submit', '', 'Войти'),

  link: link('link', 'link_registration', 'Зарегестрироваться'),

});
