import StatusCard from './StatusCard'

type Website = {
  name: string
  status: 'running' | 'down' | 'maintenance'
  type: 'website' | 'software'
}

type StatusGridProps = {
  websites: Website[]
}

export default function StatusGrid({ websites }: StatusGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {websites.map((website) => (
        <StatusCard key={website.name} {...website} />
      ))}
    </div>
  )
}

