import autorisation from '../src/pages/autorisation';
import edit_profile from '../src/pages/edit_profile';
import change_avatar from '../src/pages/change_avatar';
import profile from '../src/pages/profile';
import change_password from '../src/pages/change_password';
import registration from '../src/pages/registration';
import page404 from '../src/pages/404';
import page500 from '../src/pages/500';

const main = document.querySelector("#root");

const routes = {
    "/autorisation": autorisation,
    "/edit_profile": edit_profile,
    "/change_password":change_password,
    "/change_avatar":change_avatar,
    "/profile": profile,
    "/registration": registration,
    "/page404": page404,
    "/page500": page500,
    '/': `<a href="/autorisation">autorisation</a>---<a href="/edit_profile">edit_profile</a>---<a href="/change_password">change_password</a>---<a href="/change_avatar">change_avatar</a>---<a href="/profile">profile</a>---<a href="/registration">registration</a>---<a href="/page404">page404</a>---<a href="/page500">page500</a>`,
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