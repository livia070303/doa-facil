import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="container">
            {/* Lado esquerdo com logo e frase */}
            <div className="left-side">
                <div className="logo-container">
                    <img src="../public/logoRecortado.png" alt="Logo da Empresa" className="logo" />
                    <h2><strong>DoaFácil: </strong> Conectando Solidariedade</h2>
                </div>
            </div>

            {/* Lado direito com formulário de login */}
            <div className="right-side">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">Usuário ou email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="forgot-password">
                            <a href="#">Esqueceu a senha</a>
                        </div>
                        <div className="input-group">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                    <div className="register">
                        <span>Não tem conta? <a href="#">Registrar</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
