/** @format */
import React, { useState } from 'react';
import { useAuth } from '@polybase/react';
import * as eth from '@polybase/eth';
import { secp256k1 } from '@polybase/util';
import { Polybase } from '@polybase/client';
import { ethPersonalSign } from '@polybase/eth';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';


const db = new Polybase({
  defaultNamespace:
    'pk/0x897b08efcd46e4843eb6041fd0ab956864d942bdeb6bcc4fbbef326ca9c2f03b906b3441d5f95b4cdeb475982fb795b97c19b6e363c2edb19b7f6dc5d48cfa2c/Huddle Chat',
});

const cref = db.collection('Final');
export default function Input() {
  const [formInput, setFormInput] = useState({ id: 11, name: '', email: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await cref.record();
    console.log(data);
    const result = await cref.create([
      formInput.id + '',
      formInput.name,
      formInput.email,
    ]);
    const updated = (await formInput.id) + 1;
    setFormInput({ ...formInput, id: updated });
    console.log(result);
  };

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
    };
    //   async function createWallet() {
    //     // First time the user signs up to your dapp (generate key AKA wallet)
    //     const { privateKey, publicKey } = await secp256k1.generateKeyPair();
    //     // Add signer fn
    //     db.signer(async (data) => {
    //       return {
    //         h: 'eth-personal-sign',
    //         sig: ethPersonalSign(privateKey, data),
    //       };
    //     });
    //       console.log(privateKey,publicKey);
    //     return { privateKey, publicKey };
    //   }

  return (
    <div className=" m-64">
      <form>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Data will be saved in polybase
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="first-name"
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="last-name"
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
                      type="button"
        
            className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
