/** @format */

import React, { useEffect } from 'react';
import RegisterUser from './RegisterUser.js';
import { Polybase } from '@polybase/client';

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useCollection } from '@polybase/react';
const db = new Polybase({
  defaultNamespace:
    'pk/0x428ddcf83c5607af5cc27cf24d2dcdb75a1bd4024183ccf40f2dd61c2aa325e7def2d9dbdd0022ecb8ccca68a19092bb8971dde6ab243fb76e796366b9be8a63/Huddle',
});
const dbref = db.collection('User');

function Logo() {
  const [open, setOpen] = useState(false);
  async function makeTrue() {
    await setOpen(true);
  }
  const { data, error, loading } = useCollection(dbref);
  useEffect(() => {
    console.log(data);
  }, []);
  // console.log(data.data.forEach);
  const cancelButtonRef = useRef(null);
  const [formInput, setFormInput] = useState({ name: '', address: '' });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const registered = await dbref.create([formInput.address, formInput.name]);
    const res = await dbref.get();
    console.log(data);
    alert('Done');
    console.log('done');
    setFormInput({ name: '', address: '' });
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          WhatsDapp !
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
          <>
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              onClick={makeTrue}
              type="button">
              Register User ->
            </button>

            {/* <div
              id="authentication-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Sign up to our platform
                    </h3>
                    <form
                      className="space-y-6"
                      action="#">
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Your Wallet Address
                        </label>
                        <input
                          type="address"
                          name="address"
                          id="address"
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="0x..."
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Your Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          onChange={handleChange}
                          id="name"
                          placeholder="John"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        onClick={createUser}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Sign to Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            <Transition.Root
              show={open}
              as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-base font-semibold leading-6 text-gray-900">
                                Sign UP
                              </Dialog.Title>
                              <div className="mt-2">
                                <form
                                  className="w-full"
                                  action="#">
                                  <div>
                                    <label
                                      htmlFor="email"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                      Your Wallet Address
                                    </label>
                                    <input
                                      type="address"
                                      name="address"
                                      id="address"
                                      onChange={handleChange}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                      placeholder="0x..."
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="password"
                                      className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                      Your Name
                                    </label>
                                    <input
                                      type="name"
                                      name="name"
                                      onChange={handleChange}
                                      id="name"
                                      placeholder="John"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                      required
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign to Register
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}>
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </>
        </div>
      </div>
    </div>
  );
}

export default Logo;
