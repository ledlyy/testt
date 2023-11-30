//.css("background-color", "red");

$("button.btn")[0].addEventListener("click", function() {
    $("button.btn").attr("href", "https://www.google.com");
    console.log($(".btn").attr("href"))
});

$("body").on("keydown", function(event) {
    console.log(event.key);
    $("#src").text(event.key);
});
