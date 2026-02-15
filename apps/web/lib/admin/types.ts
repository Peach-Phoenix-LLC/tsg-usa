export interface AdminSettings {
  apiRateLimitPerMinute: number;
  apiTimeoutMs: number;
  productSyncIntervalMinutes: number;
  dbPoolMax: number;
  dbPoolMin: number;
  webhookEndpoint: string;
  agentOrchestratorUrl: string;
  supportRagUrl: string;
  requireMfaForAdmins: boolean;
  allowGuestCheckout: boolean;
  cacheEnabled: boolean;
  clearCacheOnDeploy: boolean;
  defaultRegion: 'us' | 'au';
  defaultCurrency: 'USD' | 'AUD';
}

export const defaultAdminSettings: AdminSettings = {
  apiRateLimitPerMinute: 120,
  apiTimeoutMs: 8000,
  productSyncIntervalMinutes: 15,
  dbPoolMax: 20,
  dbPoolMin: 4,
  webhookEndpoint: 'https://api.tsgabrielle.com/webhooks/shopify',
  agentOrchestratorUrl: process.env.AGENT_ORCHESTRATOR_URL ?? 'http://localhost:8080',
  supportRagUrl: process.env.SUPPORT_RAG_URL ?? 'http://localhost:8090',
  requireMfaForAdmins: true,
  allowGuestCheckout: true,
  cacheEnabled: true,
  clearCacheOnDeploy: false,
  defaultRegion: 'us',
  defaultCurrency: 'USD'
};
