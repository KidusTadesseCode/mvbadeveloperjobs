import styled from "styled-components"

const AppContainer = styled.div`
  background-color: ${props => props.themeColor ? '#292828' : "white"};
  height: 100%;
  width: 100%;
`

export default AppContainer