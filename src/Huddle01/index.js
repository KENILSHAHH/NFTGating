/** @format */

import { getMessage } from '@huddle01/auth';
import { useAccount, useSignMessage } from 'wagmi';
import { getAccessToken } from '@huddle01/auth';
import { useState } from 'react';
import { ConnectKitButton } from 'connectkit';
const address = '0x9f765ac659C20B4586490d72A7866B7F69B2be98'; // address of the user

const message = getMessage(address); // message to sign
export const Appp = () => {
  const [accessToken, setAccessToken] = useState('');

  const { signMessage } = useSignMessage({
    onSuccess: async (data) => {
      const token = await getAccessToken(data, address);
      setAccessToken(token.accessToken);
      console.log(accessToken);
    },
  });

  return (
    <div style={{ margin: '100px', padding: '100px' }}>
 
      <button
        style={{ margin: '100px', padding: '100px' }}
        onClick={async () => {
          const msg = await getMessage(address);
          signMessage({ message: msg.message });
        }}>
        Sign Message
      </button>
    </div>
  );
};
