
const TableSkeleton = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md animate-pulse">
      <h2 className="text-xl font-semibold mb-4 bg-gray-300 h-6 w-32 rounded"></h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              {["ID", "ORDER TIME", "METHOD", "STATUS", "TOTAL", "ACTION"].map(
                (header, index) => (
                  <th key={index} className="p-3 text-left">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index} className="border-t">
                {Array.from({ length: 6 }).map((_, colIndex) => (
                  <td key={colIndex} className="p-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
