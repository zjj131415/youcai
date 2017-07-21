function changeFile(dom) {
    var $dom = dom || {};
    $dom.change(function (e) {
        var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
        for (var i = 0, len = files.length; i < len; ++i) {
            var file = files[i];
            if (url) {
                src = url.createObjectURL(file);
            } else {
                src = e.target.result;
            }
        }
        $(this).next('img').attr('src', src);
    })
}