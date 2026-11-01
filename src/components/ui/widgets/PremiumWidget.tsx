import React from "react";

export default function PremiumWidget() {
  return (
    <div className="border p-5 rounded-xl mt-4 cursor-pointer">
      <p className="font-semibold text-xl pb-2">Subscribe to Premium</p>
      <p className="text-[15px] leading-tight pb-4 text-gray-600">
        Get rid of ads, see your analytics, boost your replies and unlock 20+
        features.
      </p>
      <button className="px-6 py-2 text-[14px] bg-blue-400 text-white font-medium rounded-2xl">
        Subscribe
      </button>
    </div>
  );
}
