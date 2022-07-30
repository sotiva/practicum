import item from "./item.hbs";
import style from "./style.scss";

 
export default (className, pic, classItem, title) => {
	return item ({className, pic, classItem, title});
};
