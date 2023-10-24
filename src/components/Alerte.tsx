import { ReactNode, useEffect } from "react";
import { Alert, initTE } from "tw-elements";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alerte = ({ children, onClose }: Props) => {
  useEffect(() => {
    initTE({ Alert });
  }, []);

  return (
    // <div
    //   className="mb-4 rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800"
    //   role="alert"
    // >
    //   A simple warning alert—check it out!
    // </div>
    <>
      <div
        className="mb-4 w-full rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600 data-[te-alert-show]:inline-flex"
        // className="mb-3 hidden w-full items-center rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800 data-[te-alert-show]:inline-flex"
        role="alert"
        data-te-alert-init
        data-te-alert-show
      >
        <strong className="mr-1">Holy guacamole! </strong> You should check in
        on some of those fields below.
        <button
          type="button"
          className="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-alert-dismiss
          aria-label="Close"
          onClick={onClose}
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* <div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>
            <span className="font-bold">Info:</span>
            This is an info alert
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Alerte;
