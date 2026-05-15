import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import IndexV2 from "./pages/IndexV2.tsx";
import Enquiries from "./pages/Enquiries.tsx";
import Approvals from "./pages/Approvals.tsx";
import Reports from "./pages/Reports.tsx";
import NotFound from "./pages/NotFound.tsx";
import RequesterDashboard from "./pages/requester/Dashboard.tsx";
import RequesterBookings from "./pages/requester/Bookings.tsx";
import RequesterEnquiries from "./pages/requester/Enquiries.tsx";
import RequesterWishlist from "./pages/requester/Wishlist.tsx";
import RequesterProfile from "./pages/requester/Profile.tsx";
import RequesterSupport from "./pages/requester/Support.tsx";
import { DesignToggle } from "./components/DesignToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/enquiries" element={<Enquiries />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/requester" element={<RequesterDashboard />} />
          <Route path="/requester/bookings" element={<RequesterBookings />} />
          <Route path="/requester/enquiries" element={<RequesterEnquiries />} />
          <Route path="/requester/wishlist" element={<RequesterWishlist />} />
          <Route path="/requester/profile" element={<RequesterProfile />} />
          <Route path="/requester/support" element={<RequesterSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <DesignToggle />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
