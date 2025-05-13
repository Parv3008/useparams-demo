import React from 'react';
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom';

function Page2() {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const message = searchParams.get('message');

  const context = useOutletContext(); 
  const { userId, appName } = context;

  return (
    <div>
      <h1>Page 2</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>App Name:</strong> {appName}</p>
    </div>
  );
}

export default Page2;
