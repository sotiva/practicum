import edit_profile from '../src/pages/edit_profile';
//import style from '@parcel/transformer-sass';

//import change_password from '../src/pages/change_password';

const main = document.querySelector("#root");

const routes = {
    "/edit_profile": edit_profile,
    '/': edit_profile,
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