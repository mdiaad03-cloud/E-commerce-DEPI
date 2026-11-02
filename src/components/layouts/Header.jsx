function Header() {
  const categories = [
    { id: 1, name: "Woman", active: true },
    { id: 2, name: "Male", active: false },
    { id: 3, name: "Mother-Child", active: false },
    { id: 4, name: "Home & Furniture", active: false },
    { id: 5, name: "Super market", active: false },
    { id: 6, name: "Cosmetics", active: false },
    { id: 7, name: "Shoe & Bag", active: false },
    { id: 8, name: "Electronic", active: false },
    { id: 9, name: "Sport & Outdoor", active: false },
    { id: 10, name: "Best seller", active: false },
  ];
  const navLinks = [
    { id: 1, title: "About us", href: "#" },
    { id: 2, title: "Blog", href: "#" },
    { id: 3, title: "Contact us", href: "#" },
    { id: 4, title: "Help & support", href: "#" },
  ];
  return (
    <header className="w-full bg-white font-sans">
      <div className="border-b border-gray-100 py-3.5">
        <div className="max-w-page mx-auto px-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-gray-800">Luminae</span>
          </div>
          <div className="flex-1 max-w-lg flex items-center border border-gray-200 rounded-md px-3 py-1.5 bg-white shadow-2xs">
            <input type="text" placeholder="Search Product" className="flex-1 bg-transparent text-xs text-gray-700 outline-none placeholder-gray-400" />
            <div className="h-4 w-px bg-gray-200 mx-2" />
            <select className="bg-transparent text-xs text-gray-600 outline-none cursor-pointer pr-1">
              <option>All categories</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>
            <button type="button" className="text-gray-500 hover:text-black pl-2 cursor-pointer" aria-label="Search">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex items-center gap-5 text-xs text-gray-600 font-medium">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="hover:text-black transition-colors">{link.title}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3 text-gray-600">
            <a href="#" aria-label="Instagram" className="hover:text-black">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-black">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-black">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.197 1.006.128.832.942z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white py-2 text-xs">
        <div className="max-w-page mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <button type="button" className="flex items-center gap-1.5 font-bold hover:text-gray-300 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Categories</span>
            </button>
            <div className="flex items-center gap-3 text-gray-300 text-[11px]">
              <span className="cursor-pointer hover:text-white">USD ▾</span>
              <span className="cursor-pointer hover:text-white">English ▾</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-center text-[11px]">
            <span className="font-semibold text-white">Weekly Men's Toiletries Coupons.</span>
            <span className="text-gray-400">We understand the importance of quality products at affordable prices.</span>
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Sign in</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Card</span>
              <span className="bg-emerald-500 text-white rounded-full px-1.5 py-0.2 text-[10px] font-bold">2</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="border-b border-gray-100 py-3">
        <div className="max-w-page mx-auto px-4 flex items-center justify-between gap-6 overflow-x-auto">
          {categories.map((cat) => (
            <a key={cat.id} href="#" className={`text-xs whitespace-nowrap transition-colors pb-0.5 ${cat.active ? "text-[#ff9900] font-bold border-b-2 border-[#ff9900]" : "text-gray-600 hover:text-black font-medium"}`}>{cat.name}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default Header;
