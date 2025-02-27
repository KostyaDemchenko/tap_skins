// "use client";

import React from "react";
// import Nav from "@/src/components/Nav";
import Link from "next/link";

import "./globals.scss";
import "./not-found.scss";

export default function Custom404() {
  return (
    <>
      <div className='page-not-found'>
        <div className='description-container'>
          <h1 className='title'>404</h1>
          <p className='description'>
            Oops! The page you are looking for does not exist.
          </p>
        </div>
        <Link className='btn-secondary-35' href='/'>
          Go backs
        </Link>
      </div>
      {/* <Nav /> */}
    </>
  );
}
