import logo from "./logo.svg";
import button from "daisyui";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //    </header>  */}
    // </div>
    <main>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>FACILITIES</a>
              </li>
              <li>
                <a>ROOMS</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <img
            src="/logo/logo.png"
            alt="logo"
            style={{
              width: "100px",
              height: "90px",
            }}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>FACILITIES</a>
            </li>
            <li>
              <a>ROOMS</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">LOGIN</a>
        </div>
      </div>

      <div className="hero min-h-screen">
        <img src="/bg/background.jpg" alt="bg" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Velvet Hotel</h1>
            <p className="mb-5">Enjoy Your Vacation and Relax Your Mind</p>
            <button className="btn btn-base-300">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/bg/welcome.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">WELCOME !</h1>
            <p className="py-6">
              Selamat Datang di Velvet Hotel,
              <br />
              Hotel bintang 4 dengan pelayanan lengkap dan view yang indah
            </p>
            <button className="btn btn-neutral">Learn More</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="carousel rounded-box ">
            <div className="carousel-item w-50">
              <img src="/rooms/gym1.jpg" 
              className="w-full"
               alt="rooms" />
            </div>
            <div className="carousel-item w-50">
              <img
                src="/rooms/playground.jpeg"
                className="w-full"
                alt="rooms"
              />
            </div>
            <div className="carousel-item w-50">
              <img
                src="/rooms/kolamrenang.jpg"
                className="w-full"
                alt="room"
              />
            </div>
            <div className="carousel-item w-50">
              <img
                src="/rooms/minizoo.jpg"
                className="w-full"
                alt="rooms"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">FACILITIES</h1>
            <p className="py-6">
              Bersantai dan berjelajah: Temukan berbagai fasilitas kami yang
              seru dan menarik! 
              Jelajahi fasilitas dari hotel ramah keluarga
              terfavorit! Nikmati kolam renang yang menyegarkan,
              taman bermain anak yang seru dan berwarna, kebun binatang mini
              yang lucu dan menggemaskan, serta fasilitas keluarga lainnya yang
              menawarkan kenyamanan dan pengalaman yang luar biasa.
            </p>
            <button className="btn btn-neutral">Jelajahi Lebih Lanjut</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="carousel rounded-box">
            <div className="carousel-item w-full">
              <img
                src="/rooms/family room.jpg"
                className="w-full"
                alt="rooms"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/rooms/standar room.jpg"
                className="w-full"
                alt="rooms"
              />
            </div>
            <div className="carousel-item w-full">
              <img src="/rooms/suite room.jpg" className="w-full" alt="rooms" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">ROOMS</h1>
            <p className="py-6">
              Jelajahi 3 pilihan tipe kamar kami, yang sempurna untuk kebutuhan
              bisnis atau bersantai yang memberikan perpaduan kenyamanan modern
              dan elegan untuk semua kebutuhan anda. Dilengkapi dengan berbagai
              fasilitas yang lengkap dan nyaman
            </p>
            <button className="btn btn-neutral">Lihat Semua Kamar</button>
          </div>
        </div>
      </div>
      <footer className="footer bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Facilities</a>
    <a className="link link-hover">Rooms</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About </a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Me</h6>
    <a className="link link-hover">JL.Jeruk Manis No.10, Kecamatan Sukorejo, Kabupaten Kendal
      Kota Semarang, Jawa Tengah
    </a>
    <a className="link link-hover">Velvet.Hotel@gmail.com</a>
    <a className="link link-hover">+62345678912</a>
  </nav>
</footer>
<footer className="footer bg-base-300 text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      VELVET HOTEL Ltd.
      <br />
      Providing reliable tech since 2024
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    </main>
  );
}

export default App;
