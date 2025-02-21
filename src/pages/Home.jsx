// Home.jsx
import Navbar from "../components/Navbar"; // Assuming the previous Navbar component

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0890F4]">
      {/* Navbar from previous code */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-2 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="self-start">
              <h1 className="text-[72px] md:text-5xl font-bold text-white mb-6 leading-none">
                Laundry & dry cleaning with 24h delivery
                <span className="text-[#FFD06D]"> Manchester</span>
              </h1>
              <p className="text-lg text-white mb-8">
                Free collection and delivery. Same day service available. Book
                in less than 60 seconds.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
                <button className="border border-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200">
                  How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="/laundryheap-hero-image.jpg" alt="Laundry service" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose LaundryHeap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Delivery",
                desc: "Free pickup and delivery on every order",
                icon: "🚚",
              },
              {
                title: "Fast Service",
                desc: "24-hour turnaround available",
                icon: "⏰",
              },
              {
                title: "Eco-Friendly",
                desc: "Sustainable cleaning methods",
                icon: "🌿",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Online",
                desc: "Schedule in 60 seconds",
              },
              { step: "2", title: "We Collect", desc: "Free pickup" },
              { step: "3", title: "We Clean", desc: "Expert cleaning" },
              { step: "4", title: "We Deliver", desc: "Fresh & clean" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience hassle-free laundry and dry cleaning with free pickup and
            delivery.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold">
            Book Your First Order
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LaundryHeap</h3>
              <p className="text-gray-400 text-sm">
                Professional laundry and dry cleaning services with free
                delivery.
              </p>
            </div>
            {["Services", "Company", "Support"].map((section) => (
              <div key={section}>
                <h3 className="text-lg font-semibold mb-4">{section}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2025 LaundryHeap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
