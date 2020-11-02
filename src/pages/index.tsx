import Link from "next/link";
import React from "react";
// ______________________________________________________
//
const Page = () => (
  <>
    <h1>Context ReRender Patterns</h1>
    <ul>
      <li>
        <Link href="/monolith-provider">
          <a>monolith-provider</a>
        </Link>
      </li>
      <li>
        <Link href="/monolith-parent">
          <a>monolith-parent</a>
        </Link>
      </li>
      <li>
        <Link href="/micro-hook">
          <a>micro-hook</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Page;
