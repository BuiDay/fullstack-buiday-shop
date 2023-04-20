import { useState } from "react";

interface Props{
  children:JSX.Element
  isLoggedIn?:boolean
}

const ShowOnLogin = ({ children,isLoggedIn }:Props) => {
 
  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children,isLoggedIn }:Props) => {

  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
