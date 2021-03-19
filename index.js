

function viewImg(boxId, btnId) {
    var imgToShow = document.getElementById(boxId);
    var btnToHide = document.getElementById(btnId);

    imgToShow.classList.add("visible");
    btnToHide.classList.add('hidden');
 }

 function hideImg(boxId, btnId) {
     var imgToHide = document.getElementById(boxId);
     var btnToShow = document.getElementById(btnId);

     imgToHide.classList.toggle('visible');
     btnToShow.classList.toggle('hidden');
 }