import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';
import Resume from '@/pages/Resume';

function Layout() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans flex flex-col">
      <Nav />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}