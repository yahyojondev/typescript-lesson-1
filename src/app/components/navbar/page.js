import Link from "next/link";
import React from "react";
import navlogo from "../../assets/images/logo.png";
import Image from "next/image";
import { AiFillPieChart } from "react-icons/ai";
import { LuServer } from "react-icons/lu";
import { BsLightbulbFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__top">
            <div className="navbar__top__title">
              <Image src={navlogo} alt="rasm" />
              <h3>Dashboard</h3>
            </div>
            <ul className="navbar__list">
              <li>
                <Link href={"/"}>
                  <AiFillPieChart />
                  Products
                </Link>
              </li>
              <li>
                <Link href={"/users"}>
                  <LuServer />
                  Users
                </Link>
              </li>
              <li>
                <Link href={"./posts"}>
                  <BsLightbulbFill />
                  Posts
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <IoMdContacts />
                  Contacts
                </Link>
              </li>
              <li>
                <Link href={"/agents"}>
                  <FcBusinessman />
                  Agents
                </Link>
              </li>
              <li>
                <Link href={"./articles"}>
                  <BsFillClipboard2DataFill />
                  Articles
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__bottom">
            <ul className="navbar__bottom__list">
              <li>
                <VscColorMode />
                Change mode
              </li>
              <li>
                <MdLogout />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
