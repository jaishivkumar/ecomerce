const products = [
  {
    id: "94",
    Name: "Vans Authentic White",
    Brand: "Vans",
    Gender: "Women",
    Price: 3500,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/LYVTMgG/18.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "95",
    Name: "Vans old Skool",
    Brand: "Vans",
    Gender: "Women",
    Price: 3300,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/S6brCw9/19.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "96",
    Name: "Vans old Skool",
    Brand: "Vans",
    Gender: "Women",
    Price: 3000,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/wR44RG3/20.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "97",
    Name: "Vans old Skool",
    Brand: "Vans",
    Gender: "Women",
    Price: 4500,
    Category: "Shoes",
    Available: false,
    items_Left: 0,
    Size: "41,42,43",
    image: "https://i.ibb.co/cFhWYqC/21.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "98",
    Name: "Vans old Skool",
    Brand: "Vans",
    Gender: "Women",
    Price: 3000,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/16vpF5t/22.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "99",
    Name: "Vans old Skool",
    Brand: "Vans",
    Gender: "Women",
    Price: 4800,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/H73FhYq/23.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "100",
    Name: "Vans old Skool Gold Coat",
    Brand: "Vans",
    Gender: "Women",
    Price: 3700,
    Category: "Shoes",
    Available: false,
    items_Left: 0,
    Size: "41,42,43",
    image: "https://i.ibb.co/Kx2RXW0/24.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "101",
    Name: "Vans old Skool Grey",
    Brand: "Vans",
    Gender: "Women",
    Price: 5000,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/c24Prmj/25.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "102",
    Name: "Vans old Skool Maroon Check",
    Brand: "Vans",
    Gender: "Women",
    Price: 6500,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/SJ0XBYt/26.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "103",
    Name: "Ace embroidered bee sneaker",
    Brand: "Gucci",
    Gender: "Women",
    Price: 7000,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/8KB7hNf/27.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
 
  {
    id: "106",
    Name: "Ace embroidered bee sneaker",
    Brand: "Gucci",
    Gender: "Women",
    Price: 4500,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/y8TDSnN/30.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "107",
    Name: "Ace embroidered bee sneaker",
    Brand: "Gucci",
    Gender: "Women",
    Price: 15000,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/NnKFNx4/31.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "108",
    Name: "Ace embroidered bee sneaker",
    Brand: "Gucci",
    Gender: "Women",
    Price: 2500,
    Category: "Shoes",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/42KDPwv/32.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  
  {
    id: "112",
    Name: "Princetown Embroidered Slippers",
    Brand: "Gucci",
    Gender: "Women",
    Price: 4200,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/LRFfB6H/2.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "113",
    Name: "Princetown Embroidered Slippers",
    Brand: "Gucci",
    Gender: "Women",
    Price: 4100,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/wMbysJ6/3.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
 
  {
    id: "122",
    Name: "Slippers",
    Brand: "",
    Gender: "Men",
    Price: 999,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/NYWS87f/6.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "123",
    Name: "Slippers",
    Brand: "",
    Gender: "Men",
    Price: 1000,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/z810V0z/7.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "124",
    Name: "Slippers",
    Brand: "",
    Gender: "Men",
    Price: 1200,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/TRVFPBF/8.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  },
  {
    id: "125",
    Name: "Slippers",
    Brand: "",
    Gender: "Men",
    Price: 999,
    Category: "Slippers",
    Available: true,
    items_Left: 2,
    Size: "41,42,43",
    image: "https://i.ibb.co/GJ6JKdd/10.png",
    Description: `lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat 
        lorem ipsum dolor esat lorem ipsum dolor esat lorem ipsum dolor esat `,
  }
];

module.exports= products;