import React from "react";
import Link from "next/link";

export default function MenuItem({ to, title }) {
  return (
    <Link href={to} color={"#144353"}>
      <a>{title}</a>
    </Link>
  );
}
