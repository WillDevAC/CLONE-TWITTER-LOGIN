import React from 'react';

import Logo from '../../assets/images/logo.png';

import { FcGoogle } from 'react-icons/fc';
import { DiApple } from 'react-icons/di';

import './estilos.scss';

export function Login () {
    return (
    <>
        <div className="login-content">
            <div className="logo-login"/>
                <div className="form-login">

                <div className="content-form-login">

                    <img src={Logo} />

                    <h1>Acontecendo agora</h1>
                    <span>Inscreva-se no Twitter hoje mesmo.</span>

                    <div className="content-form-login-actions">
                        <button>
                            <FcGoogle size={23}/>
                            <span>Inscrever-se no Google</span>
                        </button>
                        <button>
                            <DiApple size={23}/>
                            <span>Inscrever-se com Apple</span>
                        </button>
                        <button>
                            Inscrever-se com número de celular...
                        </button>
                    </div>
                    
                    <div className="content-form-login-disclaimer">
                        Ao se inscrever, você concorda com os <a>Termos de Serviço</a> e a <br/>
                        <a>Política de Privacidade,</a> incluindo o <a>Uso de Cookies</a>.
                    </div>
                    <p>Já tem uma conta? <a>Entre</a></p>
                </div>

            </div>
        </div>
        <div className="footer">
            <nav className="links">
                <a>Sobre</a>
                <a>Central de Ajuda</a>
                <a>Termos de Serviço</a>
                <a>Politica de Privacidade</a>
                <a>Politica de cookies</a>
                <a>Informações de anúncios</a>
                <a>Blog</a>
                <a>Status</a>
                <a>Carreiras</a>
                <a>Recursos da marca</a>
                <a>Publicidade</a>
                <a>Marketing</a>
                <a>Twitter para Empresas</a>
                <a>Desenvolvedores</a>
            </nav>
        </div>
    </>
    )
}