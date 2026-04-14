export default function HeroSection() {
  return (
    <div className="flex justify-between items-center gap-20 mx-auto max-w-7xl py-10">
      <div>
        <div className="bg-[#f5e7ff] max-w-70 rounded-2xl pl-3 py-1">
          <div className="flex items-center gap-2">
            <div className="bg-purple-900 w-2 h-2 rounded-full animate-pulse"></div>
            <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-extrabold text-[72px]">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <h3 className="text-[#627382] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </h3>
          <div className="flex gap-5">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-[100px] font-semibold cursor-pointer">
              Explore Products
            </button>
            <button className="border border-[#4F39F6] text-[#4F39F6] px-4 py-2 rounded-[100px] font-semibold cursor-pointer">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
}
