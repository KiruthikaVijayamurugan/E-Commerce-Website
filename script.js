// ------------------------------------Nav bar------------------------------
const Device = window.matchMedia("(max-width: 991px)");

Device.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    window.addEventListener('scroll', function(event) {
        const navigationBar = document.getElementById('navbarNav');
        let navbrand= document.getElementById("navbrand");
        if (window.scrollY > 0) {
          navigationBar.classList.remove("navlist")
          navbrand.classList.remove('notactive');

        } else {
        navbrand.classList.remove('notactive');
        navigationBar.classList.remove("navlist")

        }
        });
}
  else {
    window.addEventListener('scroll', function(event) {
        const navigationBar = document.getElementById('navbarNav');
        let navbrand= document.getElementById("navbrand");
        let headtop = document.getElementById("headtop")
        if (window.scrollY > 0) {
          headtop.style.paddingTop = "5px"
          headtop.style.paddingBottom="5px"
          navigationBar.classList.add("navlist")
          navbrand.classList.add('notactive');

        } else {
        navbrand.classList.remove('notactive');
        navigationBar.classList.remove("navlist")

        }
        });
  }
}

handleDeviceChange(Device);

// -----------------------------------Watch description dispaly------------------------------------

let preveiwContainer = document.querySelector('#watch-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('#watch-display .watch').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


// ---------------------------------------page navigation------------------------------

function watchstore(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.remove("notactive")
  watchstore2.classList.remove("notactive")
  watchstore3.classList.remove("notactive")
  watchstore4.classList.remove("notactive")
  watchstore5.classList.remove("notactive")
  watchstore6.classList.remove("notactive")
  watchstore7.classList.remove("notactive")

  jewelstore1.classList.add("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.add("notactive")
  accessorystore2.classList.add("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.add("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.add("notactive")
  
  newsletter.classList.add("notactive")
}
function jewelstore(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")


  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.remove("notactive")
  jewelstore2.classList.remove("notactive")
  jewelstore3.classList.remove("notactive")
  jewelstore4.classList.remove("notactive")
  jewelstore5.classList.remove("notactive")
  jewelstore6.classList.remove("notactive")
  jewelstore7.classList.remove("notactive")

  accessorystore1.classList.add("notactive")
  accessorystore2.classList.add("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.add("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.add("notactive")

  newsletter.classList.add("notactive")
}
function accessorystore(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.add("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.remove("notactive")
  accessorystore2.classList.remove("notactive")
  accessorystore3.classList.remove("notactive")
  accessorystore4.classList.remove("notactive")
  accessorystore5.classList.remove("notactive")
  accessorystore6.classList.remove("notactive")
  accessorystore7.classList.remove("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.add("notactive")
}

function other1(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.remove("notactive")
  jewelstore2.classList.remove("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.remove("notactive")
  accessorystore2.classList.remove("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.add("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.add("notactive")
}

function other2(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")
  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.remove("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.remove("notactive")

  accessorystore1.classList.remove("notactive")
  accessorystore2.classList.add("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.remove("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.remove("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.add("notactive")

  newsletter.classList.add("notactive")
}

function other3(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.remove("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.remove("notactive")
  watchstore5.classList.remove("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.remove("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.remove("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.remove("notactive")
  accessorystore2.classList.remove("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.add("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.add("notactive")
}

function other4(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")

  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.remove("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.remove("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.add("notactive")
  accessorystore2.classList.add("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.remove("notactive")
  accessorystore7.classList.remove("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.add("notactive")
}

function other5(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")


  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.add("notactive")

  jewelstore1.classList.add("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.add("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.remove("notactive")
  accessorystore2.classList.remove("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.remove("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.add("notactive")
}

function other6(){
  let watchstore1 = document.getElementById("main")
  let watchstore2 = document.getElementById("story")
  let watchstore3 = document.getElementById("technology")
  let watchstore4 = document.getElementById("watch-display")
  let watchstore5 = document.getElementById("watch-preview")
  let watchstore6 = document.getElementById("our-watches")
  let watchstore7 = document.getElementById("watch-form")

  let jewelstore1 = document.getElementById("video-container")
  let jewelstore2 = document.getElementById("jewelry")
  let jewelstore3 = document.getElementById("form-jewel")
  let jewelstore4 = document.getElementById("frenchsec")
  let jewelstore5 = document.getElementById("team-display")
  let jewelstore6 = document.getElementById("jewelry-story")
  let jewelstore7 = document.getElementById("Jewelry-display")

  
  let accessorystore1 = document.getElementById("mainacc")
  let accessorystore2 = document.getElementById("storyaccessories")
  let accessorystore3 = document.getElementById("our-accessories")
  let accessorystore4 = document.getElementById("Jewelry-display1")
  let accessorystore5 = document.getElementById("Jewelry-display2")
  let accessorystore6 = document.getElementById("accoffer")
  let accessorystore7 = document.getElementById("form-acc")
  let accessorystore8 = document.getElementById("map-acc")

  let newsletter = document.getElementById("Newsletter")


  watchstore1.classList.add("notactive")
  watchstore2.classList.add("notactive")
  watchstore3.classList.add("notactive")
  watchstore4.classList.add("notactive")
  watchstore5.classList.add("notactive")
  watchstore6.classList.add("notactive")
  watchstore7.classList.remove("notactive")

  jewelstore1.classList.add("notactive")
  jewelstore2.classList.add("notactive")
  jewelstore3.classList.add("notactive")
  jewelstore4.classList.add("notactive")
  jewelstore5.classList.remove("notactive")
  jewelstore6.classList.add("notactive")
  jewelstore7.classList.add("notactive")

  accessorystore1.classList.add("notactive")
  accessorystore2.classList.add("notactive")
  accessorystore3.classList.add("notactive")
  accessorystore4.classList.add("notactive")
  accessorystore5.classList.add("notactive")
  accessorystore6.classList.remove("notactive")
  accessorystore7.classList.add("notactive")
  accessorystore8.classList.remove("notactive")

  newsletter.classList.remove("notactive")
 
} 

// ----------------------------------------form validation ---------------------------------
function validate(){
  let username = document.getElementById("username").value
  let mailid = document.getElementById("mailid").value
  let city = document.getElementById("city").value
  let country = document.getElementById("country").value
  let subject = document.getElementById("subject").value
  let yourmessage = document.getElementById("yourmessage").value

  if(username !=" " && mailid!=" " && city!=" " && country!=" " && subject !=" " && yourmessage!=" ")  {
    let alert = document.getElementById("alertmessage")
    alert.classList.remove("notactive")
}
}