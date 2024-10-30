"use client";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="w-full  py-4  bg-blue-gray-100">
      <div className=" w-full customWidth rounded p-6 mx-auto flex flex-row flex-wrap items-center justify-center  bg-white text-center md:justify-between">
        <Typography href="#">
          <a className="animate-text bg-gradient-to-r from-[#050C9C] via-[#3572EF] to-[#050C9C] bg-clip-text text-transparent  font-black">
            Rayan Bd
          </a>
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        All Rights reserved by RayanBd &copy; {currentYear}
      </Typography>
    </footer>
  );
};
export default Footer;
