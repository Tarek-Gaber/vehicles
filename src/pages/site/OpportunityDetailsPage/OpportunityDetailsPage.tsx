import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import {
  ArrowLeft,
  Globe,
  HardHat,
  Home,
  Landmark,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";
import opportunityImage from "@/assets/images/temp/opportunity-details.png";
import {
  CurrencyDollarCircle,
  Data,
  Flag02,
  Globe04,
  Home01,
  Lightbulb02,
  Settings01,
  CheckCircle,
  User01,
} from "@untitledui/icons";

export function OpportunityDetailsPage() {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="py-8 md:py-12 lg:py-16 xl:py-20">
          <a
            href="#"
            className="text-primary font-semibold flex items-center mb-6"
          >
            <ArrowLeft className="w-5 h-5 me-1.5" />
            Back to Opportunities
          </a>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-8 gap-4 md:gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-3 md:mb-2">
                EHV Power Transformers
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-6">
                High-voltage transformers with strong demand and localization
                potential in manufacturing and services.
              </p>
            </div>
            <Button size="md" asChild className="w-full md:w-auto md:shrink-0">
              <Link to="/login?opportunityId=1">Apply Now</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-12 lg:pb-16">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-3 md:mb-2">
              Forecasted SEC Demand (2024 - 2030)
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-6 mb-4 md:mb-6">
              * Demand numbers provided here are estimated and subject to change
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerItemVariants}>
                <Card className="bg-gray-50">
                  <CardContent>
                    <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                      <CurrencyDollarCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600 leading-5 mb-2">
                      Spend (SAR)
                    </p>
                    <div className="text-3xl font-semibold leading-9">
                      2.5-4B
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={staggerItemVariants}>
                <Card className="bg-gray-50">
                  <CardContent>
                    <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                      <Data className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600 leading-5 mb-2">
                      Quantity (Units)
                    </p>
                    <div className="text-3xl font-semibold leading-9">
                      300-500
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mt-8 md:mt-10 lg:mt-12">
              SEC Current Supplier Base
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerItemVariants}>
                <Card className="bg-gray-50">
                  <CardContent>
                    <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                      <Flag02 className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600 leading-5 mb-2">
                      Local
                    </p>
                    <div className="text-3xl font-semibold leading-9">0</div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={staggerItemVariants}>
                <Card className="bg-gray-50">
                  <CardContent>
                    <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                      <Globe04 className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600 leading-5 mb-2">
                      Global
                    </p>
                    <div className="text-3xl font-semibold leading-9">5</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-[556px] lg:max-w-[50%] lg:shrink-0">
            <img
              src={opportunityImage}
              alt="EHV Power Transformer"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-5 lg:mb-6">
            Localization Opportunity Areas
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6"
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={staggerItemVariants}>
              <Card className="bg-gray-50 min-h-[300px]">
                <CardContent>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                    <Lightbulb02 className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 leading-6 mb-4">
                    Design & Engineering
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Card className="bg-gray-50 min-h-[300px]">
                <CardContent>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                    <Lightbulb02 className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 leading-6 mb-4">
                    Sourcing
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Silicon steel
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Card className="bg-gray-50 min-h-[300px]">
                <CardContent>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                    <Lightbulb02 className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 leading-6 mb-4">
                    Manufacturing
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Core manufacturing
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Winding of Cu/Al conductors
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Insulation wrapping
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Coil drying
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Tank fabrication etc.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <Card className="bg-gray-50 min-h-[300px]">
                <CardContent>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                    <Lightbulb02 className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 leading-6 mb-4">
                    Assembly & Testing
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Assemble the reactor with core, windings, and other
                        accessories
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-gray-600 leading-5">
                        Conduct required tests to ensure safety and performance
                        standards are met.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <Card className="bg-gray-50 min-h-[300px]">
                <CardContent>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 bg-orange-500 rounded-lg shadow-xs outline outline-2 outline-offset-[-2px] outline-white/12 border border-white/10">
                    <Lightbulb02 className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 leading-6 mb-4">
                    After Sales Services
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
