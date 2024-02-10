const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: [
      { name: "Pasta", measurement: "400g" },
      { name: "Eggs", measurement: "4" },
      { name: "Pancetta", measurement: "100g" },
      { name: "Parmesan Cheese", measurement: "50g" },
      { name: "Pepper", measurement: "to taste" }
    ],
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    steps: [
      "Boil the pasta in salted water.",
      "Fry the pancetta until crisp.",
      "Beat the eggs and Parmesan together.",
      "Combine pasta with egg mixture and pancetta.",
      "Serve with a sprinkle of pepper."
    ]
  },
  {
    id: 2,
    title: "Chicken Curry",
    ingredients: [
      { name: "Chicken", measurement: "500g" },
      { name: "Curry Powder", measurement: "2 tablespoons" },
      { name: "Coconut Milk", measurement: "400ml" },
      { name: "Onions", measurement: "2, finely chopped" }
    ],
    description: "A savory and spicy chicken curry made with coconut milk and curry spices.",
    steps: [
      "Sauté onions until golden.",
      "Add chicken pieces and brown.",
      "Stir in curry powder and coconut milk.",
      "Simmer until chicken is cooked through.",
      "Serve with rice."
    ]
  },
  {
    id: 3,
    title: "Classic Pancakes",
    ingredients: [
      { name: "All-purpose Flour", measurement: "1 1/2 cups" },
      { name: "Baking Powder", measurement: "3 1/2 teaspoons" },
      { name: "Salt", measurement: "1 teaspoon" },
      { name: "White Sugar", measurement: "1 tablespoon" },
      { name: "Milk", measurement: "1 1/4 cups" },
      { name: "Egg", measurement: "1" },
      { name: "Melted Butter", measurement: "3 tablespoons" }
    ],
    description: "Fluffy, buttery pancakes perfect for a hearty breakfast.",
    steps: [
      "Sift together flour, baking powder, salt, and sugar.",
      "In another bowl, mix milk, egg, and melted butter.",
      "Combine wet and dry ingredients until smooth.",
      "Pour batter onto a hot griddle and cook until bubbles form.",
      "Flip and cook until golden. Serve with syrup."
    ]
  },
  {
    id: 4,
    title: "Vegetable Stir Fry",
    ingredients: [
      { name: "Mixed Vegetables (broccoli, bell peppers, carrots)", measurement: "2 cups" },
      { name: "Soy Sauce", measurement: "2 tablespoons" },
      { name: "Garlic Clove", measurement: "1, minced" },
      { name: "Ginger", measurement: "1 teaspoon, minced" },
      { name: "Vegetable Oil", measurement: "1 tablespoon" },
      { name: "Sesame Seeds", measurement: "1 teaspoon" }
    ],
    description: "A quick and healthy vegetable stir fry, bursting with flavor.",
    steps: [
      "Heat oil in a large skillet over medium-high heat.",
      "Add garlic and ginger, sauté for 30 seconds.",
      "Add mixed vegetables and stir fry until tender.",
      "Stir in soy sauce and cook for another minute.",
      "Garnish with sesame seeds before serving."
    ]
  },
  {
    id: 5,
    title: "Beef Stew",
    ingredients: [
      { name: "Beef Chuck", measurement: "1 pound, cubed" },
      { name: "Carrots", measurement: "3, sliced" },
      { name: "Potatoes", measurement: "2, cubed" },
      { name: "Onion", measurement: "1, chopped" },
      { name: "Beef Broth", measurement: "2 cups" },
      { name: "Tomato Paste", measurement: "2 tablespoons" },
      { name: "Garlic", measurement: "2 cloves, minced" },
      { name: "Worcestershire Sauce", measurement: "1 tablespoon" },
      { name: "Dried Thyme", measurement: "1 teaspoon" },
      { name: "Bay Leaf", measurement: "1" },
      { name: "Peas", measurement: "1 cup" }
    ],
    description: "A hearty and comforting beef stew with tender vegetables.",
    steps: [
      "Brown beef cubes in a large pot.",
      "Add onions and garlic, cooking until softened.",
      "Stir in tomato paste, beef broth, Worcestershire sauce, thyme, and bay leaf. Bring to a simmer.",
      "Add potatoes and carrots; simmer until tender.",
      "Stir in peas and cook for an additional 5 minutes. Remove bay leaf before serving."
    ]
  },
  {
    id: 6,
    title: "Caesar Salad",
    ingredients: [
      { name: "Romaine Lettuce", measurement: "3 cups, chopped" },
      { name: "Parmesan Cheese", measurement: "1/4 cup, grated" },
      { name: "Croutons", measurement: "1 cup" },
      { name: "Caesar Dressing", measurement: "1/3 cup" },
      { name: "Lemon Juice", measurement: "2 tablespoons" },
      { name: "Worcestershire Sauce", measurement: "1 teaspoon" },
      { name: "Dijon Mustard", measurement: "1 teaspoon" },
      { name: "Garlic", measurement: "1 clove, minced" },
      { name: "Anchovy Paste (optional)", measurement: "1/2 teaspoon" }
    ],
    description: "Classic Caesar salad with a homemade dressing, perfect as a side or main dish.",
    steps: [
      "In a large bowl, whisk together Caesar dressing, lemon juice, Worcestershire sauce, mustard, garlic, and anchovy paste.",
      "Add romaine lettuce to the bowl and toss until well coated.",
      "Top with croutons and grated Parmesan cheese before serving."
    ]
  },
  {
    id: 7,
    title: "Banana Bread",
    ingredients: [
      { name: "Ripe Bananas", measurement: "3" },
      { name: "All-purpose Flour", measurement: "2 cups" },
      { name: "Sugar", measurement: "3/4 cup" },
      { name: "Butter", measurement: "1/2 cup, melted" },
      { name: "Eggs", measurement: "2" },
      { name: "Baking Soda", measurement: "1 teaspoon" },
      { name: "Salt", measurement: "1/2 teaspoon" },
      { name: "Vanilla Extract", measurement: "1 teaspoon" },
      { name: "Walnuts (optional)", measurement: "1/2 cup, chopped" }
    ],
    description: "Moist and delicious banana bread with a hint of vanilla and optional walnuts for crunch.",
    steps: [
      "Preheat oven to 350°F (175°C). Grease a 9x5-inch loaf pan.",
      "Mash bananas in a large bowl. Stir in melted butter.",
      "Mix in baking soda and salt. Stir in sugar, beaten eggs, and vanilla extract. Mix in flour.",
      "Fold in walnuts if using and pour batter into prepared loaf pan.",
      "Bake for 1 hour to 1 hour 10 minutes, or until a tester inserted into the center comes out clean.",
      "Let bread cool in the pan for 10 minutes, then turn out onto a wire rack to cool completely."
    ]
  },
];
