import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import style from "../styles/header.module.scss";
import Image from "next/image";
import aboutMe from "../images/Frame 2.png";
import work from "../images/f.png";
import center from "../images/Group 8.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";



export default function Home() {
  return (
    <Layout>
      <header className={style.header_conrainer}>
        <section className={style.header_left}>
          <Image src={aboutMe} alt="Picture of the author" width={150} />
        </section>
        <section className={style.header_center}>
          <div className={style.header_center_txt}>
            <h2>KEFAH RAjHA</h2>
            <h6>- WEB DEVELOPER</h6>
          </div>

          <Image src={center} alt="Picture of the author" width={500} />
        </section>
        <section className={style.header_right}>
          <Image src={work} alt="Picture of the author" width={150} />
        </section>
        <div className={style.header_button_left}>
          <IconContext.Provider value={{ color: "#6b6b6b", size: "10px" }}>
            <button>
              WHAT&rsquo;S APP <FaWhatsapp />
            </button>
            <button>
              LINKED IN <FaLinkedinIn />
            </button>
          </IconContext.Provider>
        </div>
        <div className={style.header_button_right}>
          <button>DESIGN</button>
          <button>PROGRMMING</button>
          <button>AWS CLOUD</button>
        </div>
      </header>
    </Layout>
  );
}
