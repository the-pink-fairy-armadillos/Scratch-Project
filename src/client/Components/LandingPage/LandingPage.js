import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import landingPageImage from './animation.png';
import styles from './LandingPage.module.css';
import CreateUser from '../CreateUser/CreateUser';

const LandingPage = () => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center vertical-center bg-warning">
        <div className="row  align-middle">
          <div id={styles.divContainer} className="col">
            <div className={styles.width500}>
              "Learning is the key to unlocking your full potential and
              achieving greatness."
            </div>
            <div>
              <img id={styles.landingImage} src={landingPageImage} />
            </div>
          </div>
          <a
            className="col"
            id={styles.LandingPageLogin}
            href={`http://localhost:8080/auth/google`}
          >
            Log In With Google
          </a>
          <a
            className='usertoDB'
            id={styles.LandingPageLogin} 
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
