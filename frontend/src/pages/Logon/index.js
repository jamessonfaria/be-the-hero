import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Login(){

    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        }catch(err) {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Faça o seu cadastro
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heroes" />
        </div>

    );
}