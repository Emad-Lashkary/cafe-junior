const menuData = [
  // Hot Coffees
  {
    id: 1,
    name: "Espresso",
    regularPrice: 3.0,
    discountPrice: 2.7,
    description: "A strong and bold shot of espresso.",
    photo: "/images/espresso.jpg",
    customerRate: 4.8,
    category: "Hot Coffees",
  },
  {
    id: 2,
    name: "Americano",
    regularPrice: 3.5,
    discountPrice: 3.2,
    description: "Espresso diluted with hot water.",
    photo: "/images/americano.jpg",
    customerRate: 4.7,
    category: "Hot Coffees",
  },
  {
    id: 3,
    name: "Cappuccino",
    regularPrice: 4.5,
    discountPrice: 4.0,
    description: "Espresso topped with steamed milk and foam.",
    photo: "/images/cappuccino.jpg",
    customerRate: 4.9,
    category: "Hot Coffees",
  },
  {
    id: 4,
    name: "Latte",
    regularPrice: 4.8,
    discountPrice: 4.2,
    description: "Creamy espresso with steamed milk.",
    photo: "/images/latte.jpg",
    customerRate: 4.8,
    category: "Hot Coffees",
  },
  {
    id: 5,
    name: "Flat White",
    regularPrice: 4.0,
    discountPrice: 3.6,
    description: "Rich espresso with velvety steamed milk.",
    photo: "/images/flat_white.jpg",
    customerRate: 4.6,
    category: "Hot Coffees",
  },

  // Iced Coffees
  {
    id: 6,
    name: "Iced Americano",
    regularPrice: 3.5,
    discountPrice: 3.2,
    description: "Cold and refreshing espresso with water over ice.",
    photo: "/images/iced_americano.jpg",
    customerRate: 4.5,
    category: "Iced Coffees",
  },
  {
    id: 7,
    name: "Iced Latte",
    regularPrice: 4.5,
    discountPrice: 4.0,
    description: "Espresso with chilled milk and ice.",
    photo: "/images/iced_latte.jpg",
    customerRate: 4.6,
    category: "Iced Coffees",
  },
  {
    id: 8,
    name: "Cold Brew",
    regularPrice: 5.0,
    discountPrice: 4.5,
    description: "Smooth cold coffee brewed over time.",
    photo: "/images/cold_brew.jpg",
    customerRate: 4.9,
    category: "Iced Coffees",
  },
  {
    id: 9,
    name: "Iced Cappuccino",
    regularPrice: 4.8,
    discountPrice: 4.2,
    description: "Espresso with cold milk and foam over ice.",
    photo: "/images/iced_cappuccino.jpg",
    customerRate: 4.7,
    category: "Iced Coffees",
  },
  {
    id: 10,
    name: "Frappuccino",
    regularPrice: 5.5,
    discountPrice: 5.0,
    description: "Blended iced coffee topped with whipped cream.",
    photo: "/images/frappuccino.jpg",
    customerRate: 4.8,
    category: "Iced Coffees",
  },

  // Flavored Coffees
  {
    id: 11,
    name: "Vanilla Latte",
    regularPrice: 5.0,
    discountPrice: 4.5,
    description: "Espresso with steamed milk and vanilla syrup.",
    photo: "/images/vanilla_latte.jpg",
    customerRate: 4.7,
    category: "Flavored Coffees",
  },
  {
    id: 12,
    name: "Caramel Macchiato",
    regularPrice: 5.5,
    discountPrice: 5.0,
    description: "Espresso with caramel and steamed milk.",
    photo: "/images/caramel_macchiato.jpg",
    customerRate: 4.9,
    category: "Flavored Coffees",
  },
  {
    id: 13,
    name: "Hazelnut Coffee",
    regularPrice: 4.5,
    discountPrice: 4.0,
    description: "Espresso infused with hazelnut syrup.",
    photo: "/images/hazelnut_coffee.jpg",
    customerRate: 4.8,
    category: "Flavored Coffees",
  },
  {
    id: 14,
    name: "Mocha",
    regularPrice: 5.0,
    discountPrice: 4.5,
    description: "Rich espresso with chocolate and steamed milk.",
    photo: "/images/mocha.jpg",
    customerRate: 4.7,
    category: "Flavored Coffees",
  },
  {
    id: 15,
    name: "Pumpkin Spice Latte",
    regularPrice: 5.5,
    discountPrice: 5.0,
    description: "Seasonal favorite with pumpkin spice.",
    photo: "/images/pumpkin_spice_latte.jpg",
    customerRate: 4.9,
    category: "Flavored Coffees",
  },

  // Specialty Coffees
  {
    id: 16,
    name: "Turkish Coffee",
    regularPrice: 4.0,
    discountPrice: 3.5,
    description: "Rich and aromatic traditional Turkish coffee.",
    photo: "/images/turkish_coffee.jpg",
    customerRate: 4.8,
    category: "Specialty Coffees",
  },
  {
    id: 17,
    name: "Irish Coffee",
    regularPrice: 6.0,
    discountPrice: 5.5,
    description: "Coffee with a touch of whiskey and cream.",
    photo: "/images/irish_coffee.jpg",
    customerRate: 4.7,
    category: "Specialty Coffees",
  },
  {
    id: 18,
    name: "Affogato",
    regularPrice: 5.0,
    discountPrice: 4.5,
    description: "Espresso poured over vanilla ice cream.",
    photo: "/images/affogato.jpg",
    customerRate: 4.9,
    category: "Specialty Coffees",
  },
  {
    id: 19,
    name: "Nitro Cold Brew",
    regularPrice: 5.5,
    discountPrice: 5.0,
    description: "Creamy cold brew infused with nitrogen.",
    photo: "/images/nitro_cold_brew.jpg",
    customerRate: 4.8,
    category: "Specialty Coffees",
  },
  {
    id: 20,
    name: "Espresso Martini",
    regularPrice: 7.0,
    discountPrice: 6.5,
    description: "Cocktail with espresso, vodka, and coffee liqueur.",
    photo: "/images/espresso_martini.jpg",
    customerRate: 4.9,
    category: "Specialty Coffees",
  },

  // Coffee Accompaniments
  {
    id: 21,
    name: "Whipped Cream Topping",
    regularPrice: 1.0,
    discountPrice: 0.9,
    description: "Add creamy whipped cream to any coffee.",
    photo: "/images/whipped_cream.jpg",
    customerRate: 4.6,
    category: "Coffee Accompaniments",
  },
  {
    id: 22,
    name: "Caramel Drizzle",
    regularPrice: 0.5,
    discountPrice: 0.4,
    description: "Sweet caramel drizzle for your coffee.",
    photo: "/images/caramel_drizzle.jpg",
    customerRate: 4.8,
    category: "Coffee Accompaniments",
  },
  {
    id: 23,
    name: "Extra Espresso Shot",
    regularPrice: 1.5,
    discountPrice: 1.3,
    description: "Add an extra kick with another shot of espresso.",
    photo: "/images/espresso_shot.jpg",
    customerRate: 4.9,
    category: "Coffee Accompaniments",
  },
  {
    id: 24,
    name: "Flavored Syrup",
    regularPrice: 0.5,
    discountPrice: 0.4,
    description: "Choose from vanilla, hazelnut, or caramel.",
    photo: "/images/flavored_syrup.jpg",
    customerRate: 4.7,
    category: "Coffee Accompaniments",
  },
  {
    id: 25,
    name: "Chocolate Shavings",
    regularPrice: 0.5,
    discountPrice: 0.4,
    description: "Delicious chocolate shavings for topping.",
    photo: "/images/chocolate_shavings.jpg",
    customerRate: 4.8,
    category: "Coffee Accompaniments",
  },
];

export default coffeeMenuItems;