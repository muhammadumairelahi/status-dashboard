import StatusGrid from '@/components/StatusGrid'
import { websites } from '@/data/websites'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Website & Software Status Dashboard</h1> */}
      <StatusGrid websites={[...websites]} />
    </main>
  )
}

