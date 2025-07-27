
"use client";

import { useState } from 'react';
import type { SuggestRecipesOutput, SuggestRecipesInput } from '@/ai/flows/suggest-recipes';
import { suggestRecipes } from '@/ai/flows/suggest-recipes';
import RecipeForm from '@/components/recipe-form';
import RecipeList from '@/components/recipe-list';
import { useToast } from "@/hooks/use-toast";
import { ChefHat, CookingPot, Leaf, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [recipesOutput, setRecipesOutput] = useState<SuggestRecipesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestRecipes = async (data: SuggestRecipesInput) => {
    setIsLoading(true);
    setRecipesOutput(null);
    try {
      const result = await suggestRecipes(data);
      if (!result.recipes || result.recipes.length === 0) {
        toast({
          title: "Nenhuma receita encontrada",
          description: "Tente ingredientes diferentes ou verifique se há erros de digitação.",
          variant: "default",
        });
      }
      setRecipesOutput(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao sugerir receitas",
        description: "Houve um problema ao se comunicar com a IA. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-card/50 border-b border-primary/10">
        <div className="container mx-auto text-center px-4">
          <div className="inline-flex items-center gap-4 mb-6">
            <ChefHat className="w-14 h-14 text-primary" />
             <h1 className="text-5xl md:text-7xl font-headline text-primary">Doces Zero Lactose</h1>
          </div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-body mb-8">
            Aprenda a criar sobremesas incríveis e nunca mais deixe quem você ama passar vontade. Transforme sua paixão em uma fonte de renda extra!
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-10 rounded-lg" onClick={() => document.getElementById('recipe-form-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Quero Aprender Agora
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-headline text-center text-primary mb-12">Recursos Incríveis</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg border border-primary/10">
              <BrainCircuit className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-headline text-primary mb-2">IA Inteligente</h3>
              <p className="text-foreground/80 font-body">Sugestões de receitas que realmente combinam com seus ingredientes.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg border border-primary/10">
              <CookingPot className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-headline text-primary mb-2">Variedade de Pratos</h3>
              <p className="text-foreground/80 font-body">Do trivial ao gourmet, encontre a receita perfeita para qualquer ocasião.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg border border-primary/10">
              <Leaf className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-headline text-primary mb-2">Filtros Alimentares</h3>
              <p className="text-foreground/80 font-body">Receitas vegetarianas, veganas, sem glúten e muito mais.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="w-full py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-headline text-center text-primary mb-12">Como Funciona</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center font-body">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-4xl font-bold">1</div>
              <h3 className="text-xl font-headline text-primary mb-2">Liste seus Ingredientes</h3>
              <p className="text-foreground/80">Nos diga o que você tem na sua geladeira e despensa.</p>
            </div>
            <div className="flex flex-col items-center">
             <div className="w-24 h-24 mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-4xl font-bold">2</div>
              <h3 className="text-xl font-headline text-primary mb-2">Receba as Sugestões</h3>
              <p className="text-foreground/80">Nossa IA irá gerar 3 opções de receitas criativas para você.</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-24 h-24 mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-4xl font-bold">3</div>
              <h3 className="text-xl font-headline text-primary mb-2">Cozinhe e Aproveite</h3>
              <p className="text-foreground/80">Siga o passo a passo e desfrute de uma refeição deliciosa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Form Section */}
      <section id="recipe-form-section" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-headline text-primary">Pronto para Cozinhar?</h2>
            <p className="text-lg text-foreground/80 mt-2">Insira seus ingredientes abaixo e deixe a mágica acontecer!</p>
          </div>
          <div className="max-w-2xl mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-primary/10">
            <RecipeForm onSubmit={handleSuggestRecipes} isLoading={isLoading} />
          </div>
        </div>
      </section>

      {/* Recipe List Section */}
      <main className="flex-grow container mx-auto px-4 md:px-8">
        <RecipeList recipes={recipesOutput?.recipes ?? []} isLoading={isLoading} />
      </main>

      <footer className="w-full py-6 mt-16 bg-card/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ReceitaFácil. Todos os direitos reservados.</p>
           <p className="text-sm mt-2">Criado com ❤️ usando Next.js e Genkit.</p>
        </div>
      </footer>
    </div>
  );
}
