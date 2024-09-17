// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function showDescription(serviceBox) {
    // Get the description inside the clicked service box
    const description = serviceBox.querySelector('.description');
    
    // Toggle the hidden class
    if (description.classList.contains('hidden')) {
      description.classList.remove('hidden');
    } else {
      description.classList.add('hidden');
    }
  }



function toggleAccordion(serviceBox) {
    const description = serviceBox.querySelector('.description');
    if (description.classList.contains('show')) {
      description.classList.remove('show');
      description.classList.add('hidden');
    } else {
      description.classList.remove('hidden');
      description.classList.add('show');
    }
  }

function fadeInDescription(serviceBox) {
    const description = serviceBox.querySelector('.description');
    if (description.classList.contains('show')) {
      description.classList.remove('show');
      description.classList.add('hidden');
    } else {
      description.classList.remove('hidden');
      description.classList.add('show');
    }
  }

  function showModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    $('#serviceModal').modal('show');
  }