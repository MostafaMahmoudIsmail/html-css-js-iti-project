let data = fetch("https://dummyjson.com/c/0792-0dc3-4a3d-b95e")
  .then((response) => response.json())
  .then((data) => console.log(data));

/**
 *  {
  "categories": [
    {
      "name": "Phones",
      "icon": "fa-solid fa-mobile-screen-button"
    },
    {
      "name": "Camera",
      "icon": "fa-solid fa-camera"
    },
    {
      "name": "HeadPhones",
      "icon": "fa-solid fa-headphones"
    },
    {
      "name": "Laptop",
      "icon": "fa-solid fa-laptop"
    },
    {
      "name": "TV",
      "icon": "fa-solid fa-tv"
    },
    {
      "name": "Gamepad",
      "icon": "fa-solid fa-gamepad"
    }
  ]
}
 */

// https://dummyjson.com/c/e285-1aca-444f-9e1f

/*
  // https://dummyjson.com/c/e28b-251e-4547-bb35 => 6 product

  // https://dummyjson.com/c/d505-cb62-41ec-9f77 => all
 {
  {
  "products": [
    {
      "id": 1,
      "title": "iPhone 15 Pro",
      "price": "$1199",
      "rating": 5,
      "image": "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      "category": "Phones"
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S23",
      "price": "$999",
      "rating": 4,
      "image": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
      "category": "Phones"
    },
    {
      "id": 3,
      "title": "Google Pixel 8",
      "price": "$899",
      "rating": 4,
      "image": "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
      "category": "Phones"
    },
    {
      "id": 4,
      "title": "OnePlus 11",
      "price": "$799",
      "rating": 4,
      "image": "https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg",
      "category": "Phones"
    },
    {
      "id": 5,
      "title": "Canon EOS R5",
      "price": "$3899",
      "rating": 5,
      "image": "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
      "category": "Camera"
    },
    {
      "id": 6,
      "title": "Nikon Z6 II",
      "price": "$1999",
      "rating": 4,
      "image": "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
      "category": "Camera"
    },
    {
      "id": 7,
      "title": "Sony Alpha A7 IV",
      "price": "$2499",
      "rating": 5,
      "image": "https://images.pexels.com/photos/1425720/pexels-photo-1425720.jpeg",
      "category": "Camera"
    },
    {
      "id": 8,
      "title": "Fujifilm X-T5",
      "price": "$1699",
      "rating": 4,
      "image": "https://images.pexels.com/photos/105254/pexels-photo-105254.jpeg",
      "category": "Camera"
    },
    {
      "id": 9,
      "title": "Sony WH-1000XM5",
      "price": "$399",
      "rating": 5,
      "image": "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      "category": "HeadPhones"
    },
    {
      "id": 10,
      "title": "Bose QC45",
      "price": "$329",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      "category": "HeadPhones"
    },
    {
      "id": 11,
      "title": "AirPods Max",
      "price": "$549",
      "rating": 5,
      "image": "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg",
      "category": "HeadPhones"
    },
    {
      "id": 12,
      "title": "Beats Studio Pro",
      "price": "$349",
      "rating": 4,
      "image": "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg",
      "category": "HeadPhones"
    },
    {
      "id": 13,
      "title": "MacBook Pro 16",
      "price": "$2499",
      "rating": 5,
      "image": "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "category": "Laptop"
    },
    {
      "id": 14,
      "title": "Dell XPS 13",
      "price": "$1399",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
      "category": "Laptop"
    },
    {
      "id": 15,
      "title": "HP Spectre x360",
      "price": "$1599",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
      "category": "Laptop"
    },
    {
      "id": 16,
      "title": "Asus ROG Zephyrus",
      "price": "$1799",
      "rating": 5,
      "image": "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      "category": "Laptop"
    },
    {
      "id": 17,
      "title": "Samsung Neo QLED 75”",
      "price": "$3499",
      "rating": 5,
      "image": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "category": "TV"
    },
    {
      "id": 18,
      "title": "LG OLED C3 65”",
      "price": "$2999",
      "rating": 5,
      "image": "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
      "category": "TV"
    },
    {
      "id": 19,
      "title": "Sony Bravia XR",
      "price": "$2799",
      "rating": 4,
      "image": "https://images.pexels.com/photos/208349/pexels-photo-208349.jpeg",
      "category": "TV"
    },
    {
      "id": 20,
      "title": "TCL QLED 55”",
      "price": "$999",
      "rating": 4,
      "image": "https://images.pexels.com/photos/159643/tv-television-screen-monitor-159643.jpeg",
      "category": "TV"
    },
    {
      "id": 21,
      "title": "PS5 DualSense",
      "price": "$69",
      "rating": 5,
      "image": "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
      "category": "Gamepad"
    },
    {
      "id": 22,
      "title": "Xbox Series X Controller",
      "price": "$65",
      "rating": 5,
      "image": "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
      "category": "Gamepad"
    },
    {
      "id": 23,
      "title": "Nintendo Switch Pro Controller",
      "price": "$70",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845435/pexels-photo-845435.jpeg",
      "category": "Gamepad"
    },
    {
      "id": 24,
      "title": "Razer Wolverine V2",
      "price": "$120",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845436/pexels-photo-845436.jpeg",
      "category": "Gamepad"
    },
    {
      "id": 25,
      "title": "Logitech F710",
      "price": "$55",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845437/pexels-photo-845437.jpeg",
      "category": "Gamepad"
    }
  ]
}
*/
