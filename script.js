let data = fetch("https://dummyjson.com/c/3a38-f717-4524-9bf6")
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
  // https://dummyjson.com/c/381e-fc22-437e-9b07 => 6 product

  // https://dummyjson.com/c/0792-0dc3-4a3d-b95e => all
 *"products": [
    {
      "id": 1,
      "title": "iPhone 15 Pro",
      "price": 1199,
      "category": "Phones",
      "rating": 5,
      "image": "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S23",
      "price": 999,
      "category": "Phones",
      "rating": 4,
      "image": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
    },
    {
      "id": 3,
      "title": "Google Pixel 8",
      "price": 899,
      "category": "Phones",
      "rating": 4,
      "image": "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg"
    },
    {
      "id": 4,
      "title": "OnePlus 11",
      "price": 799,
      "category": "Phones",
      "rating": 4,
      "image": "https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg"
    },

    {
      "id": 5,
      "title": "Canon EOS R5",
      "price": 3899,
      "category": "Camera",
      "rating": 5,
      "image": "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },
    {
      "id": 6,
      "title": "Nikon Z6 II",
      "price": 1999,
      "category": "Camera",
      "rating": 4,
      "image": "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg"
    },
    {
      "id": 7,
      "title": "Sony Alpha A7 IV",
      "price": 2499,
      "category": "Camera",
      "rating": 5,
      "image": "https://images.pexels.com/photos/1425720/pexels-photo-1425720.jpeg"
    },
    {
      "id": 8,
      "title": "Fujifilm X-T5",
      "price": 1699,
      "category": "Camera",
      "rating": 4,
      "image": "https://images.pexels.com/photos/105254/pexels-photo-105254.jpeg"
    },

    {
      "id": 9,
      "title": "Sony WH-1000XM5",
      "price": 399,
      "category": "HeadPhones",
      "rating": 5,
      "image": "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
    },
    {
      "id": 10,
      "title": "Bose QC45",
      "price": 329,
      "category": "HeadPhones",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
    },
    {
      "id": 11,
      "title": "AirPods Max",
      "price": 549,
      "category": "HeadPhones",
      "rating": 5,
      "image": "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg"
    },
    {
      "id": 12,
      "title": "Beats Studio Pro",
      "price": 349,
      "category": "HeadPhones",
      "rating": 4,
      "image": "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg"
    },

    {
      "id": 13,
      "title": "MacBook Pro 16",
      "price": 2499,
      "category": "Laptop",
      "rating": 5,
      "image": "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
      "id": 14,
      "title": "Dell XPS 13",
      "price": 1399,
      "category": "Laptop",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
    },
    {
      "id": 15,
      "title": "HP Spectre x360",
      "price": 1599,
      "category": "Laptop",
      "rating": 4,
      "image": "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
    },
    {
      "id": 16,
      "title": "Asus ROG Zephyrus",
      "price": 1799,
      "category": "Laptop",
      "rating": 5,
      "image": "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },

    {
      "id": 17,
      "title": "Samsung Neo QLED 75”",
      "price": 3499,
      "category": "TV",
      "rating": 5,
      "image": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    },
    {
      "id": 18,
      "title": "LG OLED C3 65”",
      "price": 2999,
      "category": "TV",
      "rating": 5,
      "image": "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg"
    },
    {
      "id": 19,
      "title": "Sony Bravia XR",
      "price": 2799,
      "category": "TV",
      "rating": 4,
      "image": "https://images.pexels.com/photos/208349/pexels-photo-208349.jpeg"
    },
    {
      "id": 20,
      "title": "TCL QLED 55”",
      "price": 999,
      "category": "TV",
      "rating": 4,
      "image": "https://images.pexels.com/photos/159643/tv-television-screen-monitor-159643.jpeg"
    },

    {
      "id": 21,
      "title": "PS5 DualSense",
      "price": 69,
      "category": "Gamepad",
      "rating": 5,
      "image": "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
    },
    {
      "id": 22,
      "title": "Xbox Series X Controller",
      "price": 65,
      "category": "Gamepad",
      "rating": 5,
      "image": "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg"
    },
    {
      "id": 23,
      "title": "Nintendo Switch Pro Controller",
      "price": 70,
      "category": "Gamepad",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845435/pexels-photo-845435.jpeg"
    },
    {
      "id": 24,
      "title": "Razer Wolverine V2",
      "price": 120,
      "category": "Gamepad",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845436/pexels-photo-845436.jpeg"
    },
    {
      "id": 25,
      "title": "Logitech F710",
      "price": 55,
      "category": "Gamepad",
      "rating": 4,
      "image": "https://images.pexels.com/photos/845437/pexels-photo-845437.jpeg"
    }
  ]
} 
*/
