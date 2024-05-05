import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function Footer() {
    
    const sections = [
        {
          title: "Company",
          items: ["About", "Blog", "Jobs", "Press", "Partners"],
        },
        {
          title: "Resources",
          items: ["Pricing", "Documentation", "Guides", "API Status"],
        },
        {
          title: "Quick Links",
          items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
        },
        {
          title: "More",
          items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
        },
      ];
      const items = [
        { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
        { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
        { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
        { name: "Github", icon: FaGithub, link: "https://github.com/" },
      ];
  return (
    <div className="w-full bg-slate-900 text-gray-300 flex flex-col outline ">
     <div className='flex flex-row flex-wrap items-center py-8 px-4 justify-center gap-20' >

        <div className="flex flex-col justify-center">
            <p className="font-bold uppercase"> <span className="text-white font-bold border-2 rounded-xl border-white p-2">Fling</span></p>
            <p className="py-4">
            Short Description.
            </p>
            <div className="flex gap-3 justify-center">
            {items.map((x, index) => {
                return <x.icon key={index} className="hover:text-white" />;
            })}
            </div>
        </div>

        <div className="flex flex-row flex-wrap md:gap-6 gap-9 justify-center">
        {sections.map((section, index) => (
            <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
                {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                    {item}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </div>

    <div className="flex max-w-[1240px] px-2 py-4 mx-auto text-center text-gray-500">
      <p className="py-4">Made with ❤️ in India, Fling © 2024</p>
    </div>
  </div>
  );
}

export default Footer;
