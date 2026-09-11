import logoFoot from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <div>
      <>
        <section className=" mt-60">
          <footer className="bg-[#020617] text-white">
            {/* Newsletter Section */}
            <div className="relative mx-auto -top-24 w-[90%] max-w-332.5">
              {/* Outer Border */}
              <div className="rounded-3xl border border-white bg-[#272b38] p-5">
                {/* Newsletter Box */}
                <div
                  className="
              rounded-[20px]
              border border-gray-200
              bg-linear-to-br from-white via-white to-orange-100
              px-6 py-16
              text-center
            "
                >
                  <h2 className="text-3xl font-bold text-[#131313]">
                    Subscribe to our Newsletter
                  </h2>

                  <p className="mt-3 text-lg text-gray-600">
                    Get the latest updates and news right in your inbox!
                  </p>

                  {/* Email + Button */}
                  <div className="mx-auto mt-6 flex max-w-140 gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                  h-14
                  flex-1
                  rounded-xl
                  border border-gray-300
                  bg-white
                  px-6
                  text-gray-700
                  outline-none
                  focus:border-gray-500
                "
                    />

                    <button
                      className="
                  h-14
                  rounded-xl
                  bg-linear-to-r
                  from-pink-400
                  via-orange-300
                  to-yellow-400
                  px-7
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Content */}
            <div className="mx-auto max-w-332.5 px-8 pb-20">
              {/* Logo */}
              <div className="mb-14 flex justify-center">
                <img
                  src={logoFoot}
                  alt="Cricket Logo"
                  className="h-35 w-auto object-contain"
                />
              </div>

              {/* Three Columns */}
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {/* About */}
                <div>
                  <h3 className="mb-4 text-xl font-bold">About Us</h3>

                  <p className="max-w-75 text-lg leading-8 text-gray-400">
                    We are a passionate team dedicated to providing the best
                    services to our customers.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="mb-4 text-xl font-bold">Quick Links</h3>

                  <ul className="space-y-3 text-lg text-gray-400">
                    <li>
                      <a href="#" className="transition hover:text-white">
                        ▪ Home
                      </a>
                    </li>

                    <li>
                      <a href="#" className="transition hover:text-white">
                        ▪ Services
                      </a>
                    </li>

                    <li>
                      <a href="#" className="transition hover:text-white">
                        ▪ About
                      </a>
                    </li>

                    <li>
                      <a href="#" className="transition hover:text-white">
                        ▪ Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Subscribe */}
                <div>
                  <h3 className="mb-4 text-xl font-bold">Subscribe</h3>

                  <p className="mb-5 max-w-[320px] text-lg leading-8 text-gray-400">
                    Subscribe to our newsletter for the latest updates.
                  </p>

                  {/* Small Subscribe Form */}
                  <div className="flex max-w-95 overflow-hidden rounded-xl">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                  min-w-0
                  flex-1
                  bg-white
                  px-6
                  py-4
                  text-gray-700
                  outline-none
                "
                    />

                    <button
                      className="
                  bg-linear-to-r
                  from-pink-400
                  via-orange-300
                  to-yellow-400
                  px-6
                  font-bold
                  text-black
                "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-8 text-center">
              <p className="text-gray-400">
                @2024 Your Company All Rights Reserved.
              </p>
            </div>
          </footer>
        </section>
      </>
    </div>
  );
};

export default Footer;
