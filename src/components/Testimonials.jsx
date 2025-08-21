export default function Testimonials() {
    return (
      <section className="max-w-6xl mx-auto my-20 px-6">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl border border-gray-700 p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <p className="text-gray-300 mb-4">
                "EMS has transformed how we manage employees. It's simple and powerful!"
              </p>
              <h4 className="text-green-400 font-semibold">– John D.</h4>
            </div>
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <p className="text-gray-300 mb-4">
                "A sleek interface with all the tools we need. Highly recommend."
              </p>
              <h4 className="text-green-400 font-semibold">– Sarah L.</h4>
            </div>
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <p className="text-gray-300 mb-4">
                "Onboarding employees has never been easier thanks to EMS."
              </p>
              <h4 className="text-green-400 font-semibold">– Michael T.</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
  