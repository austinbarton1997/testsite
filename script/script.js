function convertUrl() {
  const urlInput = document.getElementById('tiktokUrl').value.trim();
  const output = document.getElementById('convertedUrl');
  const copyButton = document.getElementById('copyButton');

  if (!urlInput) {
    output.innerText = 'Please enter a valid URL.';
    copyButton.style.display = 'none'; // Hide copy button if invalid
    return;
  }

  try {
    const parsedUrl = new URL(urlInput);
    // Construct the URL without any query parameters
    const cleanUrl = parsedUrl.origin + parsedUrl.pathname;
    output.innerText = cleanUrl;
    copyButton.style.display = 'inline-block'; // Show copy button
  } catch (error) {
    output.innerText = 'Invalid URL format.';
    copyButton.style.display = 'none'; // Hide copy button if invalid
  }
}

function copyUrl() {
  const textToCopy = document.getElementById('convertedUrl').innerText;
  if (!textToCopy || textToCopy.includes('Please enter') || textToCopy.includes('Invalid URL')) {
    return;
  }

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert('Copied to clipboard!');
    })
    .catch(err => {
      alert('Failed to copy!');
      console.error(err);
    });
}
//