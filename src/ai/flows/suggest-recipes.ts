
'use server';
/**
 * @fileOverview A recipe suggestion AI agent.
 *
 * - suggestRecipes - A function that handles the recipe suggestion process.
 * - SuggestRecipesInput - The input type for the suggestRecipes function.
 * - SuggestRecipesOutput - The return type for the suggestRecipes function.
 */

import {ai} from '../genkit';
import {z} from 'zod';

const SuggestRecipesInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A list of ingredients the user has, separated by commas.'),
});
export type SuggestRecipesInput = z.infer<typeof SuggestRecipesInputSchema>;

const SuggestRecipesOutputSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe('The name of the recipe.'),
      description: z
        .string()
        .describe('A brief description of the recipe.'),
      ingredients: z
        .array(z.string())
        .describe('The ingredients needed for the recipe.'),
      instructions: z
        .array(z.string())
        .describe('The steps to prepare the recipe.'),
    })
  ),
});
export type SuggestRecipesOutput = z.infer<typeof SuggestRecipesOutputSchema>;

export async function suggestRecipes(
  input: SuggestRecipesInput
): Promise<SuggestRecipesOutput> {
  return suggestRecipesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRecipesPrompt',
  input: {schema: SuggestRecipesInputSchema},
  output: {schema: SuggestRecipesOutputSchema},
  prompt: `You are a culinary expert specializing in lactose-free recipes.
  
  Suggest three delicious and easy-to-make lactose-free recipes based on the ingredients provided by the user. 
  
  For each recipe, provide a name, a short description, a list of ingredients, and step-by-step instructions.

  User's ingredients: {{{ingredients}}}`,
});

const suggestRecipesFlow = ai.defineFlow(
  {
    name: 'suggestRecipesFlow',
    inputSchema: SuggestRecipesInputSchema,
    outputSchema: SuggestRecipesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
