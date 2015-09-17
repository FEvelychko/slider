/**
 * Created by Maksym on 17.09.2015.
 */

    //debugger;

    var ul;
    var liItems;
    var imageNumber;
    var imageWidth;
    var currentImage;
    var prev, next;

    function slider(){
        currentImage = 0;
        ul = document.getElementById('image_slider');
        liItems = ul.children;
        imageNumber = liItems.length;
        imageWidth = liItems[0].children[0].clientWidth;
        ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
        prev = document.getElementById("prev");
        next = document.getElementById("next");
        next.addEventListener('click', getNext, false);
        prev.addEventListener('click', getPrevious, false);
    }

    function getNext(){
        currentImage += 1;
        ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
    }

    function getPrevious(){
        currentImage -= 1;
        ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
    }

    window.onload = slider();