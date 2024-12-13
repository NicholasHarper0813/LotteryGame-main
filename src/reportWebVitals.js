const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) 
  {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getTTFB(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
      getFCP(onPerfEntry);
      getCLS(onPerfEntry);
    });
  }
};

export default reportWebVitals;
