export default function TimeTableComp({ days }) {
  const hasOrari = days.some((day) => {
    const { first_opening, first_closing, second_opening, second_closing } =
      day.pivot;
    return first_opening || first_closing || second_opening || second_closing;
  });

  if (!hasOrari) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold mt-6 mb-2">Orari di apertura</h3>
      <table className="table-auto border border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Giorno</th>
            <th className="border px-4 py-2">Mattina</th>
            <th className="border px-4 py-2">Pomeriggio</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => {
            const {
              first_opening,
              first_closing,
              second_opening,
              second_closing,
            } = day.pivot;

            const morning =
              first_opening && first_closing
                ? `${first_opening.slice(0, 5)} - ${first_closing.slice(0, 5)}`
                : "Chiuso";

            const afternoon =
              second_opening && second_closing
                ? `${second_opening.slice(0, 5)} - ${second_closing.slice(
                    0,
                    5
                  )}`
                : "Chiuso";

            return (
              <tr key={day.id}>
                <td className="border px-4 py-2">{day.name}</td>
                <td className="border px-4 py-2">{morning}</td>
                <td className="border px-4 py-2">{afternoon}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
