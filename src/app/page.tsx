import Link from "next/link";
import Image from "next/image";
import Banner from "../Images/home_banner.png";
import Line from "../Images/line.png";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="nav-link">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="logo">
          <p>Debouche</p>
          <div className="border"></div>
        </div>
        <div className="nav-link">
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="container">
          <div className="left-col">
            <div className="left-content">
              <p>BECOME YOUR</p>
              <p>OWN SOMMELIER</p>
            </div>
            <div className="line">
              <Image src={Line} width={210} height={100} alt="line" />
            </div>
          </div>

          <div className="center-col">
            <Image src={Banner} width={540} height={480} alt="banner" />
          </div>

          <div className="right-col">
            <div className="right-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen
                book..................................
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
