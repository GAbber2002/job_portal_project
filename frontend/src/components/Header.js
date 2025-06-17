import React from 'react';

const Header = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      color: '#ffffff',
      padding: '40px 0',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '65px',
        margin: 0,
        fontFamily: 'Segoe UI, sans-serif',
        letterSpacing: '2px'
      }}>
        Job Portal
      </h1>
    </div>
  );
};

export default Header;
