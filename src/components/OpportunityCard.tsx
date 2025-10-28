import { TrendingUp } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const OpportunityCard: React.FC = () => {
  return (
    <Card className="bg-gray-50 py-8">
      <CardHeader className="px-8">
        <div className="rounded-lg border border-gray-300 p-2 mb-6 bg-white w-14 h-14 flex items-center justify-center">
          <TrendingUp className="h-7 w-7 text-gray-600" />
        </div>
        <CardTitle className="text-xl font-semibold leading-[30px]">
          EHV Power Transformers
        </CardTitle>
        <CardDescription className="text-md text-gray-600 leading-[24px]">
          High-voltage transformers with strong demand and localization
          potential in manufacturing and services.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 px-8 leading-[24px]">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Spend (SAR)</span>
          <span className="text-md font-semibold">12-16B</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Quantity (Units):</span>
          <span className="text-md font-semibold">550-750</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Local suppliers:</span>
          <span className="text-md font-semibold">0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Global suppliers:</span>
          <span className="text-md font-semibold">5</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 px-8">
        <Button variant="outlined" color="gray" className="flex-1">
          View Details
        </Button>
        <Button variant="contained" color="primary" className="flex-1">
          Apply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
