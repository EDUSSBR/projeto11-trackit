import styled from "styled-components"

export function MessageText({ text, shouldDisplayMessage=true }) {
    return <Text shouldDisplayMessage={shouldDisplayMessage} >{text} </Text>
}

const Text = styled.p`
  display: ${({shouldDisplayMessage}) =>  shouldDisplayMessage ? 'block': 'none'};
  position: ${({shouldDisplayMessage}) =>  shouldDisplayMessage ? 'static': 'absolute'};
  font-family: 'Lexend Deca';
  font-size: 18px;
  line-height: 22px;  
  color: #666666;
  width:100%;
  margin: 0 auto;
  max-width: 340px;
`