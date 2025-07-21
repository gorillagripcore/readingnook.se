// src/components/Navbar/Navbar.jsx
function Navbar() {
  return (
    <nav className="bg-main-pink border-b shadow p-4 h-16">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-text">Lägg till logga här!</h1>
        <ul className="flex gap-4">
          <li><a href="#" className="text-black hover:text-blue-600">Books</a></li>
          <li><a href="#" className="text-black hover:text-blue-600">Clubs</a></li>
          <li><a href="#" className="text-black hover:text-blue-600">Friends</a></li>
          <li><a href="#" className="text-black hover:text-blue-600">Profilbild här!</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
