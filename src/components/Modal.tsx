import React from 'react';

interface ModalProps {
  children?: React.ReactNode;
  close?: () => void;
  position?: 'fixed' | 'absolute';
  className?: string;
  display?: boolean;
  yAxis?: string;
  xAxis?: string;
}

export const Modal:React.FC<ModalProps> = ({display = false, yAxis = 'top-0', xAxis='left-0', children, close, position = 'fixed', className})=> {


  return(
    <div 
      onClick={close}
      className={`${display ? 'block' : 'hidden'} ${position} ${className} ${yAxis} ${xAxis} w-full h-full bg-black bg-opacity-50 fixed flex p-4 md:p-8 items-center justify-center z-[60]`}
    >
      <div id="content" onClick={(e)=> e.stopPropagation()}
        className="rounded-2xl justify-center flex items-center overflow-hidden h-full ">
        {children}
      </div>
    </div>
  );
};

