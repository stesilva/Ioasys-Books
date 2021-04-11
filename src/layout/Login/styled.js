import styled from 'styled-components';
import ImgSrc from '../../img/bgImg.png';

export const StyledLoginWrapper = styled.div`
display:flex;
justify-content:center;
position:absolute;

width:100%;
height:100%;

background-image: url(${ImgSrc});
background-position:center;
background-repeat:no-repeat;
background-size:cover;

margin:0
`;