

const accorgion = document.getElementsByClassName('content');


for ( i =0; i <accorgion.length; i++){

    accorgion[i].addEventListener('click', function () {

        this.classList.toggle('active');

    })

}