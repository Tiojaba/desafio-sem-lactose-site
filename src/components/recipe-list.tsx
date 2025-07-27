import RecipeCard from "./recipe-card";
import { Skeleton } from "./ui/skeleton";
import type { SuggestRecipesOutput } from "@/ai/flows/suggest-recipes";
import { UtensilsCrossed } from "lucide-react";

interface RecipeListProps {
  recipes: SuggestRecipesOutput["recipes"];
  isLoading: boolean;
}

export default function RecipeList({ recipes, isLoading }: RecipeListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3 p-6 rounded-xl border border-primary/20 bg-card">
            <Skeleton className="h-8 w-3/4 bg-muted" />
            <Skeleton className="h-6 w-1/2 bg-muted" />
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/3 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-5/6 bg-muted" />
              </div>
               <div className="space-y-2">
                <Skeleton className="h-4 w-1/3 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-5/6 bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 px-4 border-2 border-dashed border-primary/20 rounded-lg bg-card">
          <UtensilsCrossed className="mx-auto h-12 w-12 text-primary/50 mb-4" />
          <h2 className="text-2xl font-headline text-primary">Nenhuma receita para mostrar ainda</h2>
          <p className="mt-2 text-foreground/70 font-body">
            Use o formulário acima para encontrar receitas com os ingredientes que você tem em casa.
          </p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}
