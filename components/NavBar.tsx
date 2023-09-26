import Image from "next/image";
import { FaSearch, FaCartPlus, FaUser } from "react-icons/fa";

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
          <FaSearch className="w-[40px] h-[34px] text-gray-500 bg-white pr-[20px] rounded-r-full" />
        </div>
      </div>
      <div className="text-white mr-[50px] lg:mr-[100px] 2xl:mr-[200px]">
        <div className="flex mb-[8px]">
          <FaCartPlus className="w-6 h-6 mr-[30px]" />
          <FaUser className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs">Call Us Now</h4>
          <h3>+94 71 594 5634</h3>
        </div>
      </div>
    </nav>
  );
}
