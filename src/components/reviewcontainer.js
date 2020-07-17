import React from 'react';
import Rev from '../components/review';
export default function() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: '0',
        zIndex: '100',
        backgroundColor: '#F0B90B',
        color: 'white',
        fontWeight: 'bold',
        transform: 'rotate(-90deg)',
        padding: '20px',
        marginRight: '-20px',
        fontFamily:"helvetica neu"
      }}
    >
     
      <div>
        <Rev />
      </div>
    </div>
  );
}
