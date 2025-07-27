"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { SuggestRecipesOutput } from "@/ai/flows/suggest-recipes";
import { Leaf, WheatOff, Drumstick, Sparkles } from 'lucide-react';

interface RecipeCardProps {
  recipe: SuggestRecipesOutput["recipes"][0];
}

const getDietaryIcon = (dietaryInfo: string) => {
    const lowerInfo = dietaryInfo.toLowerCase();
    if (lowerInfo.includes('vegetariano')) return <Leaf className="inline-block mr-2 text-primary" />;
    if (lowerInfo.includes('vegano')) return <Sparkles className="inline-block mr-2 text-primary" />;
    if (lowerInfo.includes('sem glúten')) return <WheatOff className="inline-block mr-2 text-primary" />;
    return <Drumstick className="inline-block mr-2 text-primary" />;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const formatText = (text: string) => {
    return text.split('\n').filter(line => line.trim() !== '').map((item, index) => (
      <p key={index} className="mb-2">{item.trim()}</p>
    ));
  };

  return (
    <Card className="bg-card border-primary/20 hover:border-primary/50 transition-colors duration-300 shadow-lg flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{recipe.name}</CardTitle>
        {recipe.dietaryInfo && (
          <CardDescription className="pt-2">
            <Badge variant="outline" className="text-primary border-primary/50 bg-transparent">
              {getDietaryIcon(recipe.dietaryInfo)}
              {recipe.dietaryInfo}
            </Badge>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible className="w-full" defaultValue="instructions">
          <AccordionItem value="ingredients">
            <AccordionTrigger className="font-headline text-lg hover:no-underline text-primary/90">Ingredientes</AccordionTrigger>
            <AccordionContent className="font-body text-foreground/90 prose-p:mb-2">
              {formatText(recipe.ingredients)}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="instructions">
            <AccordionTrigger className="font-headline text-lg hover:no-underline text-primary/90">Modo de Preparo</AccordionTrigger>
            <AccordionContent className="font-body text-foreground/90 prose-p:mb-2">
              {formatText(recipe.instructions)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
