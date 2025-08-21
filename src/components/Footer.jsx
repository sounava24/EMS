export default function Footer() {
    return (
      <footer className="bg-black/70 backdrop-blur-md border-t border-gray-700 py-6 mt-20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} EMS Platform. All rights reserved.
        </div>
      </footer>
    );
  }
  