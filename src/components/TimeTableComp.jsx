export default function TimeTableComp({ days }) {
  const hasOrari = days.some((day) => {
    const { first_opening, first_closing, second_opening, second_closing } =
      day.pivot;
    return first_opening || first_closing || second_opening || second_closing;
  });

  if (!hasOrari) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Orari di apertura</h3>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giorno
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mattina
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pomeriggio
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {days.map((day) => {
              const {
                first_opening,
                first_closing,
                second_opening,
                second_closing,
              } = day.pivot;

              const morning =
                first_opening && first_closing ? (
                  `${first_opening.slice(0, 5)} - ${first_closing.slice(0, 5)}`
                ) : (
                  <span className="text-red-800 font-bold">Chiuso</span>
                );

              const afternoon =
                second_opening && second_closing ? (
                  `${second_opening.slice(0, 5)} - ${second_closing.slice(
                    0,
                    5
                  )}`
                ) : (
                  <span className="text-red-800 font-bold">Chiuso</span>
                );

              return (
                <tr key={day.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {day.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {morning}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {afternoon}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
