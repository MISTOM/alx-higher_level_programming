const header = $('header');
$('DIV#toggle_header').click(function () {
  header.toggleClass(function () {
    if ($(this).is('.green')) {
      $(this).removeClass('green');
      return 'red';
    } else {
      $(this).removeClass('red');
      return 'green';
    }
  });
});
