import React, { FC } from 'react';
import { episode } from '../../common/constants';
import { IEpisode } from '../../common/types';

interface IMain {
    data: IEpisode[]
}

const Main:FC<IMain> = ({ data }) => (
        <div className="">
            <ul>
                {data.map(value => (
                    <li key={value.episode_id}>
                        <span>{value.title}</span>
                        <span>{value.air_date}</span>
                        <a href={`${episode}/${value.episode_id}`}>See episode</a>
                    </li>
                ))}
            </ul>
        </div>
);

export default Main;
