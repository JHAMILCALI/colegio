import React from 'react';
import { Container } from 'react-bootstrap';

export const Login = () => {
  return (
    <div className='login-prin'>
      <Container className='login-cont'>
      <div class="form-structor">
	<div class="signup">
		<h2 class="form-title" id="signup"><span>or</span>Login Colegio La Salle</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Usuario" />
			<input type="email" class="input" placeholder="Correo institucional @est.lasallelpt.edu.bo" />
			<input type="password" class="input" placeholder="Contraseña" />
		</div>
		<button class="submit-btn">Ingresar</button>
	</div>
	<div class="login slide-up">
		<div class="center">
			<h2 class="form-title" id="login"><span>nuevo</span>Usuario</h2>
			<div class="form-holder">
				<input type="email" class="input" placeholder="Email" />
				<input type="password" class="input" placeholder="Password" />
			</div>
			<button class="submit-btn">Log in</button>
		</div>
	</div>
</div>
      </Container>
      
    </div>
  );
};
