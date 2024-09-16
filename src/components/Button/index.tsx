import Image from 'next/image';
import React from 'react';

type prop = {
  text: string
  className: string
  onClick?: any
  icon? : boolean
}

const Button = ({className, text, onClick, icon}: prop) => {
  return (
    <button onClick={onClick} className={`  ${className}  rounded-[4rem] font-neueLight font-semibold  text-sm `}>
      <span>{text}</span> 

      {icon && <Image src="/marker.svg" width={10} height={10} alt="marked" />}
    </button>
  );
}





export default Button;
