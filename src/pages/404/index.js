import tpl from './page404.hbs';
import header from '../../components/header';
import input from '../../components/input';

export default tpl({

  // input:input("name", "text", "text", "title"),

  // input_phone: input("name", "text", "text", "телефон"),

  // header:header('Messenger'),

  title: '404',
  messege: 'Страницы нет',
});
