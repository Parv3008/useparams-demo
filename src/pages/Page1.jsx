import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();

  const handleClick = () => {
    const username = 'Parv';
    const message = 'Welcome back!';

    navigate(`/page2/${username}?message=${(message)}`);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={handleClick}>Go to Page 2</button>
    </div>
  );
}

export default Page1;
