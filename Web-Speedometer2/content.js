chrome.storage.local.get('speed', ({ speed }) => {
    let widget = document.getElementById('speedometer-widget');
    if (!widget) {
      widget = document.createElement('div');
      widget.id = 'speedometer-widget';
      widget.style.position = 'fixed';
      widget.style.top = '10px';
      widget.style.right = '10px';
      widget.style.background = 'rgba(0, 0, 0, 0.7)';
      widget.style.color = 'white';
      widget.style.padding = '5px';
      widget.style.borderRadius = '5px';
      widget.style.zIndex = '9999';
      widget.style.cursor = 'move'; // Allows dragging
      document.body.appendChild(widget);
    }
    widget.textContent = `Speed: ${speed || '0.00'} Mbps`;
  });
  