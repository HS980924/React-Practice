import {Cookies} from 'react-cookie';

const cookies = new Cookies();

// export const loginCheck = () => {
//     let accessToken = localStorage.getItem("login");
//     if(accessToken){
//         return true
//     }
//     return false
// }

// export const login = () => {
//     localStorage.setItem("login","on");
// }

// export const logout = () => {
//     localStorage.removeItem("login");
// }

export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options}); 
}

export const getCookie = (name) => {
    return cookies.get(name); 
}

export const removeCookie = (name) => {
    return cookies.remove(name);
}

export const checkLogin = (name) => {
    let accessToken = cookies.get(name);
    if(accessToken){
        return true;
    }
    return false;
}