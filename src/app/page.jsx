//src/app/page.js
import Image from "next/image";
import styles from "./../styles/pages/Page.module.scss";
import Link from "next/link";
import Blockquote from "@/components/Blockquote";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Clients from "@/components/Clients";
import Blog from "@/components/Blog";
import Knows from "@/components/Knows";
import Prioritise from "@/components/Prioritise";

export default function Home() {
  return (
    <>
      <Hero/>
      {/* --------------------- */}
      <Blockquote/>
      {/* ---------------------- */}
      <Collections/>
      {/* ---------------------- */}
      <Clients/>
      {/* ---------------------- */}
      <Blog/>
      {/* ---------------------- */}
      <Knows/>
       {/* ---------------------- */}
      <Prioritise/>
    </>
  );
}
