'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting recipes based on a list of ingredients provided by the user.
 *
 * - suggestRecipes - A function that takes a list of ingredients and returns a list of suggested recipes.
 * - SuggestRecipesInput - The input type for the suggestRecipes function.
 * - SuggestRecipesOutput - The output type for the suggestRecipes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRecipesInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma-separated list of ingredients the user has available.'),
  dietaryRestrictions: z
    .string()
    .optional()
    .describe('Optional dietary restrictions, such as vegetarian, gluten-free, etc.'),
});
export type SuggestRecipesInput = z.infer<typeof SuggestRecipesInputSchema>;

const SuggestRecipesOutputSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe('The name of the suggested recipe.'),
      ingredients: z.string().describe('The ingredients required for the recipe.'),
      instructions: z.string().describe('Step-by-step instructions for the recipe.'),
      dietaryInfo: z.string().optional().describe('Dietary information for the recipe, if applicable.'),
    })
  ).describe('An array of suggested recipes based on the provided ingredients.'),
});
export type SuggestRecipesOutput = z.infer<typeof SuggestRecipesOutputSchema>;

export async function suggestRecipes(input: SuggestRecipesInput): Promise<SuggestRecipesOutput> {
  return suggestRecipesFlow(input);
}

const suggestRecipesPrompt = ai.definePrompt({
  name: 'suggestRecipesPrompt',
  input: {schema: SuggestRecipesInputSchema},
  output: {schema: SuggestRecipesOutputSchema},
  prompt: `You are a helpful recipe assistant. Given the following ingredients and dietary restrictions, suggest 3 recipes that the user can make.

Ingredients: {{{ingredients}}}

Dietary Restrictions: {{{dietaryRestrictions}}}

Recipes:`,
});

const suggestRecipesFlow = ai.defineFlow(
  {
    name: 'suggestRecipesFlow',
    inputSchema: SuggestRecipesInputSchema,
    outputSchema: SuggestRecipesOutputSchema,
  },
  async input => {
    const {output} = await suggestRecipesPrompt(input);
    return output!;
  }
);
