import React from 'react';

interface IProp{
  height?:string,
  width?:string,
}

const Loading:React.FC<IProp> = ({height,width}) => {

    const styles = `
    .loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      border-top: 4px solid #212529;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-left: 4px solid #f0ad4e;
      border-bottom: 4px solid transparent;
      animation: rotation 0.5s linear infinite reverse;
    }
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    `
    return (
        <>
            <style>{styles}</style>
            <span className="loader"></span>
        </>
        
    );
};

export default Loading;