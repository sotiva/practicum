import button from "./button.hbs";

import style from "./style.scss";

 
export default (className, type, value, title) => {
	return button ({className, type,value, title});
};
