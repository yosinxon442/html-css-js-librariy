import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HtmlQuiz from "./pages/HtmlQuiz";
import CssQuiz from "./pages/CssQuiz";
import JsQuiz from "./pages/JsQuiz";
import Algorithms from "./pages/Algorithms";
import Kutubxona from "./pages/Kutubxona";
import KutubxonaHtml from "./pages/KutubxonaHtml";
import KutubxonaCss from "./pages/KutubxonaCss";
import KutubxonaJs from "./pages/KutubxonaJs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kutubxona" element={<Kutubxona />} />
          <Route path="/kutubxona/html" element={<KutubxonaHtml />} />
          <Route path="/kutubxona/css" element={<KutubxonaCss />} />
          <Route path="/kutubxona/javascript" element={<KutubxonaJs />} />
          <Route path="/html" element={<HtmlQuiz />} />
          <Route path="/css" element={<CssQuiz />} />
          <Route path="/javascript" element={<JsQuiz />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
