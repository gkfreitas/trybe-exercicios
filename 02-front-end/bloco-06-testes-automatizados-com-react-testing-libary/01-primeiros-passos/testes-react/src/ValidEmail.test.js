import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import ValidEmail from './ValidEmail';

describe('Testes para o email', () => {
  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Não exibir a mensagem caso o email ainda não tenha sido enviado.', () => {
    render(<App />);
    const emailInvalid = screen.queryByText('Email Inválido')
    const emailValid = screen.queryByText('Email Válido')
    expect(emailInvalid).not.toBeInTheDocument();
    expect(emailValid).not.toBeInTheDocument();
  });

  it('exibir a mensagem caso o email tenha sido enviado.', () => {
    render(<App />);
    const emailValid = screen.getByTestId('valid-email');
    const EMAIL_VALID = 'teste@teste.com';
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_VALID);
    userEvent.click(btnSend);
    expect(emailValid).toHaveTextContent('Email Válido');
  });

  it('Caso seja valido a cor deve ser verde', () => {
    const EMAIL_USER = 'emailcerto@certo.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    const style = window.getComputedStyle(isValid)
    expect(style.color).toBe('green')
  });

  it('Caso seja invalido a cor deve ser vermelho', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isInvalid = screen.getByText('Email Inválido');
    const style = window.getComputedStyle(isInvalid)
    expect(style.color).toBe('red')
  });
})


