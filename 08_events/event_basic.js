// Java script is a sequencially run language. it will execute line by line sequencially.

// Onclick is used to give clickable property to any tag or line or image to our web page.
// Syntax for onclick

// document.getElementById('id_name').onclick = function () {
//     alert("kjnjn")                                              // This will pop-Up when we click on that clicikable image or line so that this alert message will pop-up on browser. this is a good approach but currently it is not used as much.
// }

document.getElementById('id_name').addEventListner('click', function() {            // addEventListner is used to access all the events in our program it will handle all the events of our program. currently this is a best approach for our industry level now.
    alert("message")
})

// attachEvent      // THis is used a lot when we run our code on explorer.
// JQuery - On      // This is used when we use jQuery

// learing Topics for events:- type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientpositions like clientX, clientY, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode

document.getElementById('id_name').addEventListener('click', function(e) {
    console.log(e);
}, false)                   // bubbling mode works from bottom to top.

document.getElementById('id_name').addEventListener('click', function(e) {
    console.log(e);
    e.stopPropagation()
}, true)                   // Capturing mode works from top to bottom.

document.getElementById('id_name').addEventListner('click', function(e) {
    e.preventDefault();                 // it is uesd for when we do not want to redirect our clickeble link to that website.
    e.stopPropagation()                 // This is used to stopping propegation.
    console.log("google clicked");
})


document.querySelector('#images').addEventListner('click', function(e){
    console.log(e.target.tagName);               // This is used to select the image and the list tag so that if we would like to remove the image it is required to remove list tag also so that we use parentNode.
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode 
        // removeIT.remove()                    // remove() method is used to remove that image with the li tag so that the space of that image will taken by other image.
    }
                               
})