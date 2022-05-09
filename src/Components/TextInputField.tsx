import React from 'react';

interface InputData {
<<<<<<< HEAD
  placeholder: string;
  type: string;
  register: any;
}
export default function TextInputField({ placeholder, type, register }: InputData) {
  return (
    <div>
      <input
      {...register}
      type={type}
      placeholder={placeholder}
      className="appearance-none rounded-none relative block w-full 
      px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
      rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
      focus:z-10 sm:text-sm"
    />
    </div>
  );
}
=======
  placeholder?: string;
  type: string;
  register?: any;
  value?: string;
}
export default function TextInputField({ placeholder, type, register, value }: InputData) {
  return (
    <div>
      <input
        {...register}
        type={type}
        value={value}
        placeholder={placeholder}
        className='appearance-none rounded-none relative block w-full 
      px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 
      rounded-b-md rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 
      focus:z-10 sm:text-sm'
      />
    </div>
  );
}
>>>>>>> b90f53174b0f2dccc9729fddeb43c19bbc5ba365
