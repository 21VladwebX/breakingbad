import React, { FC } from 'react';
import { ICharacter } from '../../common/types';


interface ICharacterProps {
  data: ICharacter
}

const Character:FC<ICharacterProps> = ({data}) => {
  return (
    <div>
      <span>{data.name}</span>

      <img src={data.img} alt="userImage" />

      <time dateTime={data.birthday}> {data.birthday} </time> 

      <span> {data.nickname} </span>
      <span>{data.status}</span>

      <ul>
        {data.occupation.map(value  => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Character;
