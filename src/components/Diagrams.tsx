import React from 'react';

const Diagrams: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Causal Loop Diagram</p>
        <img
          src="./src/components/cld.png"
          alt="Causal Loop Diagram"
          style={{
            width: '480px',
            height: '250px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 0, 0.5)'; // Red shadow
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
            e.currentTarget.style.boxShadow = 'none'; // Remove shadow
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Stock and Flow Diagram</p>
        <img
          src="./src/components/stock.png"
          alt="Stock and Flow Diagram"
          style={{
            width: '400px',
            height: '250px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 255, 0, 0.5)'; // Green shadow
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
            e.currentTarget.style.boxShadow = 'none'; // Remove shadow
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <p style={{ fontWeight: 'bold', width: '200px', textAlign: 'right' }}>Behavior over Time Graph</p>
        <img
          src="./src/components/Bot.png"
          alt="Behavior over Time Graph"
          style={{
            width: '400px',
            height: '250px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.4)'; // Scale the image slightly
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 255, 0.5)'; // Blue shadow
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset the scale
            e.currentTarget.style.boxShadow = 'none'; // Remove shadow
          }}
        />
      </div>
    </div>
  );
};

export default Diagrams;