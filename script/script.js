function convertUrl() {
    const urlInput = document.getElementById('tiktokUrl').value.trim();
    const output = document.getElementById('convertedUrl');
  
    if (!urlInput) {
      output.innerText = 'Please enter a valid URL.';
      return;
    }
  
    try {
      const parsedUrl = new URL(urlInput);
      // Construct the URL without any query parameters
      const cleanUrl = parsedUrl.origin + parsedUrl.pathname;
      output.innerText = cleanUrl;
    } catch (error) {
      output.innerText = 'Invalid URL format.';
    }
  }
  