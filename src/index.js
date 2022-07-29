import autorisation from '../src/pages/autorisation';
//import style from '@parcel/transformer-sass';

//import change_password from '../src/pages/change_password';

const main = document.querySelector("#root");

const routes = {
    "/autorisation": autorisation,
    '/': autorisation,
};


window.onload = (e) => {
    const path = window.location.pathname;
    const finded = Object.keys(routes).find((el) => === path);
    if (finded) {
        main.innerHTML = routes[path];
    } else {
        main.innerHTML = page404;
    }
};