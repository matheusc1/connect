import Button from '@/components/button'
import IconButton from '@/components/icon-button'
import { LucideArrowRight, LucideCopy } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <LucideArrowRight />
      </Button>

      <IconButton>
        <LucideCopy />
      </IconButton>
    </main>
  )
}
