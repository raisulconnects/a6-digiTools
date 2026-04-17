export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  active = false,
  text = "Get Started Free",
  tag = "Most Popular",
}) {
  return (
    <div
      className={`relative border border-gray-200 rounded-2xl p-8 flex flex-col justify-between w-[350px] ${active ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-50"}`}
    >
      {active && (
        <p className="absolute top-[-20px] right-[120px] bg-yellow-200 text-orange-400 px-2 py-1 rounded-lg text-sm font-semibold">
          {tag}
        </p>
      )}

      {/* Top Content */}
      <div className="flex flex-col gap-4">
        <h2
          className={`text-2xl font-bold text-gray-800 ${active ? " text-white" : ""}`}
        >
          {name}
        </h2>

        <p className={`text-gray-500 ${active ? " text-white" : ""}`}>
          {description}
        </p>

        <div className="flex items-end gap-1 mt-2">
          <span
            className={`text-5xl font-extrabold text-gray-900 ${active ? " text-white" : ""}`}
          >
            ${price}
          </span>
          <span className={`text-gray-500 mb-1 ${active ? " text-white" : ""}`}>
            /{period}
          </span>
        </div>

        <ul className="flex flex-col gap-3 mt-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${active ? "text-white" : "text-gray-600"}`}
            >
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-8 w-full py-4 rounded-full cursor-pointer  font-semibold ${active ? "bg-white text-black " : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
      >
        {text}
      </button>
    </div>
  );
}
