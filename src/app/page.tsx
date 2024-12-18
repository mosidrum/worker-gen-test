import {
  DataTable,
  Header,
  MainBanner,
  RightSideBar,
  SideBar,
  SubHeader,
} from "@/component";

export default function Home() {
  return (
    <div className="grid-container">
      <header className="header">
        <Header />
      </header>
      <aside className="left-sidebar">
        <SideBar />
      </aside>
      <main className="main-content">
        <SubHeader />
        <MainBanner />
        <DataTable />
      </main>
      <aside className="right-sidebar">
        <RightSideBar />
      </aside>
    </div>
  );
}
