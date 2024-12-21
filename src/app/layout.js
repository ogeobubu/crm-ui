"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { metadata } from "./metadata";
import "./globals.css";
import { useState } from "react";
import Head from "next/head";

metadata;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  {
    title: "",
    links: [
      {
        name: "Home",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Recent",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Planned",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
  {
    title: "My work",
    links: [
      {
        name: "Sales accelerator",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Dashboards",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Activities",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        name: "Accounts",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Contacts",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
  {
    title: "Sales",
    links: [
      {
        name: "Leads",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Opportunities",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Competitors",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
  {
    title: "Collateral",
    links: [
      {
        name: "Quotes",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Orders",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Invoices",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Products",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Sales Literature",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
  {
    title: "Marketing",
    links: [
      {
        name: "Marketing lists",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
      {
        name: "Quick Campaigns",
        icon: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z",
      },
    ],
  },
];

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:hidden absolute top-[90px]">
          <button onClick={toggleSidebar} className="p-2 text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z" />
            </svg>
          </button>
        </div>

        <div className="flex h-screen bg-gray-100">
          <aside
            className={`fixed md:top-14 top-16 left-0 w-56 h-full bg-[#EFEFEF] shadow-md p-4 overflow-y-auto transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:relative md:w-56`}
          >
            <div className="md:hidden absolute top-3 right-5 text-gray-500 text-[20px]">
              <button onClick={toggleSidebar}>X</button>
            </div>
            {navLinks.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-xs mt-4 mb-2">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="text-[#727272] flex items-center py-2 hover:bg-white transition duration-200"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d={link.icon} />
                      </svg>
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <div className="flex flex-col flex-1 md:mt-0 mt-8">
            <header className="bg-[#00102B] text-[#617084] shadow-md p-4 fixed top-0 left-0 w-full z-20 flex items-center justify-between flex-wrap">
              <div className="flex items-center gap-3 text-gray-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z" />
                </svg>
                <h1 className="text-xl font-bold">Dynamics 365</h1>
                <span className="hidden md:inline">| Sales hub</span>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-1h2v1zm0-2H9V8h2v3z" />
                    </svg>
                  ))}
                <div className="rounded-full w-6 h-6 flex justify-center items-center bg-white relative">
                  <span>M</span>
                  <div className="rounded-full bg-green-500 w-2 h-2 absolute bottom-0 right-0"></div>
                </div>
              </div>
            </header>

            <main className="flex-1 p-6 pt-24 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
