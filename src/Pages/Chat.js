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
import {
  useLobby,
  useAudio,
  useVideo,
  useRoom,
  useMeetingMachine,
} from '@huddle01/react/hooks';
const db = new Polybase({
  defaultNamespace:
    'pk/0x203023a6ef70058f761c78526d8411d97cc6d47c8c23a3ad75784c52aa7172a389d758998df9c4e9be7fe9da9d0a2144794d245683690eba505f7057eafaaadb/Dappthon',
});

const auth = new Auth();
const iframeConfig = {
  roomUrl: 'https://iframe.huddle01.com/nof-yetz-tqj',
  height: '600px',
  width: '80%',
  noBorder: false, // false by default
};
function Chat() {
  const [formInput, setFormInput] = useState({ address: '', message: '' });
  const { state, send } = useMeetingMachine();
  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby } = useLobby();
  const {
    fetchAudioStream,
    stopAudioStream,
    error: micError,
    produceAudio,
    stopProducingAudio,
    stream: micStream,
  } = useAudio();

  const {
    fetchVideoStream,
    stopVideoStream,
    error: camError,
    produceVideo,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();
  let sds;
  useEffect((async) => {
    // its preferable to use env vars to store projectId

    sds = auth.signIn();
    console.log(sds.userId);
  }, []);
  const handleSubmit = async (event) => {
    await setFormInput({ ...formInput, address: sds.userId });
    console.log(formInput);
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
                  <div>
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                    />
                  </div>
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">New Movie! Expendables 4</p>
                      <p class="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">
                      Get Andrés on this movie ASAP!
                    </p>
                  </div>
                </div>
                <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                  <div>
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                    />
                  </div>
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">Arnold Schwarzenegger</p>
                      <p class="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">I'll be back</p>
                  </div>
                </div>
                <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                  <div>
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                    />
                  </div>
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">Russell Crowe</p>
                      <p class="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">Hold the line!</p>
                  </div>
                </div>
                <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                  <div>
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5"
                    />
                  </div>
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">Tom Cruise</p>
                      <p class="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">
                      Show me the money!
                    </p>
                  </div>
                </div>
                <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                  <div>
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg"
                    />
                  </div>
                  <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                      <p class="text-grey-darkest">Harrison Ford</p>
                      <p class="text-xs text-grey-darkest">12:45 pm</p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">
                      Tell Java I have the money
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-2/3 border flex flex-col">
              <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div class="flex items-center">
                  <div>
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                    />
                  </div>
                  <div class="ml-4">
                    <p class="text-grey-darkest">New Movie! Expendables 4</p>
                    <p class="text-grey-darker text-xs mt-1">
                      Andrés, Tom, Harrison, Arnold, Sylvester
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path
                        fill="#263238"
                        fill-opacity=".5"
                        d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
                    </svg>
                  </div>
                  <div class="ml-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path
                        fill="#263238"
                        fill-opacity=".5"
                        d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
                    </svg>
                  </div>
                  <div class="ml-6">
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

              <div
                class="flex-1 overflow-auto"
                style={{ backgroundColor: '#DAD3CC' }}>
                <div class="py-2 px-3">
                  <div class="flex justify-center mb-2">
                    <div
                      class="rounded py-2 px-4"
                      style={{ backgroundColor: '#DDECF2' }}>
                      <p class="text-sm uppercase">February 20, 2018</p>
                    </div>
                  </div>

                  <div class="flex justify-center mb-4">
                    <div
                      class="rounded py-2 px-4"
                      style={{ backgroundColor: '#FCF4CB' }}>
                      <p class="text-xs">
                        Messages to this chat and calls are now secured with
                        end-to-end encryption. Tap for more info.
                      </p>
                    </div>
                  </div>

                  <div class="flex mb-2">
                    <div
                      class="rounded py-2 px-3"
                      style={{ backgroundColor: '#F2F2F2' }}>
                      <p class="text-sm text-teal">Sylverter Stallone</p>
                      <p class="text-sm mt-1">
                        Hi everyone! Glad you could join! I am making a new
                        movie.
                      </p>
                      <p class="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
                    </div>
                  </div>

                  <div class="flex justify-end mb-2">
                    <div
                      class="rounded py-2 px-3"
                      style={{ backgroundColor: '#E2F7CB' }}>
                      <p class="text-sm mt-1">Hi guys.</p>
                      <p class="text-right text-xs text-grey-dark mt-1">
                        12:45 pm
                      </p>
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
