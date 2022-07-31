import React, { FC } from 'react';
import { IEpisode } from '../../common/types';
import { Link } from "react-router-dom";
import { character } from '../../common/constants';

interface IEpisodeProps {
  data: IEpisode
}

const Eposide:FC<IEpisodeProps> = ({data:{ title, air_date, characters}}) => (
  <div className='w-full flex flex-col justify-center items-center'>
    <Link 
      to='/'
      className='hover:bg-white transition p-1 rounded hover:underline self-start ml-5'
    >
      Episodes
    </Link>

    <span className='block font-serif mt-2 text-lg'> Title: {title}</span>
    <span className='block font-mono mt-2 text-xs'> Air Date: {air_date}</span>

    <span className='font-sans text-base m-5'> Characters: </span>
    
    <div className='w-1/2 flex flex-wrap justify-center items-center'>
      {characters.map(characterName => (
          <a 
            href={`/${character}/${characterName.replace(' ', '+')}`}
            key={characterName}
            className='m-3 p-3 rounded border border-slate-700 hover:bg-white transition block'  
          >
              {characterName}
          </a>  
      ))}   
    </div>   
  </div>
);

export default Eposide;
