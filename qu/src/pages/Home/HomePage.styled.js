import styled from 'styled-components';

export const HomeHeader = styled.header`
  background-color: rgb(169,73,81);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HomeImg = styled.img`
  height: 20vmin;
  pointer-events: none;
`

//                    <img src={logo} className="App-logo" alt="logo" />