import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const Break = styled.br`
  padding: 2px;
`
export const Head = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
  padding-right: 10px;
`
// export const Popup = styled.popup`
//   display: flex;
//   flex-direction: column;
//   height: 40vw;
//   justify-content: space-between;
//   padding: 10px;

//   @media screen and (max-width: 576px) {
//     height: 260px;
//     width: 100%;
//   }
// `
export const PopupClose = styled.p`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
`
export const ResImg = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
export const Image = styled.img``

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  margin: 20px;
  padding: 10px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreRes = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #000;

  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
    font-family: 'Roboto';
  }
`
export const ScoreCard = styled.div`
  @media screen and (max-width: 576px) {
    padding: 10px;
    text-align: center;
    background-color: #fff;
    color: #000;
  }
`

export const ButtonList = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
