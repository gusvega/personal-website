import React, { useState, useEffect } from 'react';

function Alert({ message }) {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setVisible(false);
      }, 10000);

      return () => clearTimeout(timer);
   }, []);

   return visible && (
      <div style={{ backgroundColor: '#f44336', color: 'white', padding: '4px' }}>
         {message}
      </div>
   );
}

export default Alert;