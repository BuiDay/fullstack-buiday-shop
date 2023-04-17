
interface Props{
  children:JSX.Element
}

let isLoggedIn:boolean=window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth')  || 'Default Value')?.isLoggedIn 

console.log(isLoggedIn)

export const ShowOnLogin = ({ children }:Props) => {
  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }:Props) => {
  if (!isLoggedIn) {
    return children;
  }
  return null;
};

