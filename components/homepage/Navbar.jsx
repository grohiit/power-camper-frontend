import React, { useState, useEffect } from 'react'
import { HeaderCrossIcons2, ToggleIcon2 } from '../common/Icons'
import Image from 'next/image'
import 'react-dropdown/style.css'
import { useRouter } from 'next/router'
import NavbarDropdown from './NavbarDropdown'
import Link from 'next/link'

const Navbar = () => {
  const [navOverlay, setNavOverlay] = useState(false)

  useEffect(() => {
    if (navOverlay) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [navOverlay])

  return (
    <>
      {/* This is Nav for mobile */}
      {navOverlay && (
        <div className="fixed bg-[#fff] top-0 h-full flex flex-col justify-center items-center z-20 w-full ">
          <ul className="text-center">
            <li className="py-3" data-aos="fade-up" data-aos-duration="600">
              <span
                onClick={() => setNavOverlay(false)}
                className=" text-[#4F535D] nav_dropdown homepage_dropdown2 my-20 font-bold font-Balsamiq text-sm lg:text-base cursor-pointer"
                aria-current="page"
              >
                <NavbarDropdown />
              </span>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="800">
              <Link href="/#about">
                <a
                  onClick={() => setNavOverlay(false)}
                  className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
                  aria-current="page"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="1000">
              <Link href="/#contact">
                <a
                  onClick={() => setNavOverlay(false)}
                  className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
                  aria-current="page"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="py-3" data-aos="fade-up" data-aos-duration="1200">
              <div className="flex items-center justify-center w-full  sm:static sm:inset-auto  ">
                <a href="https://app.powercamper.com/login">
                  <button
                    type="button"
                    className="bg-[#3F503B] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	  text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B] hover:bg-transparent   ease-in-out duration-200"
                  >
                    Login
                  </button>
                </a>
                <a href="https://app.powercamper.com/request?clear=1">
                  <button
                    type="button"
                    className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	ml-[20px]  hover:bg-[transparent] hover:border-2 hover:border-[#754C29] hover:text-[#754C29] text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
                  >
                    Start
                  </button>
                </a>
              </div>
            </li>
          </ul>
          <div className="absolute top-0 right-0 px-5 py-6  ">
            <button onClick={() => setNavOverlay(false)}>
              <HeaderCrossIcons2 />
            </button>
          </div>
        </div>
      )}
      {/* This is Nav for Desktop */}
      <nav className={`bg-white w-full md:py-2 shadow-sm absolute top-0`}>
        <div className="max-w-7xl mx-auto px-2 py-[13px] sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center justify-between sm:items-center  ">
            <div className="  flex items-center  ">
              <Link href="/">
                <span className="cursor-pointer flex justify-center items-center">
                  <Image
                    className="w-full "
                    src="/img/svg/logotwo.svg"
                    alt="Logo"
                    width={65}
                    height={33}
                    layout="intrinsic"
                  />
                  <h2 className="font-Balsamiq text-[#764C29] text-lg font-bold leading-[19px] sm:leading-[24px] ml-1 sm:ml-3 ">
                    {/* remove text-xl and add text-sm and lg:text-base */}
                    Power Camper
                  </h2>
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className="   w-full hidden sm:flex justify-center">
                <span
                  className=" text-[#4F535D] nav_dropdown hover:text-[#754C29] homepage_dropdown2    px-3     whitespace-nowrap justify-center ease-in duration-200   font-Balsamiq text-sm lg:text-base "
                  aria-current="page"
                >
                  <NavbarDropdown />
                </span>
                <Link href="/#about">
                  <a className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  font-Balsamiq text-sm lg:text-base">
                    About
                  </a>
                </Link>
                <Link href="/#contact">
                  <a className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  hover:text-red   font-Balsamiq text-sm lg:text-base">
                    Contact
                  </a>
                </Link>
              </div>

              <div className="   hidden sm:flex items-center justify-end w-full   sm:static sm:inset-auto  ">
                <a href="https://app.powercamper.com/login">
                  <button
                    type="button"
                    className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
                  >
                    Login
                  </button>
                </a>
                <a href="https://app.powercamper.com/request?clear=1">
                  <button
                    type="button"
                    className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] hover:bg-[transparent] border-2 rounded-md	hover:border-2 hover:border-[#754C29] text-[#ffffff] hover:text-[#754C29] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
                  >
                    Start
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-center sm:hidden  ">
              <a href="https://app.powercamper.com/login">
                <button
                  type="button"
                  className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent    text-md lg:text-base  ease-in-out duration-200"
                >
                  Login
                </button>
              </a>
              <button
                onClick={() => setNavOverlay(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-label="toggle"
                aria-expanded="false"
              >
                <ToggleIcon2 />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

// const NavbarOld = () => {
//   const router = useRouter()
//   const [isSelectShow, setSelectShow] = useState(false)

//   const [navOverlay, setNavOverlay] = useState(false)

//   useEffect(() => {
//     if (navOverlay) {
//       document.body.classList.add('overflow-y-hidden')
//     } else {
//       document.body.classList.remove('overflow-y-hidden')
//     }
//   }, [navOverlay])

//   console.log(router.pathname, 'router.pathname')

//   return (
//     <>
//       {/* This is Nav for mobile */}
//       {navOverlay && (
//         <div className="fixed bg-[#fff] top-0 h-full flex flex-col justify-center items-center z-20 w-full ">
//           <ul className="text-center">
//             <li className="py-3" data-aos="fade-up" data-aos-duration="600">
//               <span
//                 // onClick={() => setNavOverlay(false)}
//                 className=" text-[#4F535D] nav_dropdown homepage_dropdown2 my-20 font-bold font-Balsamiq text-sm lg:text-base cursor-pointer"
//                 aria-current="page"
//               >
//                 <NavbarDropdown
//                   isSelectShow={isSelectShow}
//                   setSelectShow={setSelectShow}
//                 />
//               </span>
//             </li>
//             <li
//               className={`${isSelectShow ? 'invisible' : ''} py-3`}
//               data-aos="fade-up"
//               data-aos-duration="800"
//             >
//               <a
//                 href="/#about"
//                 onClick={() => setNavOverlay(false)}
//                 className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
//                 aria-current="page"
//               >
//                 About
//               </a>
//             </li>
//             <li
//               className={`${isSelectShow ? 'invisible' : ''} py-3`}
//               data-aos="fade-up"
//               data-aos-duration="1000"
//             >
//               <a
//                 href="/#contact"
//                 onClick={() => setNavOverlay(false)}
//                 className="text-[#4F535D]  font-bold font-Balsamiq text-sm lg:text-base"
//                 aria-current="page"
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="py-3" data-aos="fade-up" data-aos-duration="1200">
//               <div className="flex items-center justify-center w-full  sm:static sm:inset-auto  ">
//                 <button
//                   type="button"
//                   className="bg-[#3F503B] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	  text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:border hover:border-solid hover:border-[#243C5A] hover:text-[#3F503B] hover:bg-transparent   ease-in-out duration-200"
//                 >
//                   Login
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	ml-[20px]  hover:bg-[transparent] hover:border-2 hover:border-[#754C29] hover:text-[#754C29] text-[#ffffff] font-normal  font-Bubblegum border-transparent  text-md lg:text-base hover:opacity-70 ease-in-out duration-200"
//                 >
//                   Signup
//                 </button>
//               </div>
//             </li>
//           </ul>
//           <div className="absolute top-0 right-0 px-5 py-6  ">
//             <button onClick={() => setNavOverlay(false)}>
//               <HeaderCrossIcons2 />
//             </button>
//           </div>
//         </div>
//       )}
//       {/* This is Nav for Desktop */}
//       <nav className={`bg-white w-full md:py-2 shadow-sm absolute top-0`}>
//         <div className="max-w-7xl mx-auto px-2 py-[13px] sm:px-6 lg:px-8">
//           <div className="flex-1 flex items-center justify-between sm:items-center  ">
//             <div className="  flex items-center  ">
//               <span
//                 onClick={() => router.push('/')}
//                 className="cursor-pointer flex justify-center items-center"
//               >
//                 <Image
//                   className="w-full "
//                   src="/img/svg/logotwo.svg"
//                   alt="Logo"
//                   width={65}
//                   height={33}
//                   layout="intrinsic"
//                 />
//                 <h2 className="font-Balsamiq text-[#764C29] text-sm lg:text-base font-bold leading-[19px] sm:leading-[24px] ml-1 sm:ml-3 ">
//                   Power Camper
//                 </h2>
//               </span>
//             </div>
//             <div className="hidden sm:flex justify-center items-center">
//               <div className="   w-full hidden sm:flex justify-center">
//                 <span
//                   className=" text-[#4F535D] nav_dropdown hover:text-[#754C29] homepage_dropdown2    px-3     whitespace-nowrap justify-center ease-in duration-200   font-Balsamiq text-sm lg:text-base "
//                   aria-current="page"
//                 >
//                   <NavbarDropdown
//                     isSelectShow={isSelectShow}
//                     setSelectShow={setSelectShow}
//                   />
//                 </span>

//                 <a
//                   href="/#about"
//                   className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  font-Balsamiq text-sm lg:text-base"
//                 >
//                   About
//                 </a>

//                 <a
//                   href="/#contact"
//                   className="text-[#4F535D] px-3 flex  hover:text-[#754C29]  flex-col whitespace-nowrap justify-center ease-in duration-200  hover:text-red   font-Balsamiq text-sm lg:text-base"
//                 >
//                   Contact
//                 </a>
//               </div>

//               <div className="   hidden sm:flex items-center justify-end w-full   sm:static sm:inset-auto  ">
//                 <button
//                   type="button"
//                   className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
//                 >
//                   Login
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-[#754C29] py-[5px] px-[15px] lg:px-[23px] hover:bg-[transparent] border-2 rounded-md	hover:border-2 hover:border-[#754C29] text-[#ffffff] hover:text-[#754C29] font-normal  font-Bubblegum border-transparent  ml-[20px] text-md lg:text-base  ease-in-out duration-200"
//                 >
//                   Signup
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center sm:hidden  ">
//               <button
//                 type="button"
//                 className="bg-[#3F503B] hover:bg-[transparent] py-[5px] px-[15px] lg:px-[23px] border-2 rounded-md	hover:border-2 hover:border-[#3F503B]  hover:text-[#3F503B] text-[#ffffff] font-normal  font-Bubblegum border-transparent    text-md lg:text-base  ease-in-out duration-200"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setNavOverlay(true)}
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-label="toggle"
//                 aria-expanded="false"
//               >
//                 <ToggleIcon2 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }
