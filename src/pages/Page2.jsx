import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Page2() {
  const { username } = useParams(); 
  const [searchParams] = useSearchParams();
  const message = searchParams.get('message'); 

  return (
    <div>
      <h1>Page 2</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}

export default Page2;
