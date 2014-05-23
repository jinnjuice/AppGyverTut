function openLayer(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "/views" + location });

  // ...is pushed to the navigation stack, opening on top of the current WebView.
  steroids.layers.push({ view: webView });
}

function openModal(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "/views" + location });

  // ...opens as a modal screen on top of the current WebView.
  steroids.modal.push({ view: webView });
}

function hideModal() {
  // Hide a currently open modal
  steroids.modal.hide();
}
