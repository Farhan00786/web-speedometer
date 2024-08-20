chrome.storage.local.get('speed', ({ speed }) => {
    document.getElementById('speed').textContent = `Current Speed: ${speed || '0.00'} Mbps`;
  });
  