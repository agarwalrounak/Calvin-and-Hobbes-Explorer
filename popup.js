document.addEventListener('DOMContentLoaded', function () {

    fetch('https://api.codetabs.com/v1/proxy?quest=https://www.gocomics.com/random/calvinandhobbes').then((response) => response.text()).then((text) => {
        // console.log(text);

        const source_html = document.createElement('html');
        source_html.innerHTML = text;
        // console.log(source_html);

        const comic_link = source_html.querySelector("link[rel='canonical']").href;
        // console.log(comic_link);

        const img_class = source_html.getElementsByClassName('item-comic-image')[0];
        // console.log(img_class);
        const img_link = img_class.getElementsByTagName('img')[0].src;
        // console.log(img_link);

        const a = document.createElement('a');
        a.href = comic_link;
        a.target = "_blank";
        a.innerHTML = comic_link;

        const img = document.createElement('img');
        img.src = img_link;

        const comic = document.getElementById("comic");
        comic.appendChild(a);
        comic.appendChild(img);
    });

});
