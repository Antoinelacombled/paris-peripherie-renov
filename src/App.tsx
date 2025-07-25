import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <ScrollControls damping={0.1}> */}
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <SmoothScroll> */}
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </SmoothScroll> */}
      </BrowserRouter>
    </TooltipProvider>
    {/* </ScrollControls> */}
  </QueryClientProvider>
);

export default App;
