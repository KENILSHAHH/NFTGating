/** @format */

import React from 'react';
import { HuddleIframe, IframeConfig } from '@huddle01/huddle01-iframe';

const iframeConfig = {
  roomUrl: 'https://iframe.huddle01.com/nof-yetz-tqj',
  height: '600px',
  width: '80%',
  noBorder: false, // false by default
};

function IFrame() {
  return (
    <div
      style={{
        margin: '100px'
      }}>
      <HuddleIframe config={iframeConfig} />
    </div>
  );
}

export default IFrame;
