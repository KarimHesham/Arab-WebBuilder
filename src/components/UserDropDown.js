import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { logout } from "../services/firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserDropDown = () => {
  const activeUser = useSelector((state) => state.userData.user);

  const navigate = useNavigate();

  const SignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
          {activeUser.photoURL ? (
            <img
              src={`${activeUser.photoURL}`}
              alt=""
              referrerPolicy="no-referrer"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-600 text-white">
              {activeUser.username[0].toUpperCase()}
            </div>
          )}
          <ExpandMoreIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div className="text-gray-700, block px-4 py-2 text-sm">
                <p>Signed in as</p>
                <p className="font-semibold">{activeUser.username}</p>
              </div>
            </Menu.Item>
          </div>

          {/* <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Your profile
                                </a>
                            )}
                        </Menu.Item>
                    </div> */}

          <div className="py-1">
            <Menu.Item onClick={() => SignOut()}>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Sign out
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserDropDown;
