$(function() {
  var henkilot = [
    {
      etunimi: "Aku",
      sukunimi: "Ankka",
      sahkoposti: "aku.ankka@ankkalinna.com",
      muistiinpanoja: "Kattivaaran margariinitehtaalla töissä.",
      lisatietoja: "Ei halua lisätietoja."
    }
  ];

  function paivitaTaulukko() {
    var str='';
    for(var i=0;i<henkilot.length;i++) {
      str += '<tr>';
      str += '<td>' + henkilot[i].etunimi + '</td>';
      str += '<td>' + henkilot[i].sukunimi + '</td>';
      str += '<td>' + henkilot[i].sahkoposti + '</td>';
      str += '<td>' + henkilot[i].muistiinpanoja + '</td>';
      str += '<td>' + henkilot[i].lisatietoja + '</td>';
      str += '</tr>';
    }
    $('tbody').html(str);
  }

  function tyhjenna() {
    $('#etunimi').val('');
    $('#sukunimi').val('');
    $('#sahkoposti').val('');
    $('#muistiinpanoja').val('');
  }

  $('form#henkilotiedot').submit(function(e) {
    var henkilo = {};
    henkilo.etunimi = $('#etunimi').val();
    henkilo.sukunimi = $('#sukunimi').val();
    henkilo.sahkoposti = $('#sahkoposti').val();
    henkilo.muistiinpanoja = $('#muistiinpanoja').val();
    henkilo.lisatietoja = $('#lisatietoja').val();
    henkilot.push(henkilo);
    paivitaTaulukko();
    tyhjenna();
    e.preventDefault();
  });

  $('button#tyhjenna').click(function(e) {
    tyhjenna();
  });

  paivitaTaulukko();
});
