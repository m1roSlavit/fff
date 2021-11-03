import React, { ButtonHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  loading,
  disabled,
  ...restProps
}) => (
  <StyledButton disabled={loading || disabled} {...restProps}>
    {loading && <LoadingIcon />}
    {children}
  </StyledButton>
);

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 2px solid transparent;
  margin-right: 10px;
  animation: ${loadingAnimation} 1.2s linear infinite;
`;

const StyledButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  background-color: #1451ff;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  transition: 0.3s;
  box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.1);
  font-size: 15px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover {
    opacity: 0.7;
  }
`;
