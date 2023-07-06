import { XMarkIcon } from "@heroicons/react/24/outline";

const Alert = () => {
  return (
    <div
      id="dropdown-cta"
      className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
          Beta
        </span>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          data-dismiss-target="#dropdown-cta"
          aria-label="Close"
        >
          <XMarkIcon className="w-4 h-4 opacity-90" strokeWidth={3} />
        </button>
      </div>
      <p className="text-sm text-blue-800 dark:text-blue-400">
        The App is in beta mode, feel free to suggest us for new features.
      </p>
    </div>
  );
};

export default Alert;
