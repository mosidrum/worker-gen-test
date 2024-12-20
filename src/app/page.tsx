"use client";

import { useState } from "react";
import {
  AgenSkill,
  DataTable,
  Header,
  MainBanner, RightSidebar,
  SideBar,
  SubHeader,
} from "@/component";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [hasOpen, setHasOpen] = useState<boolean>(true);

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="md:grid md:grid-cols-[200px_1fr_50px] min-h-screen">
          <div
            className={`
          fixed top-0 left-0 z-40 h-screen w-[200px] bg-white
          transition-transform duration-300 ease-in-out overflow-y-auto
          md:sticky md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
          >
            <SideBar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              onClickAgentSkill={() => setHasOpen((prev) => !prev)}
            />
          </div>

          <main className="p-6 md:pl-6 min-h-screen bg-white">
            <SubHeader
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <MainBanner />
            <DataTable />
          </main>

          <RightSidebar />
        </div>
      </div>
      {hasOpen && <AgenSkill onClose={() => setHasOpen(!hasOpen)} />}
    </>
  );
}
