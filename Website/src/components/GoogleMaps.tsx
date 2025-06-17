import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15870.344053232858!2d106.700005!3d-6.142885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a7c8c8c8c8%3A0x8c8c8c8c8c8c8c8c8!2sRuko%20Royal%20Palem%20Jl.%20Royale%20Boulevard%20Blok%20RC%20No.%2022-23%2C%20Cengkareng%20Tim.%2C%20Jakarta%20Barat%2C%20DKI%20Jakarta%2011730!5e0!3m2!1sen!2sid!4v1654412345678!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ruko Royal Palem Location"
      />
    </div>
  );
};

export default GoogleMaps;
