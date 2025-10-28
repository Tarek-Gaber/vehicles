import { Container } from "@/components/ui/container";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";

export function OpportunitiesPage() {
  const [localSearchValue, setLocalSearchValue] = useState("");

  return (
    <Container>
      <div className="pt-20 mb-14">
        <h1 className="text-5xl font-semibold leading-15 mb-2">
          Opportunities
        </h1>
        <p className="text-xl text-gray-600">
          We are always looking for talented individuals to join our team.
        </p>
      </div>

      <div className="relative flex-1 min-w-[250px] max-w-sm mb-12">
        <Search className="absolute start-[21px] top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground -translate-x-1/2" />
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setLocalSearchValue(e.target.value)}
          className="ps-10.5 h-12 text-md"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-16">
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
      </div>
    </Container>
  );
}
