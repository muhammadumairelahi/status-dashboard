import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type StatusCardProps = {
  name: string
  status: 'running' | 'down' | 'maintenance'
  type: 'website' | 'software'
}

export default function StatusCard({ name, status, type }: StatusCardProps) {
  const statusColor = {
    running: 'bg-green-500',
    down: 'bg-red-500',
    maintenance: 'bg-yellow-500'
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Badge variant="outline">{type}</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className={`h-3 w-3 rounded-full ${statusColor[status]}`} />
          <span className="text-sm font-medium capitalize">{status}</span>
        </div>
      </CardContent>
    </Card>
  )
}

