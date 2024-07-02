import React from 'react';

const RequestDetailsPanel = ({ request }) => {
  if (!request) return null;

  return (
    <div className="p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Request Details</h2>
      <div className="mb-2">
        <strong>URL:</strong> {request.url}
      </div>
      <div className="mb-2">
        <strong>Method:</strong> {request.method}
      </div>
      <div className="mb-2">
        <strong>Type:</strong> {request.type}
      </div>
      <div className="mb-2">
        <strong>Status:</strong> {request.status}
      </div>
      <div className="mb-2">
        <strong>Response:</strong> <pre>{request.response}</pre>
      </div>
    </div>
  );
};

export default RequestDetailsPanel;
