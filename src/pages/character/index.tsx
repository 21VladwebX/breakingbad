import React, { FC } from 'react';
import { ICharacter } from '../../common/types';


interface ICharacterProps {
  data: ICharacter
}

const Character:FC<ICharacterProps> = ({ data }) => (
  <div className='flex flex-col justify-center items-center pt-5'>
    <img
      src={data.img}
      alt="userImage"
      className='w-1/6'
    />

    <span className='font-mono text-lg'>{data.name}</span>

    <time className='font-serif	text-sm' dateTime={data.birthday}> {data.birthday} </time> 

    <span className='font-sans text-base mt-5'>Nickname: {data.nickname} </span>
    <span className='font-sans text-base'>Status: {data.status}</span>

    <span className='font-sans text-base mt-5'>Occupations:</span>
    
    <ul className='flex-col justify-center items-center'>
      {data.occupation.map(value  => (
        <li key={value} className='before:content-["-"] block '> {value} </li>
      ))}
    </ul>
  </div>
);

export default Character;
