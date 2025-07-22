// Navbar/ header component 

function Navbar() {
  return (
    <nav className="bg-main-pink border-b shadow h-16">
      <div className="mx-auto flex justify-between items-center h-full">
        <h1 className="text-xl font-font-gastromond text-red-text ml-8">Lägg till logga här!</h1>
        <ul className="flex gap-4 items-center mr-8">
          <li><a href="#" className="text-red-text font-gastromond hover:text-accents">Books</a></li>
          <li><a href="#" className="text-red-text font-gastromond hover:text-accents">Clubs</a></li>
          <li><a href="#" className="text-red-text font-gastromond hover:text-accents">Friends</a></li>
          <li>
            <img src="/profile-img.svg" alt="Profile" className="h-10 w-10 border-2 border-red-text rounded-full hover:border-accents"/> 
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
