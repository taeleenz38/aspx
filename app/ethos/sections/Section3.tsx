import React from "react";

const Section3 = () => {
  return (
    <div className="min-h-screen text-black pt-36 pb-14">
      <h1 className="text-7xl text-right font-extralight">
        We Don&apos;t Follow the Script.
      </h1>
      <div className="flex justify-between mt-4 font-extralight">
        {/* Left side */}
        <div className="w-[35%] flex flex-col">
          <p className="text-5xl mb-4">Core values:</p>
          <div className="w-full">
            <img
              src="/mock-core-values.png"
              className="w-4/5 h-auto object-contain mt-4"
              alt="Core values"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-[65%] flex flex-col justify-end text-right text-5xl gap-3">
          {/* Plain paragraph */}
          <p>Quality over quantity.</p>

          {/* Custom bullet group 1 */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center justify-end gap-6">
              <span className="w-3 h-3 rounded-full bg-black shrink-0"></span>
              <p className="text-right">No cookie-cutter deals.</p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <span className="w-3 h-3 rounded-full bg-black shrink-0"></span>
              <p className="text-right">
                We fund projects, not trap artists in debt.
              </p>
            </div>
          </div>

          {/* Plain paragraph */}
          <p>Every artist is unique - not a system component.</p>

          {/* Custom bullet group 3 */}
          <div className="flex items-center justify-end gap-6">
            <span className="w-3 h-3 rounded-full bg-black shrink-0"></span>
            <p className="text-right">
              Creative autonomy isn&apos;t negotiable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
