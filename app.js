$(function () {

    console.log("Let's get ready to party with jQuery!");

    $('article img').addClass('image-center');

    $('p').last().remove()

    function getRandomInt() {
        return Math.floor(Math.random() * 101);
    }
    $('#title').css('font-size', getRandomInt());
    // does getRandomInt need to have () above?
    // it seems ok not to add px for value above?

    $('ol').append('<li>Here\'s another item on the list</li>');

    $('aside ol').remove();
    // code uses .empty() instead?

    $('aside').append('<p>Sorry about the list\'s existence!</p>');
    // .append($("<p>", {text: "Sorry about that list :("}));
    // *solution above: why does append have $ after parens?

    $(".form-control").on('keyup blur change', function () {
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color",
            "rgb(" + red + "," + green + "," + blue + ")");
    });
    // what is keyup blur change?

    $("img").on('click', function (e) {
        $(e.target).remove();
    });

});

// jQuery doesn't play well with arrow functions