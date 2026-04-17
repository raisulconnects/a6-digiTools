import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto max-w-7xl py-10">
      <h2 className="text-5xl font-bold text-center">Pricing Plans</h2>
      <p className="mx-5 text-gray-400 text-[20px] text-center">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid grid-cols-1 mx-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PricingCard
          name="Starter"
          description="Perfect for getting started"
          price={0}
          period="Month"
          features={[
            "Access to 10 free tools",
            "Basic Templates",
            "Community Supprt",
            "1 Project Per Month",
          ]}
        />

        <PricingCard
          name="Pro"
          description="Best for professionals"
          price={29}
          period="Month"
          features={[
            "Access to all premium tools",
            "Unlimited Templates",
            "Priority Support",
            "Unlimited Projects",
            "Cloud Sync",
            "Advanced Analytics",
          ]}
          active={true}
          text="Start Pro Trial"
        />

        <PricingCard
          name="Enterprise"
          description="For teams and businesses"
          price={99}
          period="Month"
          features={[
            "Everything in Pro",
            "Team collaboration",
            "Custom Integrations",
            "Dedicated Support",
            "SLA Guarantee",
            "Custom branding",
          ]}
          text="Contact Sales"
        />
      </div>
    </div>
  );
}
