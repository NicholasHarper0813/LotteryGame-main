const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) 
  {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getTTFB(onPerfEntry);
      getFID(onPerfEntry);
      getCLS(onPerfEntry);
      getLCP(onPerfEntry);
      getFCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;
