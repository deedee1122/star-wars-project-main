import { gradientBlueTextStyles } from "../Text/GradientText";


const TableComponent = ({ data }: { data: Record<string, any> }) => {
  const keys = Object.keys(data);
  const values = keys.map((key) => data[key]);

  return (
    <div className="relative overflow-x-auto">
      <h1
        className={`${gradientBlueTextStyles} text-3xl text-center mb-4 font-semibold`}
      >
        Details of {data?.name}
      </h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Key
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key, index) => (
            <tr
              key={key}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border-b dark:bg-gray-800 dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key}
              </th>
              <td className="px-6 py-4">{values[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
