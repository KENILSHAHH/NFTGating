/** @format */

import { Polybase } from '@polybase/client';
import { useCollection } from '@polybase/react';
import React, { useState, useEffect } from 'react';

const db = new Polybase({
  defaultNamespace:
    'pk/0x428ddcf83c5607af5cc27cf24d2dcdb75a1bd4024183ccf40f2dd61c2aa325e7def2d9dbdd0022ecb8ccca68a19092bb8971dde6ab243fb76e796366b9be8a63/Huddle',
});

function MyComponent() {
  const [messages, setMessages] = useState([]);

  const chatRef = db.collection('Messages');
  const { data, error, loading } = useCollection(chatRef);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);
  console.log(messages);
  console.log(messages);

  return messages;
}

export default MyComponent;
