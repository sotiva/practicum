import link from "./link.hbs";
import style from "./style.scss";

 
export default (className, linkName, linkTitle) => {
	return link ({className, linkName, linkTitle});
};
