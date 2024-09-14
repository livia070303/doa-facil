import React, { useState } from 'react';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-container">
      <h2>{isLogin ? 'Entrar' : 'Registrar'}</h2>

      {isLogin ? (
        <form className="login-form">
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <div className="options">
            <a href="#">Esqueceu a Senha?</a>
            <button className="social-login">Entrar com Google</button>
            <button className="social-login">Entrar com Facebook</button>
          </div>
        </form>
      ) : (
        <form className="register-form">
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>
          <div>
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div>
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div>
            <label htmlFor="state">Estado:</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div>
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required />
          </div>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit">Registrar</button>
        </form>
      )}

      <button onClick={toggleForm} className="toggle-button">
        {isLogin ? 'Criar uma conta' : 'Já tem uma conta? Entrar'}
      </button>
    </div>
  );
}

export default LoginRegister;
