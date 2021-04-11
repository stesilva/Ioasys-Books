import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
    height: 40px;
    width: 1130px;
    left: 115px;
    top: 40px;
    border-radius: 0px;
`;

export const StyledHeaderTitle = styled.h1`
    margin: 0;
    padding: 0;
    display:inline;
    margin-block-end: 0;
    margin-block-start: 0;
    font-family: 'Heebo', sans-serif;
    font-size:28px;
    font-style:normal;
    font-weight:300;
    color: black;
    line-height:40px;
    position:fixed;
    height: 40px;
    width: 77px;
    left: 236px;
    top: 40px;
    border-radius: nullpx;
`;

export const StyledHeaderLogo = styled.img`
    height: 36px;
    width: 104.4px;
    left: 115px;
    top: 42px;
    border-radius: 0px;
    margin-right:16.6px;
    position:fixed;
`

export const StyledWelcomeWrapper = styled.div`
    height: 32px;
    width: 169px;
    left: 1076px;
    top: 44px;
    border-radius: 0px;
`;

export const StyledWelcomeText = styled.p`
    margin: 0;
    padding: 0;
    display:inline;
    margin-block-end: 0;
    margin-block-start: 0;
    font-family: 'Heebo', sans-serif;
    font-size:12px;
    font-style:normal;
    font-weight:400;
    color: black;
    line-height:16px;
    position:fixed;
    height: 16px;
    width: 121px;
    left: 1076px;
    top: 52px;
    border-radius: nullpx;
`

export const StyledLogout = styled.button`
    height: 32px;
    width: 32px;
    left: 1213px;
    top: 44px;
    border-radius: 360px;
    position:fixed;
    border-style:solid;
    border-width: 1px;
    border-color:rgba(51, 51, 51, 0.2);
    background-color:transparent;
`

export const StyledListWrapper = styled.div `
height: 512px;
width: 1136px;
left: 115px;
top: 120px;
`

export const StyledCard = styled.div`
position: absolute;
width: 272px;
height: 160px;
left: 115px;
top: 120px;

background: #FFFFFF;
box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
border-radius: 4px;
`

export const StyledPlaceholder = styled.div`
position: absolute;
width: 113px;
height: 160px;
left: 115px;
top: 120px;
`

export const StyledBookImage = styled.img`
position: fixed;
width: 81px;
height: 122px;
left: 131px;
top: 139px;
filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`

export const StyledBookDescription = styled.p`
/* Description */
position: fixed;
width: 104px;
height: 60px;
left: 228px;
top: 195px;

font-family: 'Heebo', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;

margin-block-start: 0;
margin-block-end: 0;
color: #999999;
`

export const StyledBookAuthor = styled.p`
/* Description */
position: fixed;
width: 98px;
height: 20px;
left: 228px;
top: 156px;

font-family: 'Heebo';
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
color: #AB2680;
margin-block-start: 0;
margin-block-end: 0;
`

export const StyledBookTitle = styled.p`
/* Description */
position: fixed;
width: 127px;
height: 20px;
left: 228px;
top: 136px;

font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #333333;
margin-block-start: 0;
margin-block-end: 0;
`

export const StyledPagination = styled.div `
position: fixed;
width: 175px;
height: 32px;
left: 1067px;
top: 648px;
`

export const StyledPagesCount = styled.p`
position: fixed;
width: 87px;
height: 20px;
left: 1067px;
top: 648px;

font-family: 'Heebo';
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
color: #333333;
`

export const StyledPrevPage = styled.button`
position: fixed;
left: 85.65%;
right: 12.01%;
top: 84.38%;
bottom: 11.46%;

height: 32px;
width: 32px;
border-radius: 360px;


border: 1px solid rgba(51, 51, 51, 0.2);
box-sizing: border-box;
`
export const StyledNextPag = styled.button`
position: fixed;
left: 90.92%;
right: 6.73%;
top: 84.38%;
bottom: 11.46%;

height: 32px;
width: 32px;
border-radius: 360px;

border: 1px solid rgba(51, 51, 51, 0.2);
box-sizing: border-box;
transform: matrix(-1, 0, 0, 1, 0, 0);
`