export interface Website {
  name: string;
  status: 'running' | 'maintenance' | 'down';
  type: string;
  url?: string;
}

export let websites: Website[] = [
  { name: 'Katib.pk', status: 'running', type: 'website', url: 'https://katib.pk/' },
  { name: 'Kaliber.pk', status: 'running', type: 'website', url: 'https://kaliber.pk/' },
  { name: 'workable.aetasaal.com (1.0)', status: 'running', type: 'web application', url: 'https://workable.aetasaal.com/' },
  { name: 'tickindustries.com', status: 'running', type: 'website', url: 'https://tickindustries.com/'},
  { name: 'warq.pk', status: 'running', type: 'website', url: 'https://www.warq.pk/' },
  { name: 'atiquetraders.com', status: 'running', type: 'website', url: 'https://atiquetraders.com/'},
  { name: 'thepaperright.com', status: 'running', type: 'website', url: 'https://www.thepaperright.com/'},
  { name: 'printing.tickindustries.com', status: 'running', type: 'website', url: 'https://printing.tickindustries.com/'},
];

