document.addEventListener('DOMContentLoaded', function () {
  // Applique la largeur depuis data-progress à toutes les barres .progress-fill
  document.querySelectorAll('.progress-fill').forEach(function (el) {
    var data = el.getAttribute('data-progress');
    var percent = 0;
    if (data !== null) {
      percent = parseInt(data, 10) || 0;
    } else {
      // fallback: cherche un te
      var parent = el.closest('.language-item');
      if (parent) {
        var pctEl = parent.querySelector('.language-percentage');
        if (pctEl) {
          percent = parseInt(pctEl.textContent.replace('%', '').trim(), 10) || 0;
        }
      }
    }
    el.style.width = percent + '%';
    el.setAttribute('aria-valuenow', percent);
  });
   document.querySelectorAll('.progress-fill').forEach(function (el) {
    el.style.transition = el.style.transition || 'width 600ms ease';
  });
});