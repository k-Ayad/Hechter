function showToast(message) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `<i class="fas text-white fa-circle-check me-1"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.add('show');
    }, 100);

    setTimeout(function() {
      toast.classList.remove('show');
      document.body.removeChild(toast);
    }, 4000);
  }