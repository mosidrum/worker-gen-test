import { Header, SideBar } from "@/component";

export default function Home() {
  return (
    <div className="grid-container">
      <header className="header">
        <Header />
      </header>
      <aside className="left-sidebar">
        <SideBar />
      </aside>
      <main className="main-content">Main Content</main>
      <aside className="right-sidebar">Right Sidebar</aside>
    </div>
  );
}
