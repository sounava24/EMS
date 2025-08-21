export default function Features() {
    return (
      <section className="max-w-6xl mx-auto my-20 px-6">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl border border-gray-700 p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-300">Description for feature one.</p>
            </div>
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-300">Description for feature two.</p>
            </div>
            <div className="p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-400 transition">
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p className="text-gray-300">Description for feature three.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  