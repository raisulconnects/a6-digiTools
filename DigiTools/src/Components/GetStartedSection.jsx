export default function GetStartedSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto max-w-7xl py-10">
      <h1 className="text-6xl font-bold">Get Started In 3 Steps</h1>
      <p className="text-gray-400 text-[20px]">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative  bg-gray-100 p-10 rounded-lg outline outline-gray-300">
          <div className="bg-purple-700 text-white p-3 rounded-full text-[15px] absolute top-4 right-4 ">
            01
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="user.png"
              alt="user"
              className="bg-purple-100 rounded-[100%] p-10"
            />
            <p className="font-bold text-2xl">Create Account</p>
            <p className="text-center text-gray-500">
              Sign up for free in seconds. No Credit card <br /> required to get
              started.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative  bg-gray-100 p-10 rounded-lg outline outline-gray-300">
          <div className="bg-purple-700 text-white p-3 rounded-full text-[15px] absolute top-4 right-4 ">
            02
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="package.png"
              alt="package"
              className="bg-purple-100 rounded-[100%] p-10"
            />
            <p className="font-bold text-2xl">Choose Products</p>
            <p className="text-center text-gray-500">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative  bg-gray-100 p-10 rounded-lg outline outline-gray-300">
          <div className="bg-purple-700 text-white p-3 rounded-full text-[15px] absolute top-4 right-4 ">
            03
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src="rocket.png"
              alt="rocket"
              className="bg-purple-100 rounded-[100%] p-10"
            />
            <p className="font-bold text-2xl">Start Creating</p>
            <p className="text-center text-gray-500">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
