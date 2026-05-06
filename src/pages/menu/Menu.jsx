import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../context/ThemeContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';

const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Crispy Samosas",
      description: "Golden triangle pastries filled with spiced potatoes and green peas, served with mint chutney",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1728069930280-8023a4226706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2h8MXx8dmVnZXRhcmlhbiUyMGFwcGV0aXplciUyMHNhbW9zYXxlbnwxfHx8fDE3NTUzMzk1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Vegetarian Spring Rolls",
      description: "Fresh vegetables wrapped in rice paper, served with sweet and sour sauce",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1595238734477-ae7f8a79ce02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzU1MzM5NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  mains: [
    {
      id: 3,
      name: "Paneer Butter Masala",
      description: "Tender cottage cheese cubes in rich, creamy tomato-based sauce with aromatic spices",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGF8ZW58MXx8fHwxNzU1MjYzNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Dal Maharaja",
      description: "Royal lentil curry slow-cooked with ghee, cream, and traditional spices",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBjdXJyeSUyMGluZGlhbiUyMHZlZ2V0YXJpYW58ZW58MXx8fHwxNzU1MzM5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice layered with seasonal vegetables and saffron",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1733414717515-d997dafb7341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwdmVnZXRhcmlhbiUyMHJpY2V8ZW58MXx8fHwxNzU1MzM5NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "Sattvic Pasta",
      description: "Whole wheat pasta with seasonal vegetables in herb-infused olive oil",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGFzdGF8ZW58MXx8fHwxNzU1MzM5NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  breads: [
    {
      id: 7,
      name: "Butter Naan",
      description: "Soft, pillowy bread brushed with ghee and fresh herbs",
      price: "₹80",
      image: "https://images.unsplash.com/photo-1586524068358-77d2196875e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwbmFhbiUyMGluZGlhbiUyMGJyZWFkfGVufDF8fHx8MTc1NTMzOTU5NHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  desserts: [
    {
      id: 8,
      name: "Gulab Jamun",
      description: "Traditional milk dumplings soaked in rose-flavored sugar syrup",
      price: "₹140",
      image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwZ3VsYWIlMjBqYW11bnxlbnwxfHx8fDE3NTUzMzk1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ],
  beverages: [
    {
      id: 9,
      name: "Masala Chai",
      description: "Traditional spiced tea brewed with cardamom, ginger, and aromatic herbs",
      price: "₹60",
      image: "https://images.unsplash.com/photo-1594137260937-f59050746e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhfGVufDF8fHx8MTc1NTI2MzQyOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 10,
      name: "Fresh Fruit Juice",
      description: "Seasonal fresh fruit juices - Orange, Pomegranate, Sweet Lime",
      price: "₹100",
      image: "https://images.unsplash.com/photo-1556764900-78b59cf886af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwanVpY2V8ZW58MXx8fHwxNzU1MjcwOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]
};

const categories = [
  { key: 'all', name: 'All Items' },
  { key: 'appetizers', name: 'Appetizers' },
  { key: 'mains', name: 'Main Courses' },
  { key: 'breads', name: 'Breads' },
  { key: 'desserts', name: 'Desserts' },
  { key: 'beverages', name: 'Beverages' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { color } = useTheme();
 const { user } = useAuthContext();
  const { addDocument } = useFirestore("cart");  // points to "cart" collection
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.values(menuData).flat();
    }
    return menuData[activeCategory] || [];
  };

  
  // ✅ Function to add to cart
  const handleAddToCart = async (item) => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }

    try {
      await addDocument({
        uid: user.uid,
        name: item.name,
        price: Number(item.price.replace("₹", "")), // convert "₹120" → 120
        image: item.image,
        quantity: 1,
        createdAt: new Date()
      });
      alert(`${item.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-16">
      {/* Menu Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 mt-30">
          Our Menu
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully crafted selection of pure vegetarian dishes, 
          inspired by ancient sattvic traditions and modern culinary artistry
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeCategory === category.key
                ? 'text-white shadow-lg transform scale-105'
                : 'bg-card border border-border text-foreground hover:shadow-md hover:scale-102'
            }`}
            style={{
              backgroundColor: activeCategory === category.key ? color : undefined,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-bold" style={{ color: color }}>
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <div className="px-6 pb-6">
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
                  style={{ backgroundColor: color }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Notice */}
      <div className="max-w-4xl mx-auto mt-16" data-aos="fade-up">
        <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            🌱 Purely Vegetarian & Sattvic
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            All our dishes are prepared using the finest organic ingredients, 
            following traditional sattvic principles. We use no onions, garlic, or artificial preservatives - 
            just pure, nourishing food that feeds both body and soul.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="text-sm text-muted-foreground">100% Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="text-sm text-muted-foreground">No Onion & Garlic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="text-sm text-muted-foreground">Organic Ingredients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}