(function () {
  var searchForm = document.getElementById('header-search');
  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

  var filterForm = document.getElementById('editais-filter');
  if (filterForm) {
    filterForm.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

  document.querySelectorAll('.course-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.course-tab').forEach(function (t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });
})();
