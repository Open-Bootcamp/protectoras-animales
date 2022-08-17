import React from "react";
import logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src={logo} alt="GoodPaws logo" width={150} height={60} />
      </a>
    </Link>
  );
}
