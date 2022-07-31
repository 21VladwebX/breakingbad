import React, { FC } from 'react';
import { episode } from '../../common/constants';
import { IEpisode } from '../../common/types';

interface IMain {
    data: IEpisode[]
}

const Main:FC<IMain> = ({ data }) => (
    <ul className='flex w-full flex-wrap'>
        {data.map(value => (
            <li 
                className='w-1/6 m-5 p-3 rounded flex flex-col justify-center items-center border border-slate-700'
                key={value.episode_id}
            >
                <span 
                    className='font-serif text-lg text-center'
                >
                    {value.title}
                </span>
                <span
                    className='font-mono text-xs'
                >
                    {value.air_date}
                </span>
                
                <a
                    className='font-sans text-base hover:underline mt-5 transition' 
                    href={`${episode}/${value.episode_id}`}
                >
                    See episode
                </a>
            </li>
        ))}
    </ul>
);

export default Main;
