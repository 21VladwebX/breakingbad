import React, { FC } from 'react';
import Character from './index';
import { useGetDataBy } from '../../common/hooks';
import { useParams } from 'react-router-dom';

const CharacterContainer:FC = () => {

    let { characterName } = useParams();

    const {data, error, isLoading} = useGetDataBy(`/characters?name=${characterName}`)

    return (
        <div className="">
            {isLoading && <div>Loading ... </div>}

            {error && <div>{error} </div>}

            {!!data?.length && <Character data={data[0]}/>}
        </div>
  );
}

export default CharacterContainer;
