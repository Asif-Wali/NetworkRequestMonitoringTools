import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const NetworkRequestList = ({ setSelectedRequest }) => {
  const { requests, filters } = useContext(NetworkContext);

  const filteredRequests = requests.filter((req) =>
    filters.length > 0 ? filters.includes(req.type) : true
  );

  return (
    <div className="p-4 bg-gray-100 flex-1 overflow-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req, index) => (
            <tr
              key={index}
              onClick={() => setSelectedRequest(req)}
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="border px-4 py-2">{req.method}</td>
              <td className="border px-4 py-2">{req.url}</td>
              <td className="border px-4 py-2">{req.type.toUpperCase()}</td>
              <td className="border px-4 py-2">{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkRequestList;
