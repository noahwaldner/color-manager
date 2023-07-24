import { FunctionComponent } from "react";
import { styled } from "styled-components";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
export const Button: FunctionComponent<IButtonProps> = ({
  children,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: var(--primary-highlight);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-highlightText);
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
