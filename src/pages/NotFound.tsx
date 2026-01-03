import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-24 bg-background min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-lavender/30 flex items-center justify-center mx-auto mb-8 animate-float">
              <span className="font-display text-4xl font-bold text-lavender-deep">404</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
