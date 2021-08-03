import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function PageNotFound() {
  return (
		<div className="not-found-page">
			<div className='mars'></div>
			<img
				src='https://assets.codepen.io/1538474/404.svg'
				className='logo-404'
				alt='404 error, page not found'
			/>
			<img
				src='https://assets.codepen.io/1538474/meteor.svg'
				className='meteor'
				alt='404 error, page not found'
			/>
      <div className="msg-not-found-container">
        <div className="astronaut-container">
          <img src='https://assets.codepen.io/1538474/astronaut.svg' className='astronaut' alt="astronaut"/>
        </div>
        <div className="not-found-container">
          <p className='not-found-title'>Oh no!!</p>
          <p className='subtitle'>
            Você deve ter digitado a URL incorreta ou
            está tentando acessar uma página que não existe mais.
          </p>

        </div>
      </div>
      <div align='center'>
        <Link className='btn-back' to='/'>
          Volte para a página principal
        </Link>
      </div>
      <img src='https://assets.codepen.io/1538474/spaceship.svg' className='spaceship' alt="spaceship"/>
		</div>
	);
}

export default PageNotFound;
