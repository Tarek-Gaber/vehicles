import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios';
import { endpoints } from '../endpoints';
import { queryKeys } from '../queryKeys';
import type {
  SiteOpportunity,
  SiteOpportunityListResponse,
  SiteOpportunityDetailResponse,
  SiteOpportunityFilters,
} from '../types';

// Mock data for site opportunities
const mockSiteOpportunities: SiteOpportunity[] = [
  {
    id: '1',
    title: 'EHV Power Transformers',
    description: 'High-voltage transformers with strong demand and localization potential in manufacturing and services.',
    spendRange: '12-16B',
    quantityRange: '550-750',
    localSuppliers: 0,
    globalSuppliers: 5,
    icon: 'TrendingUp',
    category: 'Energy Infrastructure',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    title: 'Solar Panel Systems',
    description: 'Renewable energy solutions with growing market demand and government support for local manufacturing.',
    spendRange: '8-12B',
    quantityRange: '2000-3000',
    localSuppliers: 2,
    globalSuppliers: 12,
    icon: 'Sun',
    category: 'Renewable Energy',
    createdAt: '2024-02-20T00:00:00Z',
    updatedAt: '2024-02-20T00:00:00Z',
  },
  {
    id: '3',
    title: 'Smart Grid Infrastructure',
    description: 'Advanced grid technology with high demand for modernization and digitalization of energy networks.',
    spendRange: '15-20B',
    quantityRange: '300-500',
    localSuppliers: 1,
    globalSuppliers: 8,
    icon: 'Network',
    category: 'Smart Infrastructure',
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z',
  },
  {
    id: '4',
    title: 'Wind Turbine Components',
    description: 'Critical components for wind energy generation with significant localization opportunities.',
    spendRange: '10-14B',
    quantityRange: '400-600',
    localSuppliers: 0,
    globalSuppliers: 6,
    icon: 'Wind',
    category: 'Renewable Energy',
    createdAt: '2024-01-25T00:00:00Z',
    updatedAt: '2024-01-25T00:00:00Z',
  },
  {
    id: '5',
    title: 'Battery Storage Systems',
    description: 'Energy storage solutions with rapidly growing demand for grid stability and renewable integration.',
    spendRange: '18-25B',
    quantityRange: '1000-1500',
    localSuppliers: 1,
    globalSuppliers: 10,
    icon: 'Battery',
    category: 'Energy Storage',
    createdAt: '2024-02-15T00:00:00Z',
    updatedAt: '2024-02-15T00:00:00Z',
  },
  {
    id: '6',
    title: 'Electric Vehicle Charging Stations',
    description: 'EV infrastructure with government backing and growing market adoption across urban areas.',
    spendRange: '5-8B',
    quantityRange: '3000-5000',
    localSuppliers: 3,
    globalSuppliers: 15,
    icon: 'Zap',
    category: 'Transportation',
    createdAt: '2024-03-05T00:00:00Z',
    updatedAt: '2024-03-05T00:00:00Z',
  },
  {
    id: '7',
    title: 'Water Desalination Plants',
    description: 'Essential water infrastructure with critical need for capacity expansion and modernization.',
    spendRange: '20-30B',
    quantityRange: '50-100',
    localSuppliers: 2,
    globalSuppliers: 7,
    icon: 'Droplet',
    category: 'Water Infrastructure',
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: '8',
    title: 'Industrial Automation Systems',
    description: 'Advanced automation solutions for manufacturing sector with strong localization potential.',
    spendRange: '9-13B',
    quantityRange: '800-1200',
    localSuppliers: 4,
    globalSuppliers: 20,
    icon: 'Settings',
    category: 'Manufacturing',
    createdAt: '2024-02-28T00:00:00Z',
    updatedAt: '2024-02-28T00:00:00Z',
  },
  {
    id: '9',
    title: 'Telecommunications Infrastructure',
    description: '5G network equipment with urgent demand for nationwide coverage expansion.',
    spendRange: '25-35B',
    quantityRange: '10000-15000',
    localSuppliers: 5,
    globalSuppliers: 9,
    icon: 'Signal',
    category: 'Telecommunications',
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API function to simulate fetching site opportunities
async function fetchSiteOpportunities(
  filters?: SiteOpportunityFilters
): Promise<SiteOpportunityListResponse> {
  // Simulate network delay
  await delay(500);

  let filteredData = [...mockSiteOpportunities];

  // Apply search filter
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filteredData = filteredData.filter(
      (opp) =>
        opp.title.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower) ||
        opp.category?.toLowerCase().includes(searchLower)
    );
  }

  const paginatedData = filteredData;

  // In real implementation, this would be:
  // const response = await axiosInstance.get<SiteOpportunityListResponse>(
  //   endpoints.siteOpportunities.list,
  //   { params: filters }
  // );
  // return response.data;

  return {
    data: paginatedData,
    total: filteredData.length,
    page: 1,
    limit: filteredData.length,
  };
}

// Mock API function to simulate fetching single opportunity
async function fetchSiteOpportunity(
  id: string | number
): Promise<SiteOpportunityDetailResponse> {
  // Simulate network delay
  await delay(300);

  const opportunity = mockSiteOpportunities.find((opp) => opp.id === String(id));
  
  if (!opportunity) {
    throw new Error('Site opportunity not found');
  }

  // In real implementation, this would be:
  // const response = await axiosInstance.get<SiteOpportunityDetailResponse>(
  //   endpoints.siteOpportunities.detail(id)
  // );
  // return response.data;

  return {
    data: opportunity,
  };
}

/**
 * Get site opportunities list query
 */
export const useSiteOpportunities = (filters?: SiteOpportunityFilters) => {
  return useQuery({
    queryKey: queryKeys.siteOpportunities.list(filters),
    queryFn: async (): Promise<SiteOpportunityListResponse> => {
      // Using mock data for now
      return fetchSiteOpportunities(filters);
      
      // Real implementation (when backend is ready):
      // const response = await axiosInstance.get<SiteOpportunityListResponse>(
      //   endpoints.siteOpportunities.list,
      //   { params: filters }
      // );
      // return response.data;
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

/**
 * Get site opportunity detail query
 */
export const useSiteOpportunity = (id: string | number, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.siteOpportunities.detail(id),
    queryFn: async (): Promise<SiteOpportunityDetailResponse> => {
      // Using mock data for now
      return fetchSiteOpportunity(id);
      
      // Real implementation (when backend is ready):
      // const response = await axiosInstance.get<SiteOpportunityDetailResponse>(
      //   endpoints.siteOpportunities.detail(id)
      // );
      // return response.data;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
