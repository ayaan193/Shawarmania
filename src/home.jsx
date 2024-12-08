import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

{/* importing all the count values from app.jsx*/}
function Home({ count, setCount, secondcount, setsecondCount, thirdcount, setthirdCount }) {
  {/*navigate hook call */}
  const navigate = useNavigate();

  {/* useState hook call */ }
  {/* initially setQuanityMode is set to false, if setQuantityMode is set to true isQuantityMode becomes true*/ }

  const [isQuantityMode, setQuantityMode] = useState(false);
  const [isQuantityMode2, setQuantityMode2] = useState(false);
  const [isQuantityMode3, setQuantityMode3] = useState(false);

  {/* functions that toggle setQuantityMode on or off that links to a button below */ }

  const handleAddClick = () => {
    setQuantityMode(true);
    setCount(1);
  };

  const handleAddClick2 = () => {
    setQuantityMode2(true);
    setsecondCount(1);
  };

  const handleAddClick3 = () => {
    setQuantityMode3(true);
    setthirdCount(1);
  };

  {/* Calling our useRef hooks */ }

  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const ordersRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);

  {/* this function checks where ref.current is pointing to and scrolls that into the view smoothly */ }
  {/* the ? is called optional chaining, so if the current ref is undefined it won't throw an error */ }
  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      <header className="bg-red-600 text-white p-2 fixed top-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Scrolls into the home section when we click the Shawarmania button */ }

          <a
            onClick={() => scrollToSection(homeRef)}
            className="text-3xl mx-2 my-5 font-bold cursor-pointer hover:text-4xl ease-in-out duration-300"
          >
            Shawarmania
          </a>
          {/* This creates the navbar */}
          {/* The tailwind css written in the nav tag is solely used to adjust the navbar for phones */ }
          <nav className="flex flex-wrap md:flex-nowrap justify-center md:justify-end space-x-0 md:space-x-6">
            <a onClick={() => scrollToSection(homeRef)} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2 ">Home</a>
            <a onClick={() => scrollToSection(menuRef)} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Menu</a>
            <a onClick={() => navigate("/orders")} className="mx-2 text-lg px-2 md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Orders</a>
            <a onClick={() => scrollToSection(aboutRef)} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">About</a>
            <a onClick={() => scrollToSection(reviewsRef)} className="mx-2 text-lg px-2 md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Reviews</a>
            <a onClick={() => navigate("/gallery")} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Gallery</a>
            <a onClick={() => scrollToSection(locationRef)} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Location</a>
            <a onClick={() => scrollToSection(contactRef)} className="mx-2 px-2 text-lg md:text-xl hover:text-2xl ease-in-out duration-300 cursor-pointer hover:underline underline-offset-2">Contact</a>
          </nav>  
        </div>
      </header>
      

      <section ref={homeRef} id="home" className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665989215795-f67f4723087d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="text-center bg-gray-900 bg-opacity-50 p-5 md:p-10 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl text-white font-bold">Authentic Shawarma, Freshly Made</h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base ">The best flavors from the Middle East straight to your table.</p>
          <a onClick={() => scrollToSection(menuRef)} className="mt-4 md:mt-6 inline-block bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-red-700 transition-all cursor-pointer">Order Now</a>
        </div>
      </section>

      <section className="py-10 md:py-20" ref={menuRef} id="menu">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            

            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:scale-105 transition-transform duration-300">
              <img src="https://pngimg.com/d/shawarma_PNG30.png" alt="Chicken Shawarma" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg md:text-xl font-bold mt-4">Chicken Shawarma</h3>
              <p className="text-gray-600 text-sm md:text-base">Juicy grilled chicken with fresh veggies and our special sauce.</p>
              <p className="font-bold text-red-600 mt-2 md:mt-3 mb-4 md:mb-6">80 Rs</p>
              <div className="mt-5">
                {isQuantityMode ? (
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => setCount(count > 1 ? count - 1 : 0)} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
                    <span className="px-6 md:px-8 py-2 bg-red-600 text-white rounded-md">{count}</span>
                    <button onClick={() => setCount(count + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
                  </div>
                ) : (
                  <button onClick={handleAddClick} className="bg-red-600 text-white px-8 md:px-12 py-2 md:py-4 rounded-md">+</button>
                )}
              </div>
            </div>

          
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:scale-105 transition-transform duration-300">
              <img src="https://static.vecteezy.com/system/resources/previews/036/627/312/non_2x/ai-generated-savory-beef-shawarma-on-transparent-background-png.png" alt="Beef Shawarma" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg md:text-xl font-bold mt-4">Beef Shawarma</h3>
              <p className="text-gray-600 text-sm md:text-base">Tender beef shawarma with pickled veggies and tahini sauce.</p>
              <p className="font-bold text-red-600 mt-2 md:mt-3 mb-4 md:mb-6">100 Rs</p>
              <div className="mt-5">
                {isQuantityMode2 ? (
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => setsecondCount(secondcount > 1 ? secondcount - 1 : 0)} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
                    <span className="px-6 md:px-8 py-2 bg-red-600 text-white rounded-md">{secondcount}</span>
                    <button onClick={() => setsecondCount(secondcount + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
                  </div>
                ) : (
                  <button onClick={handleAddClick2} className="bg-red-600 text-white px-8 md:px-12 py-2 md:py-4 rounded-md">+</button>
                )}
              </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:scale-105 transition-transform duration-300">
              <img src="https://pngimg.com/d/shawarma_PNG51.png" alt="Veggie Shawarma" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg md:text-xl font-bold mt-4">Veggie Shawarma</h3>
              <p className="text-gray-600 text-sm md:text-base">A mix of fresh veggies and flavorful sauces in a soft wrap.</p>
              <p className="font-bold text-red-600 mt-2 md:mt-3 mb-4 md:mb-6">70 Rs</p>
              <div className="mt-5">
                {isQuantityMode3 ? (
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => setthirdCount(thirdcount > 1 ? thirdcount - 1 : 0)} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
                    <span className="px-6 md:px-8 py-2 bg-red-600 text-white rounded-md">{thirdcount}</span>
                    <button onClick={() => setthirdCount(thirdcount + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
                  </div>
                ) : (
                  <button onClick={handleAddClick3} className="bg-red-600 text-white px-8 md:px-12 py-2 md:py-4 rounded-md">+</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={ordersRef} id="orders" className="bg-gray- pb-20">
        <div className="container mx-auto text-center">
          
          <button
  onClick={() => navigate('/orders')}
  className="transition ease-in-out delay-150 bg-red-600 hover:-translate-y+1 hover:scale-110 duration-350 shadow-xl text-white text-2xl shadow-md px-12 py-4 rounded-md font-semibold hover:bg-red-700"
>
  Proceed To Payment
</button>
        </div>
      </section>

      
      
      <section ref={aboutRef} id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-gray-800 mb-8 ">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto my-10 px-10">
          Welcome to Shawarmania, where authentic flavors meet modern taste! At Shawarmania, we’re passionate about bringing the rich, traditional taste of Middle Eastern shawarma to your plate with a fresh twist. From our carefully selected ingredients to our signature spices, every bite is a journey of flavor crafted with dedication and love.

          </p>
          <p className="text-gray-600 max-w-3xl mx-auto my-10 px-10 ">
          Our shawarmas are made fresh daily, marinated to perfection, and cooked with care to bring out the bold, savory taste you crave. We believe in quality over everything, which is why we use only the finest cuts of meat, locally sourced produce, and freshly baked pita. Whether you’re a fan of the classic chicken or beef shawarma or exploring our veggie options, there’s something delicious here for everyone.
            
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto px-10  ">
          More than just food, Shawarmania is an experience, a place to come together, share stories, and savor flavors. Join us, indulge in the authentic taste of shawarma, and discover why we’re passionate about every bite.
            
          </p>
        </div>
      </section>
      <section ref={reviewsRef} id="reviews" className="bg-white py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Customer Reviews</h2>
    <p className="text-xl text-gray-600 mb-12">Hear what our customers have to say about Shawarmania!</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Tejas Venugopalan</h3>
        <p className="text-lg text-gray-700 mt-2">
          "Sorry I am veg, no shawarma for me."
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Roshan</h3>
        <p className="text-lg text-gray-700 mt-2">
          "I was impressed by the freshness of the ingredients and the delicious Indian spices. Truly satisfying!"
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Ayaan</h3>
        <p className="text-lg text-gray-700 mt-2">
          "I have shawarmania for every meal no matter what"
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Ayush Paithankar</h3>
        <p className="text-lg text-gray-700 mt-2">
          "Every bite reminded me of the street food back home! Great service, wonderful ambiance. Highly recommended!"
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Allu Arjun</h3>
        <p className="text-lg text-gray-700 mt-2">
          "Why is there no pushpa flavour shawarma???"
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-semibold text-red-600">Salman Khan</h3>
        <p className="text-lg text-gray-700 mt-2">
          "My favourite is the blackbuck deep fried shawarma!"
        </p>
      </div>

    </div>
  </div>
      </section>
      <section ref={locationRef} id="location" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Location</h2>
          <p className=" mb-6">You can find us at:</p>
          <p className="text-gray-600 mb-6">Shawarmania - PES University Address: Right outside BE Block, PES University, 100 Feet Ring Road, Banashankari Stage III, Bangalore
          </p>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5688724677166!2d77.53174901031429!3d12.93540788732401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e46bb096d0b%3A0x8cef6ee2356c0645!2sBE%20Block%20PES%20University!5e0!3m2!1sen!2sin!4v1731119738959!5m2!1sen!2sin"
  className="w-full h-64 md:h-96 lg:h-[450px] rounded-lg shadow-lg"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Responsive Google map" 
/>

          
        </div>
      </section>

      
      
      <section ref={contactRef} id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-gray-600 mb-6">Got questions? Reach out to us!</p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="px-20 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="px-20 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="p-4 px-20 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"></textarea>
            </div>
            <button type="submit" className="px-10  bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-700">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;