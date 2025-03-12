import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";






const Footer=()=> {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-20 text-sm bg-white p-3 mx-auto' >
      <div>
      <img  src={assets.logo} className='w-32'/>
      <p className='text-gray-700 text-justify w-full md:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eaque nesciunt pariatur magnam quasi illo animi architecto natus explicabo nulla reiciendis excepturi quisquam? Voluptatibus facilis culpa placeat maiores dolorum repellat provident expedita sunt consequatur fugit dolor, voluptatem quos id tempore aliquid sed recusandae impedit nostrum? Ut, repudiandae beatae amet architecto perspiciatis blanditiis ipsam neque dolore quis maiores assumenda enim placeat quae exercitationem ipsum totam vitae animi a adipisci at eos dolorum fugiat. Facere reprehenderit optio dolores quia temporibus placeat iste!</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>CAMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-700'>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Careers</li>
          <li>NitAmit Stories</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GROUP COMPANIES</p>
        <ul className='flex flex-col gap-1 text-gray-700'>
          <li>Flip-kart</li>
          <li>Shopsy</li>
          <li>Myntra</li>
          <li>Cleartrip</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>HELP</p>
        <ul className='flex flex-col gap-1 text-gray-700'>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation &</li>
          <li>return</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>CONSUMER POLICY</p>
        <ul className='flex flex-col gap-1 text-gray-700'>
          <li>Cancellation &</li>
          <li>Return</li>
          <li>Terms of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div>
      <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-700'>
        <BsFillTelephoneInboundFill /><li> +91-913-569-7852</li>
        <MdMarkEmailRead /><li>contact@nitamit.com</li>
        </ul>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex gap-5'>
          <li><FaFacebook size={30}/></li>
          <li><FaSquareXTwitter size={30} /></li>
          <li><FaSquareInstagram size={30}/></li>
          <li><IoLogoYoutube size={30}/></li>
        </ul>

      </div>
      
    </div>
  )
}

export default Footer