import Button from '@/components/button'
import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { LucideArrowRight, LucideCopy, LucideMail } from 'lucide-react'

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

      <div>
        <InputRoot>
          <InputIcon>
            <LucideMail className="size-5" />
          </InputIcon>
          <InputField placeholder="Digite seu email" />
        </InputRoot>
      </div>
    </main>
  )
}
