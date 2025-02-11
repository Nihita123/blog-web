import React, { useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogPage from "./Pages/BlogPage";
import Header from "./components/Header";
import TravelInspiration from "./components/TavelInspirations";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const blogsData = [
  {
    id: 1,
    title: "Exploring the Swiss Alps",
    excerpt: "Discover the beauty of the snow-capped peaks...",
    content:
      "The Swiss Alps are a paradise for adventurers and nature lovers. From hiking trails to breathtaking views, the region offers something for everyone. Ski enthusiasts can enjoy world-class slopes, while food lovers can savor Swiss delicacies like fondue and chocolate. Every season brings unique opportunities to explore this stunning region.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "A Road Trip Through California",
    excerpt: "Experience the stunning Pacific Coast Highway...",
    content:
      "California’s Pacific Coast Highway is a must for road trippers. Explore scenic coastlines, bustling cities, and charming small towns. From the Golden Gate Bridge in San Francisco to the beaches of Malibu, this drive offers unforgettable memories. Don’t miss landmarks like Big Sur and Monterey, where nature meets tranquility.",
    image:
      "https://plus.unsplash.com/premium_photo-1668424272087-58bcf4d4cc8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29hc3RhbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Cultural Wonders of Japan",
    excerpt: "Immerse yourself in Japan’s rich heritage...",
    content:
      "From ancient temples to modern cities, Japan is a blend of culture, tradition, and innovation that’s waiting to be explored. Visit Kyoto’s tranquil shrines, experience Tokyo’s futuristic skyline, or relax in a traditional onsen. Japanese cuisine, including sushi and ramen, adds a flavorful layer to the cultural journey.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHwwfDB8fHww",
  },
  {
    id: 4,
    title: "Adventures in New Zealand",
    excerpt: "A journey through Middle-Earth landscapes...",
    content:
      "New Zealand is a dream destination for adventurers and movie buffs alike. Explore the stunning fjords of Milford Sound, hike through lush forests, or visit iconic film locations from 'The Lord of the Rings.' Whether skydiving, kayaking, or just soaking in the scenery, New Zealand has it all.",
    image:
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Exploring the Streets of Paris",
    excerpt: "Fall in love with the city of lights...",
    content:
      "Paris, the city of love and lights, is filled with iconic landmarks and hidden gems. From the Eiffel Tower to the artistic Montmartre neighborhood, there’s something for everyone. Stroll along the Seine River, explore cozy cafes, and immerse yourself in the rich history and art of this romantic city.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcmlzfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Safari in the African Serengeti",
    excerpt: "Get close to the majestic wildlife of Africa...",
    content:
      "The Serengeti offers one of the best wildlife experiences in the world. Witness the Great Migration, where thousands of wildebeests traverse the plains, and spot lions, elephants, and giraffes in their natural habitat. A safari adventure in Africa is a once-in-a-lifetime opportunity to connect with nature.",
    image:
      "https://images.unsplash.com/photo-1723878425618-b0ad646eca6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "A Tropical Escape to Bali",
    excerpt: "Relax, unwind, and embrace the beauty of Bali...",
    content:
      "Bali is the ultimate tropical paradise with its stunning beaches, lush rice terraces, and spiritual temples. Whether surfing in Kuta, meditating in Ubud, or indulging in local Balinese cuisine, Bali offers a perfect blend of relaxation and adventure. It’s a haven for travelers seeking peace and beauty.",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Chasing the Northern Lights in Iceland",
    excerpt: "Witness the magical Aurora Borealis...",
    content:
      "Iceland is a destination like no other, offering a mix of icy landscapes and geothermal wonders. One of its highlights is chasing the Northern Lights—a dazzling natural phenomenon. From hot springs like the Blue Lagoon to volcanic craters and waterfalls, Iceland is full of wonders waiting to be explored.",
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Exploring Ancient Egypt",
    excerpt: "Discover the history of the Pharaohs...",
    content:
      "Step back in time and explore the wonders of ancient Egypt. From the Great Pyramids of Giza to the enigmatic Sphinx, Egypt is steeped in history and mystery. A cruise down the Nile River offers stunning views of ancient temples, while local bazaars provide a taste of Egyptian culture.",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWd5cHR8ZW58MHwwfDB8fHww",
  },
];
function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Show 6 blogs initially

  const handleReadMore = (id) => {
    const blog = blogsData.find((b) => b.id === id);
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 6); // Load 6 more blogs on click
  };

  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      {!selectedBlog && (
        <section className="hero">
          <div>
            <h1>Discover Your Next Adventure</h1>
            <p>
              Discover breathtaking destinations, hidden gems, and unforgettable
              adventures through our curated travel stories, expert guides, and
              firsthand experiences. Whether you're a solo traveler, a digital
              nomad, or planning a family vacation, find inspiration, tips, and
              itineraries to make your journey seamless and memorable.
            </p>
            <a href="#blogs" className="btn btn-outline-light explore">
              Explore Blogs
            </a>
          </div>
        </section>
      )}

      <TravelInspiration />
      <AboutUs />

      {/* Main Content */}
      <div id="blogs">
        {selectedBlog ? (
          <BlogPage blog={selectedBlog} onBack={handleBack} />
        ) : (
          <BlogList
            blogs={blogsData.slice(0, visibleBlogs)}
            onReadMore={handleReadMore}
            onLoadMore={loadMoreBlogs}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
