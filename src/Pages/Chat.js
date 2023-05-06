/** @format */

import React from 'react';
import teams from '../Assets/teams.svg';
import { useAuth } from '@polybase/react';
import * as eth from '@polybase/eth';
import { secp256k1 } from '@polybase/util';
import { Polybase } from '@polybase/client';
import { ethPersonalSign } from '@polybase/eth';
import { useHuddle01 } from '@huddle01/react';
import { HuddleIframe, IframeConfig } from '@huddle01/huddle01-iframe';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '@polybase/auth';
import { useState } from 'react';
import vc from '../Assets/vc.png';
import { authh } from './LandingPage.js';
import {
  useLobby,
  useAudio,
  useVideo,
  useRoom,
  useMeetingMachine,
} from '@huddle01/react/hooks';
const db = new Polybase({
  defaultNamespace:
    'pk/0x428ddcf83c5607af5cc27cf24d2dcdb75a1bd4024183ccf40f2dd61c2aa325e7def2d9dbdd0022ecb8ccca68a19092bb8971dde6ab243fb76e796366b9be8a63/Huddle',
});

// const auth = new Auth();
const iframeConfig = {
  roomUrl: 'https://iframe.huddle01.com/nof-yetz-tqj',
  height: '600px',
  width: '80%',
  noBorder: false, // false by default
};
function Chat() {
  const { auth, state, loading } = useAuth();
  const [formInput, setFormInput] = useState({ address: '', message: '' });
  useEffect(() => {
    auth.signIn();
    console.log('hsb');
    console.log(state.userId);
    setFormInput({ ...formInput, address: state.userId });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
     

    // const data = await cref.record();
    // console.log(data);
    // const result = await cref.create([
    //   formInput.id + '',
    //   formInput.name,
    //   formInput.email,
    // ]);
    // const updated = (await formInput.id) + 1;
    // setFormInput({ ...formInput, id: updated });
    // console.log(result);
  };
  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <div class="w-full h-32"></div>

      <div
        class="container mx-auto"
        style={{
          marginTop: '-128px',
        }}>
        <div class="py-6 h-screen">
          <div
            style={{
              borderColor: 'black',
              borderRadius: '20px',
            }}
            class="flex border rounded shadow-lg h-full">
            <div class="w-1/3 border flex flex-col">
              <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div>
                  <img
                    style={{ height: '60px' }}
                    src={teams}
                  />
                </div>

                <div class="flex">
                  <div></div>
                  <div class="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path
                        fill="#263238"
                        fill-opacity=".6"
                        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="py-2 px-2 bg-grey-lightest">
                <input
                  type="text"
                  class="w-full px-2 py-2 text-sm"
                  placeholder="Search or start new chat"
                />
              </div>

              <div class="bg-grey-lighter flex-1 overflow-auto">
                <div class="px-3 flex items-center bg-grey-light cursor-pointer">
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">Deep Shah</p>
                      <p class="text-xs text-grey-darkest">11:45pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">
                      Hey there I am new to WhatsDapp!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-2/3 border flex flex-col">
              <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div class="flex items-center">
                  <div class="ml-4">
                    <p class="text-grey-darkest">Deep Shah</p>
                    <p class="text-grey-darker text-xs mt-1">online</p>
                  </div>
                </div>

                <div class="flex">
                  <Link
                    class="ml-6"
                    to="/IFrame">
                    <img
                      style={{ height: '20px' }}
                      src={vc}
                    />
                  </Link>
                </div>
              </div>

              <div
                class="flex-1 overflow-auto"
                style={{ backgroundColor: '#DAD3CC' }}>
                <div class="py-2 px-3">
                  <div class="flex justify-center mb-2">
                    <div
                      class="rounded py-2 px-4"
                      style={{ backgroundColor: '#DDECF2' }}>
                      <p class="text-sm uppercase">May 4, 2023</p>
                    </div>
                  </div>

                  <div class="flex justify-center mb-4">
                    <div
                      class="rounded py-2 px-4"
                      style={{ backgroundColor: '#FCF4CB' }}>
                      <p class="text-xs">
                        Messages to this chat and calls are now secured with
                        peer-to-peer encryption. Tap for more info.
                      </p>
                    </div>
                  </div>

                  <div class="flex mb-2">
                    <div
                      class="rounded py-2 px-3"
                      style={{ backgroundColor: '#F2F2F2' }}>
                      <p class="text-sm text-teal">Deep Shah</p>
                      <p class="text-sm mt-1">Hi Kenil, how are you?</p>
                      <p class="text-right text-xs text-grey-dark mt-1"></p>
                    </div>
                  </div>

                  <div class="flex justify-end mb-2">
                    <div
                      class="rounded py-2 px-3"
                      style={{ backgroundColor: '#E2F7CB' }}>
                      <p class="text-sm mt-1">Hi Deep</p>
                      <p class="text-right text-xs text-grey-dark mt-1"></p>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div class="bg-grey-lighter px-4 py-4 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path
                        opacity=".45"
                        fill="#263238"
                        d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 mx-4">
                    <input
                      class="w-full border rounded px-2 py-2"
                      name="message"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inline-flex">
                    {/* <Link to="/IFrame">Join Audio Room</Link> */}
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleSubmit}>
                      Send
                    </button>
                    {/* {state.userId} */}

                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path
                      fill="#263238"
                      fill-opacity=".45"
                      d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path>
                  </svg> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className="text-3xl text-blue-500 font-extrabold">Idle</h2>
      <button
        disabled={!state.matches('Idle')}
        onClick={() => initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR')}>
        INIT
      </button>

      <br />
      <br />
      <h2 className="text-3xl text-red-500 font-extrabold">Initialized</h2>
      <button
        disabled={!joinLobby.isCallable}
        onClick={() => {
          joinLobby('hvr - kske - lip');
        }}>
        JOIN_LOBBY
      </button>
      <br />
      <br />
      <h2 className="text-3xl text-yellow-500 font-extrabold">Lobby</h2>
      <div className="flex gap-4 flex-wrap">
        <button
          disabled={!fetchVideoStream.isCallable}
          onClick={fetchVideoStream}>
          FETCH_VIDEO_STREAM
        </button>

        <button
          disabled={!fetchAudioStream.isCallable}
          onClick={fetchAudioStream}>
          FETCH_AUDIO_STREAM
        </button>

        <button
          disabled={!joinRoom.isCallable}
          onClick={joinRoom}>
          JOIN_ROOM
        </button>

        <button
          disabled={!state.matches('Initialized.JoinedLobby')}
          onClick={() => send('LEAVE_LOBBY')}>
          LEAVE_LOBBY
        </button>

        <button
          disabled={!stopVideoStream.isCallable}
          onClick={stopVideoStream}>
          STOP_VIDEO_STREAM
        </button>
        <button
          disabled={!stopAudioStream.isCallable}
          onClick={stopAudioStream}>
          STOP_AUDIO_STREAM
        </button>
      </div>
      <br />
      <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
      <div className="flex gap-4 flex-wrap">
        <button
          disabled={!produceAudio.isCallable}
          onClick={() => produceAudio(micStream)}>
          PRODUCE_MIC
        </button>

        <button
          disabled={!produceVideo.isCallable}
          onClick={() => produceVideo(camStream)}>
          PRODUCE_CAM
        </button>

        <button
          disabled={!stopProducingAudio.isCallable}
          onClick={() => stopProducingAudio()}>
          STOP_PRODUCING_MIC
        </button>

        <button
          disabled={!stopProducingVideo.isCallable}
          onClick={() => stopProducingVideo()}>
          STOP_PRODUCING_CAM
        </button>

        <button
          disabled={!leaveRoom.isCallable}
          onClick={leaveRoom}>
          LEAVE_ROOM
        </button>
      </div>
      <div>
        Me Video:
        <video
          ref={videoRef}
          autoPlay
          muted></video>
        <div className="grid grid-cols-4">
          {Object.values(peers)
            .filter((peer) => peer.cam)
            .map((peer) => (
              <Video
                key={peer.peerId}
                peerId={peer.peerId}
                track={peer.cam}
                debug
              />
            ))}
          {Object.values(peers)
            .filter((peer) => peer.mic)
            .map((peer) => (
              <Audio
                key={peer.peerId}
                peerId={peer.peerId}
                track={peer.mic}
              />
            ))}
        </div>
      </div> */}
    </div>
  );
}

export default Chat;
