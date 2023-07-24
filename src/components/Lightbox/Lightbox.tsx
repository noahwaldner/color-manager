import { FunctionComponent } from "react";
import { styled } from "styled-components";
import { Button } from "../Button";

interface ILightboxProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  text: string;
}

export const Lightbox: FunctionComponent<ILightboxProps> = ({
  visible,
  onConfirm,
  onCancel,
  text,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <Background>
      <Content>
        <AlertText>{text}</AlertText>
        <StyledButtonLeft onClick={onConfirm}>Confirm</StyledButtonLeft>
        <StyledButtonRight onClick={onCancel}>Cancel</StyledButtonRight>
      </Content>
    </Background>
  );
};

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
`;

const Content = styled.div`
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const StyledButtonRight = styled(Button)`
  grid-row: 2;
  grid-column: 2;
`;

const StyledButtonLeft = styled(Button)`
  grid-row: 2;
  grid-column: 1;
`;

const AlertText = styled.p`
  grid-row: 1;
  grid-column: 1 / -1;
  justify-self: center;

  font-weight: 700;
  color: var(--black);
  text-align: center;
`;
