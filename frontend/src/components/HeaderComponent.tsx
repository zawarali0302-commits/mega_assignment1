
const HeaderComponent = () => {
  return (
    <header className="flex bg-blue-900 text-white p-4 mb-6">
        <h1 className="text-2xl text-center md:text-left font-bold ">Customer Management System</h1>

        <nav className="hidden md:block ml-auto items-center">
          {['Home', 'Products', 'Services', 'About'].map((item) => (
            <a key={item} href="#" className="mr-4">
              {item}
            </a>
          ))}
        </nav>
    </header>
  )
}

export default HeaderComponent
