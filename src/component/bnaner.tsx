import '../index.css'

import assert from '../assets/logo.png'
import background from '../assets/bg-shadow.png'
import bnaner from '../assets/banner-main.png'

const Bnaner = ({coin}:{coin:number}) => {
    return (
    <>
          {/* Navbar */}

      <header className="boy">
        <div className="flex justify-between container mx-auto mt-12.5 mb-6">
          <img src={assert} alt="" />
          <div className=" flex items-center">
            <ul className=" flex gap-12">
              <li className="text-[16px] text-[#131313]">
                <a href="#">Home</a>
              </li>
              <li className="text-[16px] text-[#131313]">
                <a href="#">Fixture</a>
              </li>
              <li className="text-[16px] text-[#131313]">
                <a href="#">Teams</a>
              </li>
              <li className=" pr-12 text-[16px] text-[#131313]">
                <a href="#">Schedules</a>
              </li>
            </ul>

            <button className="text-[16px] text-[#131313] font-semibold py-3 px-5 inset-shadow-2xs shadow-md rounded-xl">
              {" "}
              <span className=' pr-1'>{coin}</span>  Coin <i className="fa-solid fa-coins text-[#E88102]"></i>
            </button>
          </div>
        </div>
      {/* Hero section */}

        <section className=" container mx-auto mb-22">
          <div
            className="w-full  h-137.5 bg-[#131313] mx-auto bg-cover bg-center bg-no-repeat rounded-3xl"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="flex flex-col justify-center items-center pt-17">
              <img className="h-50 w-[248.17px] mb-6" src={bnaner} alt="" />

              <p className=" text-[#FFFFFF] text-[40px] font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
              </p>
              <p className=" text-[#ffffff70] text-2xl font-medium pt-4">
                Beyond Boundaries Beyond Limits
              </p>
              <button className="py-6 px-1.5 border border-[#E7FE29] mt-4 rounded-2xl text-[16px] text-[#131313] font-bold cursor-pointer">
                <span className=" bg-[#E7FE29] py-5 px-8 rounded-2xl">
                  Claim Free Credit
                </span>
              </button>
            </div>
          </div>
        </section>
      </header>      
    </>
    );
};

export default Bnaner;