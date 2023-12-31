import { CustomDialogProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
const CustomDialog = ({isOpen,closeModal,title}: CustomDialogProps) => {

  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-body p-6 text-left align-middle shadow-xl transition-all">

              <Dialog.Title
                as="h3"
                className="text-center text-2xl font-bold leading-9 tracking-tight text-white"
              >
                {title}
              </Dialog.Title>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="relative w-full mt-2">
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden" id="toggle" type="checkbox" />
      <label className="bg-gray-800 hover:bg-gray-700 rounded px-2 py-1 text-sm text-white font-mono cursor-pointer" htmlFor="toggle">show</label>
      </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
           

            <div>
              <CustomButton
              title="Sign in"
                btnType="submit"
                containerStyles="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                handleClick={closeModal}
              />
             
            
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </a>
          </p>
        </div>
        
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
    </Transition>
  )
}

export default CustomDialog;