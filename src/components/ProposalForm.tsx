import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

const ProposalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://hook.eu2.make.com/sontaetedl5yklgkguv5be3x4l9h0ieb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Pedido enviado com sucesso!");
        form.reset();
      } else {
        toast.error("Erro ao enviar pedido. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar pedido. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Pedido de Proposta
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Preencha o formulário abaixo para solicitar uma proposta personalizada
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-sm border">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product">Produto / Serviço *</Label>
            <Input
              type="text"
              id="product"
              name="product"
              placeholder="Qual produto ou serviço você procura?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Detalhes do Pedido *</Label>
            <Textarea
              id="details"
              name="details"
              placeholder="Descreva os detalhes do seu pedido..."
              rows={5}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Pedido"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProposalForm;
