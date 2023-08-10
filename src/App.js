import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [amazonContent, setAmazonContent] = useState(null);

  useEffect(() => {
    const fetchAmazonContent = async () => {
      try {
        const response = await axios.get('/amazon');
        setAmazonContent(response.data);
      } catch (error) {
        console.error('Error fetching Amazon content:', error);
      }
    };

    fetchAmazonContent();
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      <button>Show Amazon</button>
      {amazonContent && (
        <div dangerouslySetInnerHTML={{ __html: amazonContent }} />
      )}
    </div>
  );
};

export default App;
