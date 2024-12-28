export interface Website {
  name: string;
  status: 'running' | 'maintenance' | 'down';
  type: string;
}

export const websites: Website[] = [
  { name: 'Main Website', status: 'running', type: 'website' },
  { name: 'Customer Portal', status: 'running', type: 'website' },
  { name: 'API Service', status: 'running', type: 'software' },
  { name: 'Admin Dashboard', status: 'maintenance', type: 'website' },
  { name: 'Mobile App Backend', status: 'running', type: 'software' },
  { name: 'Analytics Platform', status: 'down', type: 'software' },
  { name: 'Email Service', status: 'running', type: 'software' },
  { name: 'Payment Gateway', status: 'running', type: 'software' },
  { name: 'Support Ticketing System', status: 'maintenance', type: 'software' },
];

