    /**
     * Created by Maksym on 11.09.2015.
     */


    //debugger;

    var ul;
    var liItems;
    var imageNumber;
    var imageWidth;
    var currentImage;
    var prev, next;
    var x,y;

    function slider(){

        currentImage = 0;
        ul = document.getElementById('image_slider');
        liItems = ul.children;
        imageNumber = liItems.length;
        imageWidth = liItems[0].children[0].clientWidth;
        ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
        prev = document.getElementById("prev");
        next = document.getElementById("next");
        next.addEventListener('click', setNextDuration, false);
        prev.addEventListener('click', setPrevDuration, false);

    }

    function setNextDuration(){
        x = setInterval(getNext, 300);
    }

    function setPrevDuration(){
        y = setInterval(getPrevious, 300);
    }

    function showCurrentImage(){
        console.log(currentImage);
    }

    function borderBehave(){
        if(currentImage === 5){
            currentImage = 0;
            ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
        }
        else if(currentImage === -1){
            currentImage = 4;
            ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
        }
    }

    function getNext(){
        currentImage += 1;
        ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
        showCurrentImage();
        clearInterval(x);
        borderBehave();
    }


    function getPrevious(){
        currentImage -= 1;
        ul.style.left = -parseInt(imageWidth * currentImage) + 'px';
        showCurrentImage();
        clearInterval(y);
        borderBehave();
    }

    window.onload = slider();
