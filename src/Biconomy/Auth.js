/** @format */

import SocialLogin from '@biconomy/web3-auth';
import '@biconomy/web3-auth/dist/src/style.css';
import React from 'react';
const ethers = require('ethers');
const socialLogin = new SocialLogin();
socialLogin.init();
function BAuth() {
  async function showWallett() {
    socialLogin.showWallet();
    if (!socialLogin?.provider) return;
    // create a provider from the social login provider that
    // will be used by the smart account package of the Biconomy SDK
    const provider = new ethers.providers.Web3Provider(socialLogin.provider);
    // get a list of accounts available with the provider
    const accounts = await provider.listAccounts();
    console.log('EOA address', accounts);
  }
  return (
    <>
      {' '}
      <button
        onClick={showWallett}
        style={{ margin: '250px' }}>
        {' '}
        Open{' '}
      </button>{' '}
    </>
  );
}

export default BAuth;
