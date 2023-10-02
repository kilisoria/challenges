import { memo } from 'react';
import logo from '../../assets/loading.gif';

import { LoadingDiv } from './Loading.styled';      

const Loading = () => {
    return (
        <LoadingDiv>
            <img src={logo} width="50" height="50" alt="loading..." />
        </LoadingDiv>);
}

export default memo(Loading);
