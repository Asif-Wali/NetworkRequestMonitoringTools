import React, { useState } from 'react';
import { NetworkProvider } from './context/NetworkContext';
import FilterBar from './components/FilterBar';
import NetworkRequestList from './components/NetworkRequestList';
import RequestDetailsPanel from './components/RequestDetailsPanel';
import UrlInput from './components/UrlInput';

const App = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <NetworkProvider>
      <div className="min-h-screen flex flex-col">
        <UrlInput />
        <FilterBar />
        <div className="flex flex-1">
          <NetworkRequestList setSelectedRequest={setSelectedRequest} />
          <RequestDetailsPanel request={selectedRequest} />
        </div>
      </div>
    </NetworkProvider>
  );
};

export default App;
