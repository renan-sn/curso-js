$(function () {
  $('button#bot').on('click', function () {
    
    let $value = $('#pesq').val().toLowerCase();
    let $name = $('tr').nextAll().text();

    $('tr').nextAll().filter('tr:selected').css({
      background: 'white'
    });
  });
});