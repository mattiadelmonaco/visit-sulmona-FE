export default function Footer() {
  return (
    <footer className="bg-[#99031e] shadow-2xl py-3">
      <div className="container px-10 mx-auto">
        <div className="flex justify-between items-center border-b-2 border-white py-3 mb-3">
          {/* logo */}
          <div className="bg-white rounded-full py-5">
            <a href="/">
              <img
                src="./images/visits-sulmona-logo.svg"
                alt="Logo Visits Sulmona"
                width="120px"
              />
            </a>
          </div>
          {/* /logo */}
          <ul>
            <h3>Link utili</h3>

            <li>
              <a href="#">link 1</a>
            </li>
            <li>
              <a href="#">link 2</a>
            </li>
            <li>
              <a href="#">link 3</a>
            </li>
            <li>
              <a href="#">link 4</a>
            </li>
          </ul>
          <h1>Footer</h1>
        </div>
      </div>
      <p className="bg-white py-1 text-center">
        Made with <i className="fa-solid fa-heart"></i> by Mattia
      </p>
    </footer>
  );
}
