import React from 'react';

interface Website {
  name: string;
  status: 'running' | 'maintenance' | 'down';
  type: string;
}

interface StatusGridProps {
  websites: Website[];
}

const StatusGrid: React.FC<StatusGridProps> = ({ websites }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {websites.map((website, index) => (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">{website.name}</h3>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              {website.type}
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex items-center space-x-2">
              <div className={`h-3 w-3 rounded-full ${website.status === 'running' ? 'bg-green-500' : website.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium capitalize">{website.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusGrid;

