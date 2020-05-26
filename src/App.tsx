import React, { useEffect } from 'react';
import Pages from './pages';
import { useAPI } from 'cinchy';

function App() {
  const [user, getUser] = useAPI('https://gitconnected.com/v1/portfolio/dtahoa2');

  useEffect(() => {
    if (!user.data) {
      getUser();
    }
  }, []);

  if (!user.data) {
    return <div></div>
  }

  return <Pages user={user.data} />;
}

export default App;