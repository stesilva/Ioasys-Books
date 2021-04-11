import React, { useContext, useState } from 'react';
import { Header } from '../Header';
import { Login } from '../Submit';
import { StyledForm } from './styled';
//import axios from 'axios';
import { useForm } from 'react-hook-form';

export const Form = (...props) => {

//com hookform
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  console.log(data);
  //setWord(data.searchValue);
};

    return(
        <StyledForm>
            <Header title = "Books"/>
            <Login
            buttonTitle="Entrar"
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            ></Login>
        </StyledForm>
    )
}