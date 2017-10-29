$(function () {
    var otsikot = ['Kissat', 'Matkailu', 'Tietokoneet'];

    for (var i = 0; i < 3; i++) {
        $('nav.top').append('<button id="b' + (i + 1) + '">' +
                otsikot[i] +
                '</button>');
    }
    $('nav.top').append('<div class="clearfix"></div>');

    $('nav.top button').click(function (e) {
        var page = e.target.id[1];
        location.hash = '#' + page;
        insertArticleContent(page);
    });

    if (location.hash === '#2') {
        insertArticleContent(2);
    } else if (location.hash === '#3') {
        insertArticleContent(3);
    } else {
        location.hash = '#1';
        insertArticleContent(1);
    }

    function insertArticleContent(page) {
        document.title = otsikot[page - 1];
        $('header h1').text(otsikot[page - 1]);
        $('article').load('partials/sivu' + page + '.html');
    }
});