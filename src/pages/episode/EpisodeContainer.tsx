import React, { FC } from 'react';
import Episode from './index';
import { useGetDataBy } from '../../common/hooks';
import { useParams } from 'react-router-dom';

const EpisodeContainer:FC = () => {

    let { episode_id } = useParams();

    const {data, error, isLoading} = useGetDataBy(`/episodes/${episode_id}`)

    return (
        <div className="">
            {isLoading && <div>Loading ... </div>}

            {error && <div>{error} </div>}

            {!!data?.length && <Episode data={data[0]}/>}
        </div>
  );
}

export default EpisodeContainer;
