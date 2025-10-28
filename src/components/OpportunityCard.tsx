import { TrendingUp } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { SiteOpportunity } from "@/api/types";

interface OpportunityCardProps {
  opportunity?: SiteOpportunity;
  isLoading?: boolean;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <Card className="bg-gray-50 py-8">
        <CardHeader className="px-8">
          <Skeleton className="w-14 h-14 mb-6 rounded-lg" />
          <Skeleton className="h-7 w-3/4 mb-2" />
          <Skeleton className="h-5 w-full mb-1" />
          <Skeleton className="h-5 w-5/6" />
        </CardHeader>
        <CardContent className="space-y-2 px-8">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-12" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-5 w-12" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4 px-8">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </CardFooter>
      </Card>
    );
  }

  if (!opportunity) {
    return null;
  }

  return (
    <Card className="bg-gray-50 py-8 h-full">
      <CardHeader className="px-8">
        <div className="rounded-lg border border-gray-300 p-2 mb-6 bg-white w-14 h-14 flex items-center justify-center">
          <TrendingUp className="h-7 w-7 text-gray-600" />
        </div>
        <CardTitle className="text-xl font-semibold leading-[30px]">
          {opportunity.title}
        </CardTitle>
        <CardDescription className="text-md text-gray-600 leading-[24px]">
          {opportunity.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 px-8 leading-[24px]">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Spend (SAR)</span>
          <span className="text-md font-semibold">
            {opportunity.spendRange}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Quantity (Units):</span>
          <span className="text-md font-semibold">
            {opportunity.quantityRange}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Local suppliers:</span>
          <span className="text-md font-semibold">
            {opportunity.localSuppliers}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Global suppliers:</span>
          <span className="text-md font-semibold">
            {opportunity.globalSuppliers}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 px-8 mt-auto">
        <Button
          variant="outlined"
          color="gray"
          className="flex-1"
          size="xl"
          asChild
        >
          <Link to={`/opportunities/${opportunity.id}`}>View Details</Link>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="flex-1"
          size="xl"
          asChild
        >
          <Link to={`/login?opportunityId=${opportunity.id}`}>Apply</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
