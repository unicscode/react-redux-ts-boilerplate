import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      <h1>about page</h1>
      <Link to="/">home</Link>
    </div>
  );
};

export default About;
