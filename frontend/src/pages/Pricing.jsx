
const plans = [
  {
    name: "Silver",
    price: "₹3,499/year",
    searches: "120 Searches / Year",
    perSearch: "Per Search: 60 Leads",
    totalLeads: "Total Leads: 7,200",
    categories: "All Categories (Domestic Only)",
    support: "Basic Support",
    popular: false,
    note: "Validity: 1 Year",
  },
  {
    name: "Gold",
    price: "₹4,999/year",
    searches: "240 Searches / Year",
    perSearch: "Per Search: 60 Leads",
    totalLeads: "Total Leads: 14,400",
    categories: "All Categories (Domestic + International)",
    support: "Dedicated Account Manager",
    popular: true,
    note: "Validity: 1 Year",
  },
  {
    name: "Platinum",
    price: "₹6,499/year",
    searches: "360 Searches / Year",
    perSearch: "Per Search: 60 Leads",
    totalLeads: "Total Leads: 21,600",
    categories: "All Categories (Domestic + International)",
    support: "Dedicated Account Manager",
    popular: false,
    note: "Validity: 1 Year",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter">Compare Our Plans</h1>
          <p className="hidden md:block text-lg text-slate-600 max-w-2xl mx-auto">Choose the best plan for your business. All plans include transparent pricing and no hidden fees.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex-1 bg-white rounded-3xl border ${plan.popular ? "border-indigo-500 shadow-indigo-200" : "border-slate-200 shadow-slate-100"} shadow-2xl px-8 py-10 flex flex-col items-center animate-slideInUp transition-transform hover:scale-[1.03] duration-200`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold rounded-full px-4 py-2 shadow-lg">MOST POPULAR</span>
              )}
              <div className="mb-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{plan.price}</div>
                <div className={`text-lg font-bold ${plan.popular ? "text-indigo-500" : "text-slate-500"}`}>{plan.name}</div>
              </div>
              <ul className="w-full mt-4 mb-6 text-slate-700 text-base space-y-3">
                <li><span className="font-semibold">{plan.searches}</span></li>
                <li><span className="font-semibold">{plan.perSearch}</span></li>
                <li><span className="font-semibold">{plan.totalLeads}</span></li>
                <li>{plan.categories}</li>
                <li>{plan.support}</li>
                <li>{plan.note}</li>
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-colors duration-200 ${plan.popular ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
