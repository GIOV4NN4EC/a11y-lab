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

  var calendarBody = document.getElementById('calendar-body');
  if (calendarBody) {
    var monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    var monthLabel = document.getElementById('calendar-month');
    var caption = document.getElementById('calendar-caption');
    var prevBtn = document.getElementById('calendar-prev');
    var nextBtn = document.getElementById('calendar-next');
    var viewDate = new Date();

    function mondayFirstOffset(year, month) {
      return (new Date(year, month, 1).getDay() + 6) % 7;
    }

    function daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    }

    function renderCalendar() {
      var year = viewDate.getFullYear();
      var month = viewDate.getMonth();
      var label = monthNames[month] + ' ' + year;

      monthLabel.textContent = label;
      caption.textContent = monthNames[month] + ' de ' + year;

      var today = new Date();
      var isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
      var offset = mondayFirstOffset(year, month);
      var totalDays = daysInMonth(year, month);
      var day = 1;
      var row = document.createElement('tr');

      calendarBody.innerHTML = '';

      for (var i = 0; i < offset; i++) {
        row.appendChild(document.createElement('td'));
      }

      while (day <= totalDays) {
        if (row.children.length === 7) {
          calendarBody.appendChild(row);
          row = document.createElement('tr');
        }

        var cell = document.createElement('td');
        cell.textContent = day;

        if (isCurrentMonth && day === today.getDate()) {
          cell.className = 'calendar-today';
          cell.setAttribute('aria-current', 'date');
        }

        row.appendChild(cell);
        day++;
      }

      while (row.children.length > 0 && row.children.length < 7) {
        row.appendChild(document.createElement('td'));
      }

      if (row.children.length > 0) {
        calendarBody.appendChild(row);
      }
    }

    prevBtn.addEventListener('click', function () {
      viewDate.setMonth(viewDate.getMonth() - 1);
      renderCalendar();
    });

    nextBtn.addEventListener('click', function () {
      viewDate.setMonth(viewDate.getMonth() + 1);
      renderCalendar();
    });

    renderCalendar();
  }
})();
