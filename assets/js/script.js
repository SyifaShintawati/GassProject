//------------------active link-------------------------------
let menuHeader = document.getElementById("menuHeader");
let menu = menuHeader.getElementsByClassName("nav-link");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
//------------------end active link--------------------------


//------------------to do------------------------------------
let fiturList = [
  { id: '1', name: 'Web Hosting', price: 1000000 },
  { id: '2', name: 'Wifi', price: 2000000 },
  { id: '3', name: 'CCTV', price: 3000000 },
  { id: '4', name: 'Pemasangan Jaringan', price: 4000000 },
  { id: '5', name: 'Design Web', price: 5000000 },
];

let checklist = document.querySelectorAll('.checkbox'); // get dari checkbox yg di centang
let dataList = document.getElementById('dataList'); //tampil data di id datalist 
let orderBtn = document.getElementById('orderBtn');


checklist.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    dataList.innerHTML = '';

    checklist.forEach(function (checkbox) {
      if (checkbox.checked) {
        // find & display  
        let fitur = fiturList.find(function (item) {
          return item.id === checkbox.id;
        });

        if (fitur) {
          let listFitur = document.getElementById('dataList');
          let newList = document.createElement('div');
          newList.setAttribute("style", "display:inline;");
          newList.textContent = `${fitur.name}, `;
          listFitur.appendChild(newList);
        }
      }
    });

  });
});

// function save
orderBtn.addEventListener('click', function () {
  let orderFitur = [];
  checklist.forEach(function (checkbox) {
    if (checkbox.checked) {
      // Menampilkan data berdasarkan ID checkbox yang dipilih
      let selectedData = fiturList.find(function (item) {
        return item.id === checkbox.id;
      });
      if (selectedData) {
        orderFitur.push(selectedData);
      }
    }
  });
  localStorage.setItem('orderFitur', JSON.stringify(orderFitur)); //save to local storage
});

//function close
closeBtn.addEventListener('click', function () {
    checklist.forEach(function (checkbox) {
      if (checkbox.checked) {
          checkbox.checked = false; //uncheck
          dataList.innerHTML = '-';  //remove list
      }
    });
  // remove from local storage
  localStorage.removeItem('orderFitur');
});
//------------------end to do------------------------------------


////------------------portofolio---------------------------------
let portofolioCard = document.querySelector(
  "#portofolio-slider"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  let carousel = new bootstrap.Carousel(portofolioCard, {
    interval: false,
  });
  let portofolioWidth = $(".carousel-inner")[0].scrollWidth;
  let cardWidth = $(".carousel-item").width();
  let scrollPosition = 0;
  $("#portofolio-slider .carousel-control-next").on("click", function () {
    if (scrollPosition < portofolioWidth - cardWidth * 4) {
      scrollPosition += (cardWidth + 50);
      $("#portofolio-slider .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#portofolio-slider .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= (cardWidth + 50);
      $("#portofolio-slider .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(portofolioCard).addClass("slide");
}
//------------------end portofolio---------------------------------