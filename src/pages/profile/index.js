import profile from "./profile.hbs";
import header from '../../components/header';
import avatar from '../../modules/avatar';
//import title from '../../components/title';
 
import item from './components/item';
import link from '../../components/link';


export default profile({

   header: header('Изменить профиль'),
    
   avatar: avatar('#', 'photo', ''),
  
    //title: title('Регситрация'),

    item_set:item('menu__item', "menu__item_image", "menu__item_titles", "Настройки"),
    item_set:item('menu__item', "menu__item_image", "menu__item_titles", "Пригласить друзей"),
    item_set:item('menu__item', "menu__item_image", "menu__item_titles", "Редактировать"),

   link_exit: link('link', 'link_input', 'Выйти'),

   link_delete: link('link', 'link_input', 'Удалить аккаунт'),

});