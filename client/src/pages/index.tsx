import { Navbar } from "@client/components/organisms/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              New Arrivals
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Check out our latest products
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                    src="https://tailwindui.com/img/ecommerce-images/home-page-01-product-01.jpg"
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    Wireless Bluetooth Headphones
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dd className="text-gray-500 text-sm">$200</dd>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        In stock
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a
                        href="#"
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-gray-200 rounded-bl-lg rounded-br-lg hover:text-gray-500"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-3a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 0110 0 1 1 0 11-2 0 3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="ml-2">Add to cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2023 Tailwind Traders, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
