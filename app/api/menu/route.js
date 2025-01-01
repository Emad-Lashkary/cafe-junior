export async function GET(request) {
  const menuData = [
    {
      id: 1,
      name: "Espresso",
      regularPrice: 3.0,
      discountPrice: 2.7,
      description: "A strong and bold shot of espresso.",
      photo:
        "https://i.pinimg.com/736x/c1/2e/34/c12e344b0dc9b687b4e4f8dd04996877.jpg",
      customerRate: 4.8,
      category: "Hot Coffees",
    },
    {
      id: 2,
      name: "Americano",
      regularPrice: 3.5,
      discountPrice: 3.2,
      description: "Espresso diluted with hot water.",
      photo:
        "https://i.pinimg.com/236x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg",
      customerRate: 4.7,
      category: "Hot Coffees",
    },
    {
      id: 3,
      name: "Cappuccino",
      regularPrice: 4.5,
      discountPrice: 4.0,
      description: "Espresso topped with steamed milk and foam.",
      photo:
        "https://i.pinimg.com/736x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg",
      customerRate: 4.9,
      category: "Hot Coffees",
    },
    {
      id: 4,
      name: "Latte",
      regularPrice: 4.8,
      discountPrice: 4.2,
      description: "Creamy espresso with steamed milk.",
      photo:
        "https://i.pinimg.com/736x/e3/83/f9/e383f9aba12fcabbffd116323690fb57.jpg",
      customerRate: 4.8,
      category: "Hot Coffees",
    },
    {
      id: 5,
      name: "Flat White",
      regularPrice: 4.0,
      discountPrice: 3.6,
      description: "Rich espresso with velvety steamed milk.",
      photo:
        "https://i.pinimg.com/736x/79/3f/5f/793f5f7d478f0501392fcfb7dfa3646d.jpg",
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
      photo:
        "https://i.pinimg.com/736x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg",
      customerRate: 4.5,
      category: "Iced Coffees",
    },
    {
      id: 7,
      name: "Iced Latte",
      regularPrice: 4.5,
      discountPrice: 4.0,
      description: "Espresso with chilled milk and ice.",
      photo:
        "https://i.pinimg.com/236x/b4/94/67/b494678e5b41483ad9249fd5c4f2c4e1.jpg",
      customerRate: 4.6,
      category: "Iced Coffees",
    },
    {
      id: 8,
      name: "Cold Brew",
      regularPrice: 5.0,
      discountPrice: 4.5,
      description: "Smooth cold coffee brewed over time.",
      photo:
        "https://i.pinimg.com/236x/fa/78/25/fa7825147f69f319cf6a9215f4fba2d4.jpg",
      customerRate: 4.9,
      category: "Iced Coffees",
    },
    {
      id: 9,
      name: "Iced Cappuccino",
      regularPrice: 4.8,
      discountPrice: 4.2,
      description: "Espresso with cold milk and foam over ice.",
      photo:
        "https://i.pinimg.com/236x/b7/1e/31/b71e31dc2a3757079c8643c84d8570d3.jpg",
      customerRate: 4.7,
      category: "Iced Coffees",
    },
    {
      id: 10,
      name: "Frappuccino",
      regularPrice: 5.5,
      discountPrice: 5.0,
      description: "Blended iced coffee topped with whipped cream.",
      photo:
        "https://i.pinimg.com/236x/94/8d/50/948d50a9098aafeabdc6d6c671d6d152.jpg",
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
      photo:
        "https://i.pinimg.com/236x/1e/c5/db/1ec5db7e0a8d124a9c42cee34cfd2c93.jpg",
      customerRate: 4.7,
      category: "Flavored Coffees",
    },
    {
      id: 12,
      name: "Caramel Macchiato",
      regularPrice: 5.5,
      discountPrice: 5.0,
      description: "Espresso with caramel and steamed milk.",
      photo:
        "https://i.pinimg.com/474x/27/2c/a8/272ca86db43fe460a0068a0316a3d42a.jpg",
      customerRate: 4.9,
      category: "Flavored Coffees",
    },
    {
      id: 13,
      name: "Hazelnut Coffee",
      regularPrice: 4.5,
      discountPrice: 4.0,
      description: "Espresso infused with hazelnut syrup.",
      photo:
        "https://i.pinimg.com/236x/d9/19/62/d919620122b468a40681420165d7a8c1.jpg",
      customerRate: 4.8,
      category: "Flavored Coffees",
    },
    {
      id: 14,
      name: "Mocha",
      regularPrice: 5.0,
      discountPrice: 4.5,
      description: "Rich espresso with chocolate and steamed milk.",
      photo:
        "https://i.pinimg.com/236x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
      customerRate: 4.7,
      category: "Flavored Coffees",
    },
    {
      id: 15,
      name: "Pumpkin Spice Latte",
      regularPrice: 5.5,
      discountPrice: 5.0,
      description: "Seasonal favorite with pumpkin spice.",
      photo:
        "https://i.pinimg.com/736x/86/75/b4/8675b4652109f2cc7e6e0402da3e9331.jpg",
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
      photo:
        "https://i.pinimg.com/236x/31/ec/57/31ec57ff7f753175dd770c01f666d0e4.jpg",
      customerRate: 4.8,
      category: "Specialty Coffees",
    },
    {
      id: 17,
      name: "Irish Coffee",
      regularPrice: 6.0,
      discountPrice: 5.5,
      description: "Coffee with a touch of whiskey and cream.",
      photo:
        "https://i.pinimg.com/236x/f9/23/84/f9238471466d5da2fabc814599330982.jpg",
      customerRate: 4.7,
      category: "Specialty Coffees",
    },
    {
      id: 18,
      name: "Affogato",
      regularPrice: 5.0,
      discountPrice: 4.5,
      description: "Espresso poured over vanilla ice cream.",
      photo:
        "https://i.pinimg.com/236x/95/d0/ba/95d0ba93472222e30990f79cfc335f83.jpg",
      customerRate: 4.9,
      category: "Specialty Coffees",
    },
    {
      id: 19,
      name: "Nitro Cold Brew",
      regularPrice: 5.5,
      discountPrice: 5.0,
      description: "Creamy cold brew infused with nitrogen.",
      photo:
        "https://i.pinimg.com/236x/23/3a/30/233a308817dde7d7c5380d8a705f2c47.jpg",
      customerRate: 4.8,
      category: "Specialty Coffees",
    },
    {
      id: 20,
      name: "Espresso Martini",
      regularPrice: 7.0,
      discountPrice: 6.5,
      description: "Cocktail with espresso, vodka, and coffee liqueur.",
      photo:
        "https://i.pinimg.com/236x/d9/69/73/d96973d49888ca9da5c217df109917be.jpg",
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
      photo:
        "https://i.pinimg.com/236x/eb/16/41/eb164182cc81df272552bcdf31345aaa.jpg",
      customerRate: 4.6,
      category: "Coffee Accompaniments",
    },
    {
      id: 22,
      name: "Caramel Drizzle",
      regularPrice: 0.5,
      discountPrice: 0.4,
      description: "Sweet caramel drizzle for your coffee.",
      photo:
        "https://i.pinimg.com/236x/1c/69/69/1c696915a5877092b69136cece8548b1.jpg",
      customerRate: 4.8,
      category: "Coffee Accompaniments",
    },
    {
      id: 23,
      name: "Extra Espresso Shot",
      regularPrice: 1.5,
      discountPrice: 1.3,
      description: "Add an extra kick with another shot of espresso.",
      photo:
        "https://i.pinimg.com/236x/42/7d/c9/427dc939c90e5a7dfd70be08cfa944c7.jpg",
      customerRate: 4.9,
      category: "Coffee Accompaniments",
    },
    {
      id: 24,
      name: "Flavored Syrup",
      regularPrice: 1.2,
      discountPrice: 1.1,
      description: "Choose from vanilla, hazelnut, or caramel.",
      photo:
        "https://i.pinimg.com/236x/e5/b2/c0/e5b2c0e52f718eb776c3738e945b3294.jpg",
      customerRate: 4.7,
      category: "Coffee Accompaniments",
    },
    {
      id: 25,
      name: "Chocolate Shavings",
      regularPrice: 0.5,
      discountPrice: 0.4,
      description: "Delicious chocolate shavings for topping.",
      photo:
        "https://i.pinimg.com/474x/d0/ac/66/d0ac663911115baac73ce0ee5c7ea9df.jpg",
      customerRate: 4.8,
      category: "Coffee Accompaniments",
    },
  ];

  return new Response(JSON.stringify(menuData), {
    headers: { "Content-Type": "application/json" },
  });
}
