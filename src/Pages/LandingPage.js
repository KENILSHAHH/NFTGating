/** @format */

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@polybase/react';
import { useIsAuthenticated } from '@polybase/react';
// import { ConnectKitButton } from 'connectkit';
import { useAccount, useSignMessage } from 'wagmi';
import { getAccessToken, getMessage } from '@huddle01/auth';
import { useHuddle01 } from '@huddle01/react';
import { useLobby, useRoom, useMeetingMachine } from '@huddle01/react/hooks';
import { useEffect } from 'react';
import teams from '../Assets/teams.svg';
import { Auth } from '@polybase/auth';
const navigation = [
  { name: 'Add Contacts', href: '/RegisterUser' },
  { name: 'Get Access to Video Call', href: '/NFTCard' },
  { name: 'Start Chatting', href: '/Chat' },
];

export const authh = '';
export default function LandingPage({ pageContents: Content }) {
  const { initialize, isInitialized } = useHuddle01();
  // const { joinRoom, leaveRoom, isLoading, isRoomJoined, error } = useRoom();
  // const { joinLobby } = useLobby();

  const [isLoggedIn] = useIsAuthenticated();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const { auth, state, loading } = useAuth();
  // useEffect(() => {
  //   initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR');
  // }, []);
  async function signIn() {
    const some = await auth.signIn();

    console.log(state);
  }
  // const { signMessage } = useSignMessage({
  //   onSuccess: async (data) => {
  //     const token = await getAccessToken(data, address);
  //     setAccessToken(token.accessToken);
  //     console.log(accessToken);
  //     await joinLobby('szk-kodo-hne');
  //     console.log(JSON.stringify(state.value));
  //     isRoomJoined ? console.log('khsdf') : console.log('no');
  //   },
  // });
  // async function joinRoomm() {
  //   console.log('final');
  //   await joinRoom;
  //   console.log(isRoomJoined);
  // }

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div
            className="flex lg:flex-1"
            style={{ height: '75px' }}>
            <img src={teams} />
          </div>
          {/* <div className="flex lg:flex-1">
            <button
              disabled={!joinRoom.isCallable}
              onClick={joinRoomm}>
              JOIN_ROOM
            </button>
          </div> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <button
                onClick={() => auth.signOut()}
                className="text-sm font-semibold leading-6 text-gray-900">
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <button
                onClick={signIn}
                className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {isLoggedIn ? (
                    <button
                      onClick={() => auth.signOut()}
                      className="text-sm font-semibold leading-6 text-gray-900">
                      Log out <span aria-hidden="true">&rarr;</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => auth.signIn()}
                      className="text-sm font-semibold leading-6 text-gray-900">
                      Log in <span aria-hidden="true">&rarr;</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000dff] to-[#00b7ff] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Content />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2b00ff] to-[#00bfff] opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
