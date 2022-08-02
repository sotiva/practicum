import change_password from './change_password.hbs';
import header from '../../components/header';
import avatar from '../../modules/avatar';
// import title from '../../components/title';
import input from '../../components/input';
import button from '../../components/button';
import link from '../../components/link';
import style from './style.scss';

export default change_password({

  header: header('Messenger'),

  avatar: avatar('#', 'photo', 'Изменить фото'),

  // title: title('Изменить пароль'),

  oldPassword: 'Старый пароль',

  input_oldPassword: input('input__oldPassword', 'password', 'password', ''),

  newPassword: 'Новый пароль',

  input_newPassword: input('input__newPassword', 'password', 'password', ''),

  reapet_password: 'Повторите новый пароль',

  input_reapet: input('input__reapetNewPassword', 'password', 'password', ''),

  button: button('button', 'submit', '', 'Сохранить'),

  link_exit: link('link__exit', '', 'Выйти'),

  link_delete: link('link__delete', '', 'Удалить аккаунт'),

});
