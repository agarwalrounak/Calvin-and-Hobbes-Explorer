document.addEventListener('DOMContentLoaded', function () {

    fetch('https://api.codetabs.com/v1/proxy?quest=https://www.gocomics.com/random/calvinandhobbes').then((response) => response.text()).then((text) => {
        // console.log(text);
        var el = document.createElement( 'html' );
        el.innerHTML = text;
        console.log(el);
        var link=el.querySelector("link[rel='canonical']").href;
        console.log(link);
        var list = el.getElementsByClassName( 'item-comic-image' )[0];
        console.log(list);
        var fin = list.getElementsByTagName( 'img' )[0].src;
        console.log(fin);
        var a=document.createElement('a');
        a.href=link;
        a.innerHTML=link;
        var i = document.createElement( 'img' );
        i.src = fin;
        var src = document.getElementById("header");
        src.appendChild(i);
        src.appendChild(a);
    });

});
