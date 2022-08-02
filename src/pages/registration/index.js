import registration from './registrartion.hbs';
import header from '../../components/header';
import input from '../../components/input';
// import title from "../../components/title";
import button from '../../components/button';
import link from '../../components/link';

export default registration({

  header: header('Messenger'),

  // title: title('Регситрация'),

  input_login: input('input__login', 'text', 'login', ''),

  input_surname: input('input__surname', 'text', 'surname', 'Фамилия'),

  input_login: input('input__name', 'text', 'name', 'Имя'),

  input_phone: input('input__phone', 'tel', 'phone', 'Телефон'),

  input_password: input('input__password', 'password', 'password', 'Пароль'),

  input_reapitPassword: input('input__reapitPassword', 'password', 'password', 'Повторите пароль'),

  button: button('button', 'submit', '', 'Зарегестрироваться'),

  link: link('link', 'link_input', 'Войти'),

});
