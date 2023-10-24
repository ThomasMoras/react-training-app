import { useEffect, useState } from "react";
import Alerte from "./components/Alerte";
import ListGroup from "./components/ListGroup";

// Initialization for ES Users
import { Dropdown, Ripple, initTE } from "tw-elements";
import Button from "./components/Button";
import { AlertWithContent } from "./components/AlertWithContent";
import Message from "./components/Message";
import { AlertDismissible } from "./components/AlertDismissible";

function App() {
  // useEffect(() => {
  //   initTE({ Dropdown, Ripple });
  // }, []);

  // const items = ["Toto", "Tutu", "Titi", "Tata"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  // const onClick = () => {
  //   return <Alerte></Alerte>;
  // };

  return (
    <div className="">
      <AlertDismissible></AlertDismissible>
      <Message></Message>
      {/* <AlertWithContent></AlertWithContent> */}

      {alertVisible && (
        <Alerte
          children="red"
          onClose={() => {
            setAlertVisibility(false);
          }}
        ></Alerte>
      )}

      <Button
        children="Bouton"
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      ></Button>
      {/* <div
        className="mb-4 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600"
        role="alert"
      >
        A simple primary alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-secondary-100 px-6 py-5 text-base text-secondary-800"
        role="alert"
      >
        A simple secondary alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700"
        role="alert"
      >
        A simple success alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
        role="alert"
      >
        A simple danger alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800"
        role="alert"
      >
        A simple warning alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-info-100 px-6 py-5 text-base text-info-800"
        role="alert"
      >
        A simple info alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-neutral-50 px-6 py-5 text-base text-neutral-600"
        role="alert"
      >
        A simple light alert—check it out!
      </div>
      <div
        className="mb-4 rounded-lg bg-neutral-800 px-6 py-5 text-base text-neutral-50 dark:bg-neutral-900"
        role="alert"
      >
        A simple dark alert—check it out!
      </div> */}

      {/* <div classNameName="relative" data-te-dropdown-ref>
        <button
          classNameName="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="button"
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Dropdown button
          <span classNameName="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              classNameName="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          classNameName="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              classNameName="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Action
            </a>
          </li>
          <li>
            <a
              classNameName="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Another action
            </a>
          </li>
          <li>
            <a
              classNameName="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Something else here
            </a>
          </li>
        </ul>
      </div> */}
      {/* <ListGroup
        header={"Ma liste"}
        items={items}
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
    </div>
  );
}

export default App;
