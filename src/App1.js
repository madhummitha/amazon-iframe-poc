import React, { useState } from 'react';

const App = () => {
  const [showAmazon, setShowAmazon] = useState(false);

  const handleButtonClick = () => {
    setShowAmazon(true);
  };

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={handleButtonClick}>Show Amazon</button>
      {showAmazon && (
        <iframe
          src="https://www.amazon.com"
          title="Amazon Website"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
};

export default App;
