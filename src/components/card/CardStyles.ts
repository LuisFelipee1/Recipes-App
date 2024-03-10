import styled from 'styled-components';

export const Container = styled.div`
display: flex;

width: 318px;
height: 135px;
flex-shrink: 0;

border-radius: 5px;
border: 0.518px solid #B1B1B1;
background: #FFF;

margin: 15px;
`;

export const ButtonsWrapper = styled.div`
width: 100px;
display: flex;
justify-content: space-around;
`;

export const Img = styled.img`
width: 163.346px;
height: 134.2px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100vw;

align-items: center;
justify-content: center;
background-color: #DAA520;
`;

export const Infos = styled.div`
width: 100px;
height: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const Name = styled.div`
color: #1A1B1C;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const Nationality = styled.div`
color: #797D86;
text-align: center;
font-size: 9px;
font-style: normal;
font-weight: 300;
line-height: normal;
`;
