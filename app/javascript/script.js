let debounceTimeout;

function isolationEffect() {
  const searchBox = document.getElementById('search-box');
  const backgroundOverlay = document.getElementById('background-overlay');

  searchBox.classList.toggle('active');
  backgroundOverlay.style.display = backgroundOverlay.style.display === 'block' ? 'none' : 'block';
}

function onSearchInput() {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value;

    callApi(query);
  }, 500);
}

function onSearchFocus() {
  isolationEffect();
  const searchBox = document.getElementById('search-box');
  searchBox.classList.add('active');
}

function callApi(query) {
  fetch(`https://realtime-search-box-cyl6.onrender.com/api/v1/articles/search?query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error calling API:', error);
    });
}
