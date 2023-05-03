import React from 'react'
import { useHuddle01 } from '@huddle01/react';
import { useEffect } from 'react';
 import { useLobby } from '@huddle01/react/hooks';
function Index() {
      const { joinLobby } = useLobby();
    const { initialize, isInitialized } = useHuddle01();
    useEffect(() => {
      //api key VwTZ4AGTxme9snANex9tep3NwvVMGfYd
      // its preferable to use env vars to store projectId
      initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR');
    }, []);
  return (
    <div>Index</div>
  )
}

export default Index