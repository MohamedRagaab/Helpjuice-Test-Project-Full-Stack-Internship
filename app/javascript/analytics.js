document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndDisplay();
  
    setInterval(fetchDataAndDisplay, 3000);
  });
  
  function fetchDataAndDisplay() {
    fetch('http://0.0.0.0:10000/api/v1/list_queries')
      .then(response => response.json())
      .then(data => displayAnalytics(data.data))
      .catch(error => console.error('Error fetching analytics:', error));
  }
  
  function displayAnalytics(queries) {
    const analyticsResults = document.getElementById('analytics-results');
    
    const groupedQueries = groupQueriesByIpAddress(queries);
  
    analyticsResults.innerHTML = '';
  
    Object.keys(groupedQueries).forEach(ipAddress => {
      const queriesList = groupedQueries[ipAddress].map(query => `<li>${query}</li>`).join('');
      const ipAddressSection = `<div><h2>IP Address: ${ipAddress}</h2><ul>${queriesList}</ul></div>`;
      analyticsResults.innerHTML += ipAddressSection;
    });
  }
  
  function groupQueriesByIpAddress(queries) {
    return queries.reduce((result, query) => {
      const ipAddress = query.ip_address;
      result[ipAddress] = result[ipAddress] || [];
      result[ipAddress].push(query.query);
      return result;
    }, {});
  }
  
  function refreshPage() {
    location.reload(true);
  }