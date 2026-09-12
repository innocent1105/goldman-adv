import { useEffect } from "react";
import { Outlet, useLocation, createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Financial from "./pages/Financial";
import PublicSector from "./pages/PublicSector";
import AIICT from "./pages/AIICT";
import AssetManagement from "./pages/AssetManagement";
import Development from "./pages/Development";
import { ErrorPage } from "./pages/ErrorPage";
import { NotFound } from "./pages/NotFound";
import { Nav } from "./components/site/Nav";
import { Footer } from "./components/site/Footer";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppLayout() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollManager />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/approach", element: <Approach /> },
      { path: "/financial", element: <Financial /> },
      { path: "/public-sector", element: <PublicSector /> },
      { path: "/ai-ict", element: <AIICT /> },
      { path: "/asset-management", element: <AssetManagement /> },
      { path: "/development", element: <Development /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
