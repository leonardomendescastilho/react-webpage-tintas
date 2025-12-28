import { Helmet } from 'react-helmet-async'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <Helmet>
        <title>Webpage Tintas - Início</title>
        <meta name="description" content="Bem-vindo à Webpage Tintas. Encontre as melhores tintas para sua casa." />
      </Helmet>

      <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-4xl font-bold">Webpage Tintas</h1>
        <p className="text-muted-foreground">Site para empresa de tintas</p>
        <div className="flex gap-2">
          <Button>Clique aqui</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </>
  )
}

export default App
