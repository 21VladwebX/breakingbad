import React, { FC } from 'react';
import Main from './index';
import { useGetDataBy } from '../../common/hooks';

const MainContainer:FC = () => {
    const {data, error, isLoading} = useGetDataBy('/episodes')

    return (
        <div className="">
            {isLoading && <div>Loading ... </div>}

            {error && <div>{error} </div>}

            {!!data?.length && <Main data={data}/>}
        </div>
  );
}

export default MainContainer;
