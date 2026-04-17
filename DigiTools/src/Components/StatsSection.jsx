export default function StatsSection() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 md:flex justify-center items-center gap-20">
      <div className="      text-center">
        <h1 className="font-extrabold text-[60px]">50K</h1>
        <h1 className="text-[24px] font-medium">Active Users</h1>
      </div>
      <div className="w-[1px] h-16 bg-white/30"></div>
      <div className="text-center">
        <h1 className="font-extrabold text-[60px]">200+</h1>
        <h1 className="text-[24px] font-medium">Premium Users</h1>
      </div>
      <div className="w-[1px] h-16 bg-white/30"></div>
      <div className="text-center">
        <h1 className="font-extrabold text-[60px]">4.9</h1>
        <h1 className="text-[24px] font-medium">Rating</h1>
      </div>
    </div>
  );
}
