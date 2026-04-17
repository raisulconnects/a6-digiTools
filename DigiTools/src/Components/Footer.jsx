export default function Footer() {
  return (
    <>
      <div className="flex justify-between px-50 bg-[#101727] text-white py-30">
        <div>
          <h1 className="text-4xl font-bold">DigiTools</h1>
          <p className="text-gray-300 mt-5">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-2xl cursor-pointer">Product</li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Features
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Pricing
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Templates
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Integrations
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-2xl cursor-pointer">Company</li>
            <li className="text-[15px] text-gray-300 cursor-pointer">About</li>
            <li className="text-[15px] text-gray-300 cursor-pointer">Blog</li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Careers
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">Press</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-2xl cursor-pointer">Resources</li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Documentation
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Help Center
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Community
            </li>
            <li className="text-[15px] text-gray-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl">Social Links</h1>
          <div className="flex gap-2 mt-2">
            <img
              src="Instagram.png"
              alt="Instagram"
              className="bg-white p-2 rounded-full cursor-pointer"
            />

            <img
              src="Facebook.png"
              alt="Facebook"
              className="bg-white p-2 rounded-full cursor-pointer"
            />

            <img
              src="Twitter.png"
              alt="Twitter"
              className="bg-white p-2 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#101727] text-white px-50 py-10">
        <div className="border-t border-white my-10"></div>
        <div className="flex justify-between text-sm text-gray-400">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </>
  );
}
