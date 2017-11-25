$(function() {
  function tyhjenna() {
    $('#etunimi').val('');
    $('#sukunimi').val('');
    $('#sahkoposti').val('');
    $('#muistiinpanoja').val('');
  }

  $('form#henkilotiedot').submit(function(e) {
    e.preventDefault();
  });

  $('button#tyhjenna').click(function(e) {
    tyhjenna();
  });
});
