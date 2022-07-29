import change_avatar from "./change_avatar.hbs";
import link from '../../components/link';
import button from "../../components/button";


export default change_avatar({

    choose_file:link("choose_file", "#", "Выбрать файл"),

    button: button("button", "submit", "change_avatar", "Загрузить"),
    
  
});