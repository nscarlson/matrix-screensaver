window.addEventListener("DOMContentLoaded", () => {
    let hideCursorTimeout;
  
    function hideCursor() {
      document.body.style.cursor = "none";
    }
  
    function showCursor() {
      document.body.style.cursor = "default";
      clearTimeout(hideCursorTimeout);
      hideCursorTimeout = setTimeout(hideCursor, 3000); // Hide after 3 seconds
    }
  
    document.addEventListener("mousemove", showCursor);
    hideCursorTimeout = setTimeout(hideCursor, 3000); // Start the timer on load
  });
