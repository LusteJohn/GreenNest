// plant-config.js
//
// ============================================================
//  HOW TO ADD A NEW PLANT
//  Add a new object to the PLANTS array below (copy an existing
//  one as a template). The newest entry should go LAST — the
//  carousel opens on the last item and lets people page backward
//  through older drops. Nothing else needs to change.
// ============================================================

const PLANTS = [
  {
    name: "Zebra Haworthia",
    kicker: "Past drop",
    tagline: "Small, striped, and slow-growing — a good desk plant that asks for almost nothing.",
    price: 280,
    currency: "₱",
    stock: 0,
    color: "#6E8A5A",
    image: "assets/images/succulents/zebra_haworthia.jpeg",
    description:
      "Sold out for now, but a new batch is coming from the greenhouse in about three weeks. " +
      "Message us if you want to be first in line when it's back.",
    facts: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "Every 2–3 weeks" },
      { label: "Difficulty", value: "Very easy" },
      { label: "Pot size", value: "3-inch nursery pot" },
      { label: "Pet safety", value: "Non-toxic" },
      { label: "Height", value: "~10cm incl. pot" }
    ],
    gallery: ["#6E8A5A", "#8FA377", "#4F5F3E"]
  },
  {
    name: "Peace Lily",
    kicker: "Past drop",
    tagline: "Glossy leaves and white blooms — droops dramatically when thirsty, then perks right back up.",
    price: 650,
    currency: "₱",
    stock: 2,
    color: "#3E5C39",
    image: "assets/images/indoor/peace_lily.jpeg",
    description:
      "A forgiving flowering plant for a low-light corner. It tells you exactly when it needs water by " +
      "drooping, so it's hard to accidentally kill this one.",
    facts: [
      { label: "Light", value: "Low to moderate" },
      { label: "Water", value: "Every 5–7 days" },
      { label: "Difficulty", value: "Easy" },
      { label: "Pot size", value: "5-inch nursery pot" },
      { label: "Pet safety", value: "Mildly toxic if eaten" },
      { label: "Height", value: "~35cm incl. pot" }
    ],
    gallery: ["#3E5C39", "#5C7F52", "#2E4A2A"]
  },
  // --- Flowering Plants Category ---
  {
    name: "African Violet",
    kicker: "Flowering Plants",
    tagline: "Vibrant purple blooms with fuzzy green leaves that brighten up any indoor tabletop.",
    price: 350,
    currency: "₱",
    stock: 5,
    color: "#7B52AE",
    image: "assets/images/flowering_plants/african_violet.jpeg",
    description:
      "A classic indoor favorite known for its continuous clusters of colorful blossoms. Thrives best under gentle indoor lighting with careful watering from the bottom to protect its delicate leaves.",
    facts: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "When soil is dry to touch" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Pot size", value: "4-inch nursery pot" },
      { label: "Pet safety", value: "Pet-safe" },
      { label: "Height", value: "~15cm incl. pot" }
    ],
    gallery: ["#7B52AE", "#9B72CE", "#5B328E"]
  },
  {
    name: "Begonia",
    kicker: "Flowering Plants",
    tagline: "Striking asymmetric foliage paired with delicate, charming clusters of flowers.",
    price: 450,
    currency: "₱",
    stock: 4,
    color: "#D9534F",
    image: "assets/images/flowering_plants/begonia.jpeg",
    description:
      "Valued for both its colorful foliage and blossoms. It adds a vibrant pop of character to your collection and thrives nicely in humid indoor environments with moderate watering.",
    facts: [
      { label: "Light", value: "Medium, indirect" },
      { label: "Water", value: "Every 5–7 days" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Pot size", value: "4-inch nursery pot" },
      { label: "Pet safety", value: "Toxic to pets" },
      { label: "Height", value: "~25cm incl. pot" }
    ],
    gallery: ["#D9534F", "#E9736F", "#B9332F"]
  },
  {
    name: "Bougainvillea",
    kicker: "Flowering Plants",
    tagline: "Breathtaking papery bracts bursting with vivid tropical color.",
    price: 750,
    currency: "₱",
    stock: 3,
    color: "#E83E8C",
    image: "assets/images/flowering_plants/bougainvillea.jpeg",
    description:
      "A sun-loving ornamental favorite that creates an eye-catching tropical display. Thrives best when placed near a sun-drenched window or outdoor patio.",
    facts: [
      { label: "Light", value: "Full sun" },
      { label: "Water", value: "When soil dries completely" },
      { label: "Difficulty", value: "Easy" },
      { label: "Pot size", value: "6-inch nursery pot" },
      { label: "Pet safety", value: "Non-toxic (watch out for thorns)" },
      { label: "Height", value: "~50cm incl. pot" }
    ],
    gallery: ["#E83E8C", "#F86EAC", "#C81E6C"]
  },
  {
    name: "Hibiscus",
    kicker: "Flowering Plants",
    tagline: "Large, dramatic tropical blossoms that make every day feel like a summer vacation.",
    price: 850,
    currency: "₱",
    stock: 4,
    color: "#FD7E14",
    image: "assets/images/flowering_plants/hibiscus.jpg",
    description:
      "Famous for its show-stopping, large petals and rich tropical appeal. Loves soaking up plenty of sunlight and regular drinks to produce continuous seasonal blooms.",
    facts: [
      { label: "Light", value: "Direct sunlight" },
      { label: "Water", value: "Keep consistently moist" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Pot size", value: "6-inch nursery pot" },
      { label: "Pet safety", value: "Non-toxic" },
      { label: "Height", value: "~60cm incl. pot" }
    ],
    gallery: ["#FD7E14", "#FE9E34", "#DD5E00"]
  },
  {
    name: "Orchid",
    kicker: "Flowering Plants",
    tagline: "Exotic, long-lasting architectural blooms symbolizing elegance and refinement.",
    price: 950,
    currency: "₱",
    stock: 3,
    color: "#BA55D3",
    image: "assets/images/flowering_plants/orchid.jpeg",
    description:
      "An exquisite statement piece featuring long-lasting elegance. Prefers specialized bark mixes and indirect lighting to keep its root system healthy and blooming.",
    facts: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "Every 7–10 days" },
      { label: "Difficulty", value: "Moderate" },
      { label: "Pot size", value: "5-inch clear pot" },
      { label: "Pet safety", value: "Pet-safe" },
      { label: "Height", value: "~40cm incl. pot" }
    ],
    gallery: ["#BA55D3", "#DA75F3", "#9A35B3"]
  },
  // --- Indoor Plants Category ---
  {
    name: "Chinese Evergreen",
    kicker: "Indoor Plants",
    tagline: "Low-maintenance beauty with richly patterned silver and green foliage.",
    price: 480,
    currency: "₱",
    stock: 7,
    color: "#20C997",
    image: "assets/images/indoor/chinese_evergreen.jpeg",
    description:
      "One of the toughest and most resilient indoor house plants available. Handles low-light conditions wonderfully and forgives occasional missed waterings.",
    facts: [
      { label: "Light", value: "Low to medium indirect" },
      { label: "Water", value: "Every 7–10 days" },
      { label: "Difficulty", value: "Very easy" },
      { label: "Pot size", value: "5-inch nursery pot" },
      { label: "Pet safety", value: "Toxic if eaten" },
      { label: "Height", value: "~30cm incl. pot" }
    ],
    gallery: ["#20C997", "#40E9B7", "#00A977"]
  },
  {
    name: "Monstera Deliciosa",
    kicker: "Indoor Plants",
    tagline: "The one everyone asks about — big, split leaves that keep splitting more as it grows.",
    price: 1450,
    currency: "₱",
    stock: 6,
    color: "#3F5D3A",
    image: "assets/images/indoor/monstera_deliciosa.jpeg",
    description:
      "This one's been growing in our greenhouse for about a year, so it's already used to indoor light " +
      "and won't sulk when it gets to your place. Comes in a 6-inch nursery pot, roughly knee-height including " +
      "the pot. Give it a bright spot out of direct sun and it'll keep pushing out new, more deeply split leaves.",
    facts: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "Every 7–10 days" },
      { label: "Difficulty", value: "Easy" },
      { label: "Pot size", value: "6-inch nursery pot" },
      { label: "Pet safety", value: "Mildly toxic if eaten" },
      { label: "Height", value: "~45cm incl. pot" }
    ],
    gallery: ["#3F5D3A", "#6B9060", "#2E4A2A"]
  },
  {
    name: "Golden Pothos",
    kicker: "Indoor Plants",
    tagline: "Trailing vines with heart-shaped golden-variegated leaves — nearly unkillable.",
    price: 250,
    currency: "₱",
    stock: 10,
    color: "#A2D2FF",
    image: "assets/images/indoor/golden_pothos.jpeg",
    description:
      "An exceptional starter plant that trails beautifully down bookshelves or hanging baskets. Thrives in almost any indoor lighting condition with minimal fuss.",
    facts: [
      { label: "Light", value: "Any indoor light" },
      { label: "Water", value: "Every 1–2 weeks" },
      { label: "Difficulty", value: "Bulletproof" },
      { label: "Pot size", value: "4-inch nursery pot" },
      { label: "Pet safety", value: "Toxic to pets" },
      { label: "Height", value: "~20cm trailing" }
    ],
    gallery: ["#A2D2FF", "#BFE0FF", "#82B2DF"]
  }
];

// Shop-level contact info — not tied to any one plant, shown on every slide.
const SHOP = {
  orderChannels: [
    { label: "Message on Facebook", href: "https://m.me/yourshophandle" },
    { label: "WhatsApp", href: "https://wa.me/639170000000" },
    { label: "Call or text", href: "tel:+639170000000" }
  ]
};