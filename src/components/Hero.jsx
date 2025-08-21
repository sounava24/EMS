export default function Hero() {
    return (
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
  
        {/* Hero Content */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 z-10">
          Welcome to <span className="text-green-400">EMS Platform</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mb-8 z-10">
          Manage employees efficiently with secure dashboards, real-time data, and a seamless experience.
        </p>
  
        {/* CTA buttons */}
        <div className="flex gap-4 z-10">
          <a
            href="#features"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="border border-green-400 text-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-black transition"
          >
            Login
          </a>
        </div>
  
        {/* Dashboard preview */}
        
  
        {/* Small feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl z-10">
          <div className="p-4 bg-black/60 rounded-xl border border-gray-700">
            <h4 className="text-green-400 font-semibold mb-2">Fast Onboarding</h4>
            <p className="text-gray-300 text-sm">Quickly register and manage employees with minimal setup.</p>
          </div>
          <div className="p-4 bg-black/60 rounded-xl border border-gray-700">
            <h4 className="text-green-400 font-semibold mb-2">Secure Dashboard</h4>
            <p className="text-gray-300 text-sm">Role-based access keeps sensitive data protected.</p>
          </div>
          <div className="p-4 bg-black/60 rounded-xl border border-gray-700">
            <h4 className="text-green-400 font-semibold mb-2">Real-Time Updates</h4>
            <p className="text-gray-300 text-sm">Get instant notifications on important events and tasks.</p>
          </div>
        </div>
  
      </section>
    );
  }
  