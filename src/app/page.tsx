"use client";

import { useState } from "react";
import {
  DataTable,
  Header,
  MainBanner,
  RightSideBar,
  SideBar,
  SubHeader,
} from "@/component";

export default function Home() {
  const [hasSidebar, setHasSidebar] = useState(false);

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className={`grid-container ${!hasSidebar ? "no-sidebar" : ""}`}>
        {hasSidebar && (
          <aside className="left-sidebar">
            <SideBar />
          </aside>
        )}
        <main className="main-content">
          <SubHeader />
          <MainBanner />
          <DataTable />
        </main>
        <aside className="right-sidebar">
          <RightSideBar />
        </aside>
      </div>
    </>
  );
}
