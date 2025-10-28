import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronLeft,
  Globe,
  HardHat,
  Home,
  Landmark,
  Wrench,
} from "lucide-react";

export function OpportunityDetailsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a href="#" className="text-blue-600 flex items-center mb-6">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Opportunities
        </a>
        <div className="flex justify-between items-start mb-4 gap-2">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              EHV Power Transformers
            </h1>
            <p className="mt-2 text-gray-600">
              High-voltage transformers with strong demand and localization
              potential in manufacturing and services.
            </p>
          </div>
          <Button>Apply Now</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mt-10">
              Forecasted SEC Demand (2024 - 2030)
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              * Demand numbers provided here are estimated and subject to change
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Spend (SAR)
                  </CardTitle>
                  <Landmark className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.5-4B</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Quantity (Units)
                  </CardTitle>
                  <Wrench className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">300-500</div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10">
              SEC Current Supplier Base
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Local</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Global</CardTitle>
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1621967838308-28a1b3f6d622?q=80&w=1974&auto=format&fit=crop"
              alt="EHV Power Transformer"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12">
          Localization Opportunity Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          <Card>
            <CardHeader>
              <HardHat className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Design & Engineering</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Sourcing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" /> Silicon
                  steel
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1 xl:col-span-1">
            <CardHeader>
              <Wrench className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" /> Core
                  manufacturing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" /> Winding
                  of Cu/Al conductors
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />{" "}
                  Insulation wrapping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" /> Coil
                  drying
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" /> Tank
                  fabrication etc.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Assembly & Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />{" "}
                  Assemble the reactor with core, windings, and other
                  accessories
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />{" "}
                  Conduct required tests to ensure safety and performance
                  standards are met.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>After Sales Services</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
