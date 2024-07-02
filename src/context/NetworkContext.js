import React, { createContext, useState, useEffect } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filters, setFilters] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        const request = {
          url,
          method: 'GET',
          type: 'fetch',
          status: response.status,
          response: await response.clone().text(),
        };
        setRequests([request]); // reset to current request
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return (
    <NetworkContext.Provider value={{ requests, filters, setFilters, setUrl }}>
      {children}
    </NetworkContext.Provider>
  );
};
