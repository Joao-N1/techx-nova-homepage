import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-2xl">
            <Input
              type="text"
              placeholder="Search consoles, smartphones, laptops..."
              className="rounded-r-none border-r-0 focus:ring-primary focus:border-primary"
            />
            <Button variant="default" className="rounded-l-none bg-gradient-primary hover:bg-primary-hover">
              <Search className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;