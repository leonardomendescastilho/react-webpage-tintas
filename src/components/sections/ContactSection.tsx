import { motion } from "motion/react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FaCheck } from "react-icons/fa6"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Textarea } from "@/ui/textarea"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"
import { staggerContainer, fadeUp, viewport } from "@/lib/motion"
import contactImage from "@/assets/contact-image.png"

interface ContactSectionProps {
  id?: string
  className?: string
}

const servicoOptions = [
  "Pintura Residencial",
  "Pintura Comercial",
  "Texturas Especiais",
  "Restauração",
  "Outro",
] as const

const contactSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email("E-mail inválido"),
  telefone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .regex(/^[\d\s()+-]+$/, "Telefone inválido"),
  servico: z
    .string()
    .min(1, "Selecione um tipo de serviço"),
  mensagem: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactSection = ({ id = "contato", className }: ContactSectionProps) => {
  const { textos } = siteConfig

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: "",
    },
  })

  const servicoSelecionado = useWatch({ control, name: "servico" })

  const onSubmit = async (data: ContactFormData) => {
    // Simula envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Formulário enviado:", data)
    reset()
  }

  return (
    <section
      id={id}
      aria-label="Seção de contato"
      className={cn("py-20 md:py-28", className)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda - Imagem */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="flex items-center justify-center h-"
          >
            <motion.img
              src={contactImage}
              alt="Pintor profissional com rolo de pintura e celular"
              className="w-full h-full object-cover"
              // whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Coluna Direita - Formulário */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="flex flex-col"
          >
            {/* Cabeçalho */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-muted rounded-full text-muted-foreground">
                {textos.contato.tag}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {textos.contato.titulo}
              </h2>
              <p className="text-muted-foreground">
                {textos.contato.subtitulo}
              </p>
            </motion.div>

            {/* Formulário */}
            <motion.div variants={fadeUp} className="flex-1">
              {isSubmitSuccessful ? (
                <div className="h-full p-6 md:p-8 rounded-2xl bg-muted/50 border border-border text-center flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                    <FaCheck className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => reset()}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-6 md:p-8 rounded-2xl bg-muted/50 border border-border"
                >
                  <div className="space-y-6">
                    {/* Nome */}
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Seu nome"
                        className={cn("bg-background", errors.nome && "border-destructive")}
                        {...register("nome")}
                      />
                      {errors.nome && (
                        <p className="mt-1 text-sm text-destructive">{errors.nome.message}</p>
                      )}
                    </div>

                    {/* Email e Telefone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className={cn("bg-background", errors.email && "border-destructive")}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                          Telefone
                        </label>
                        <Input
                          id="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className={cn("bg-background", errors.telefone && "border-destructive")}
                          {...register("telefone")}
                        />
                        {errors.telefone && (
                          <p className="mt-1 text-sm text-destructive">{errors.telefone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Tipo de Serviço */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Tipo de serviço
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicoOptions.map((servico) => (
                          <button
                            key={servico}
                            type="button"
                            onClick={() => setValue("servico", servico, { shouldValidate: true })}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                              servicoSelecionado === servico
                                ? "bg-primary text-primary-foreground"
                                : "bg-background border border-border hover:border-primary"
                            )}
                          >
                            {servico}
                          </button>
                        ))}
                      </div>
                      {errors.servico && (
                        <p className="mt-2 text-sm text-destructive">{errors.servico.message}</p>
                      )}
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={4}
                        className={cn("bg-background resize-none", errors.mensagem && "border-destructive")}
                        {...register("mensagem")}
                      />
                      {errors.mensagem && (
                        <p className="mt-1 text-sm text-destructive">{errors.mensagem.message}</p>
                      )}
                    </div>

                    {/* Botão Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
