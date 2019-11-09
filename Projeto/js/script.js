$("#searchInGoogle").submit(function () {
    var searching = "https://google.com/search?q=" + this[0].value;
    window.location.href = searching;
    return false;
});