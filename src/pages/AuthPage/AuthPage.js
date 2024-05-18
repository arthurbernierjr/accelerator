import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import styles from './AuthPage.module.scss';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div className={styles.container}>
      <img className={styles.authLogo} src='/img/authlogo.png'/>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'New here? Click Here To SIGN UP' : 'Returning Mentee? Click Here to LOG IN'}
        </h3>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}
