import React, { FC } from 'react';
import { IEpisode } from '../../common/types';
import { Link } from "react-router-dom";
import { character } from '../../common/constants';

interface IEpisodeProps {
  data: IEpisode
}

const Eposide:FC<IEpisodeProps> = ({data:{ title, air_date, characters}}) => (
    <div>
      <Link to='/'>Episodes </Link>

      <span> Title: {title}</span>
      <span> Air Date: {air_date}</span>

      {characters.map(characterName => (
        <div>
          <a href={`/${character}/${characterName.replace(' ', '+')}`} key={characterName}>{characterName}</a>  
       </div>
      ))}      
    </div>
);

export default Eposide;
