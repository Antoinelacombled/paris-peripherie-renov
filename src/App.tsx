import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from 'react-helmet-async';
// import SmoothScroll from "./components/SmoothScroll";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const SaintMande = lazy(() => import("./pages/SaintMande"));
const Vincennes = lazy(() => import("./pages/Vincennes"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Paris = lazy(() => import("./pages/Paris"));
const HautsDeSeine = lazy(() => import("./pages/HautsDeSeine"));
const Suisse = lazy(() => import("./pages/Suisse"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-paris-light">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-paris-orange"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/renovation-saint-mande" element={<SaintMande />} />
              <Route path="/renovation-vincennes" element={<Vincennes />} />
              <Route path="/renovation-paris" element={<Paris />} />
              <Route path="/renovation-hauts-de-seine" element={<HautsDeSeine />} />
              <Route path="/renovation-suisse" element={<Suisse />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
