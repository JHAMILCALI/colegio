import React from 'react';
import img1 from '../assets/img/imgSalle/La_Salle_pgina_LOGO.png';

export const Ubicacion = () => {
  const spacing = 1; // Ajusta este valor según tus necesidades

  return (
    <div className="ubi">
      <div>
        <img src={img1} alt="La Salle Logo" />
      </div>
      <div style={{ margin: '0 auto', textAlign: 'center', width: '80%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122421.51804919932!2d-68.16534489560424!3d-16.49211574514424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f212b8f91016f%3A0x145d8d043b406d83!2sColegio%20La%20Salle!5e0!3m2!1ses!2sbo!4v1702348614920!5m2!1ses!2sbo"
          width="600"
          height="450"
          style={{ border: 0, display: 'block', margin: '0 auto' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
        {/* Otro contenido de tu componente */}
      </div>
    </div>
  )
}
