/**
 * Site Opportunities API types
 */

export interface SiteOpportunity {
  id: string | number;
  title: string;
  description: string;
  spendRange: string;
  quantityRange: string;
  localSuppliers: number;
  globalSuppliers: number;
  icon?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SiteOpportunityListResponse {
  data: SiteOpportunity[];
  total: number;
  page: number;
  limit: number;
}

export interface SiteOpportunityDetailResponse {
  data: SiteOpportunity;
}

export interface SiteOpportunityFilters {
  search?: string;
  page?: number;
  limit?: number;
}
