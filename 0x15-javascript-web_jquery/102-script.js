$(function () {
  $('INPUT#btn_translate').click(function () {
    const lang = $('INPUT#language_code').val();
    $.get('https://fourtonfish.com/hellosalut/?lang=' + lang, function (data, textStatus) {
      if (textStatus === 'success') {
        console.log(data);
        $('DIV#hello').append(data.hello);
      }
    });
  });
});
