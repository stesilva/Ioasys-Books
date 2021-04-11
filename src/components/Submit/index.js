import React from 'react';
import { StyledButton, StyledForm, StyledInputEmail, StyledInputPassword, Label, LabelSenha, StyledButtonLabel } from './styled';

export const Login = ({
  buttonTitle,
  onSubmit,
  handleSubmit,
  register,
  ...props
}) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputEmail
        name="emailInput"
        ref={register('searchValue')}
        {...props}
      />
      <Label>Email</Label>
      <StyledInputPassword
        name="passwordInput"
        ref={register('searchValue')}
        {...props}
      />
      <LabelSenha>Senha</LabelSenha>
      <StyledButton><StyledButtonLabel>{buttonTitle}</StyledButtonLabel></StyledButton>
    </StyledForm>
  );
};