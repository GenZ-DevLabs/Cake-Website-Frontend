import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-secondary flex items-center justify-between ">
      <div className="flex ml-[50px] lg:ml-[100px] 2xl:ml-[200px]">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="justify-center">
        <ul className="flex space-x-4 text-white mb-[8px] font-semibold">
          <li>
            <a href="#" className="hover:border-b-4 border-black">
              Home
            </a>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0}>Products</label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 bg-white text-black rounded-box w-[550px] "
              >
                <li className="text-[20px] ml-[20px] mt-[10px]">
                  Cakes
                  <ul className="p-2 bg-white text-black rounded-box grid grid-cols-3 text-sm">
                    <li>
                      <a href="#">Wedding Cakes</a>
                    </li>
                    <li>
                      <a href="#">Birthday Cakes</a>
                    </li>
                    <li>
                      <a href="#">Gateau Cakes</a>
                    </li>
                    <li>
                      <a href="#">Cup Cakes</a>
                    </li>
                    <li>
                      <a href="#">Other Cakes</a>
                    </li>
                    <li>
                      <a href="#">Custom Cakes</a>
                    </li>
                  </ul>
                </li>
                <li className="text-[20px] ml-[20px] mt-[10px]">
                  Party Accessories
                  <ul className="p-2 bg-white text-black rounded-box grid grid-cols-3 text-sm">
                    <li>
                      <a href="#">Balloons</a>
                    </li>
                    <li>
                      <a href="#">Cake Toppers</a>
                    </li>
                    <li>
                      <a href="#">Number Candles</a>
                    </li>
                    <li>
                      <a href="#">Hanging Banners</a>
                    </li>
                    <li>
                      <a href="#">Party Plates/Cups</a>
                    </li>
                    <li>
                      <a href="#">Party Hats</a>
                    </li>
                    <li>
                      <a href="#">Party Poppers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#" className="hover:border-b-4 border-black">
              Special Offers
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b-4 border-black">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b-4 border-black">
              About Us
            </a>
          </li>
        </ul>

        <div className="text-white w-full flex items-center justify-center">
          <input
            type="text"
            placeholder="Search our Products..."
            className="bg-white w-4/5 py-[9px] pl-[20px] rounded-l-full text-xs"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[40px] h-[34px] text-gray-500 bg-white pr-[20px] rounded-r-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="text-white mr-[50px] lg:mr-[100px] 2xl:mr-[200px]">
        <div className="flex mb-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-[30px]"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-xs">Call Us Now</h4>
          <h3>+94 71 594 5634</h3>
        </div>
      </div>
    </nav>
  );
}
