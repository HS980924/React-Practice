
export const loginCheck = () => {
    let accessToken = localStorage.getItem("login");
    if(accessToken){
        return true
    }
    return false
}

export const login = () => {
    localStorage.setItem("login","on");
}

export const logout = () => {
    localStorage.removeItem("login");
}