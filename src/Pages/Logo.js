/** @format */

import React from 'react';

function Logo() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Huddle Chat
        </h1>
        <h3
          style={{ marginTop: '40px', fontSize: '40px' }}
          className="font-bold tracking-tight text-gray-900 sm:text-6xl">
          Chatting and Video Calling just got more secure
        </h3>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Chat with your friends and family with the security of blockchain
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/NFTCard"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get Premium Access
          </a>
          <a
            href="/Chat"
            className="text-sm font-semibold leading-6 text-gray-900">
            Start Chatting <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
