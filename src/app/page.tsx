"use client";

import { useState } from 'react';
import type { SuggestRecipesOutput, SuggestRecipesInput } from '@/ai/flows/suggest-recipes';
import { suggestRecipes } from '@/ai/flows/suggest-recipes';
import RecipeForm from '@/components/recipe-form';
import RecipeList from '@/components/recipe-list';
import { useToast } from "@/hooks/use-toast";
import { ChefHat } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-4 mb-4 bg-background/50 p-4 rounded-2xl">
            <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-headline text-primary">ReceitaFácil</h1>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 font-body max-w-3xl mx-auto">
            Tem ingredientes sobrando? Diga-nos o que você tem e nossa IA criará receitas deliciosas para você em segundos!
          </p>
        </header>
        
        <div className="max-w-2xl mx-auto mb-12 bg-card p-6 sm:p-8 rounded-xl shadow-2xl border border-primary/10">
          <RecipeForm onSubmit={handleSuggestRecipes} isLoading={isLoading} />
        </div>

        <RecipeList recipes={recipesOutput?.recipes ?? []} isLoading={isLoading} />
      </main>
      <footer className="w-full py-4 mt-12">
        <p className="text-center text-sm text-muted-foreground">
          Criado com ❤️ usando Next.js e Genkit.
        </p>
      </footer>
    </div>
  );
}
