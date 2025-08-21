export default function CTA() {
    return (
      <section className="max-w-6xl mx-auto my-20 px-6">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl border border-gray-700 p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8">
            Sign up today and see how our EMS can help your team succeed.
          </p>
          <a
            href="/register"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Create an Account
          </a>
        </div>
      </section>
    );
  }
      