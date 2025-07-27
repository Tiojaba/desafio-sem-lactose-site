
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const WistiaPlayer = ({ videoId }: { videoId: string }) => {
  const playerStyle = {
    height: "100%",
    position: "absolute" as "absolute",
    left: 0,
    top: 0,
    width: "100%",
  };

  const wrapperStyle = {
    height: "0",
    paddingBottom: "177.77%", // 9:16 aspect ratio
    position: "relative" as "relative",
    width: "100%",
  }

  return (
    <div style={wrapperStyle} className="w-full h-full rounded-md overflow-hidden">
        <div className={`wistia_embed wistia_async_${videoId} videoFoam=true`} style={playerStyle}>
          &nbsp;
        </div>
    </div>
  );
};


export default function Home() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setCurrentDate(format(today, "d 'de' MMMM", { locale: ptBR }));
  }, []);

  const testimonials = [
    {
      name: "Ana Silva",
      text: "Eu achava que nunca mais ia comer um bolo gostoso! As receitas são maravilhosas e fáceis. Já estou até vendendo para as amigas!",
      image: "https://placehold.co/100x100.png",
      hint: "woman smiling"
    },
    {
      name: "Carlos Pereira",
      text: "O guia 'Minha Receita' mudou minha vida. Além de comer sem medo, comecei um pequeno negócio de doces fit. Estou muito feliz!",
      image: "https://placehold.co/100x100.png",
      hint: "man happy"
    },
    {
      name: "Juliana Costa",
      text: "Minha filha tem várias restrições e eu não sabia mais o que fazer. Agora temos lanches deliciosos e seguros todos os dias. Obrigada!",
      image: "https://placehold.co/100x100.png",
      hint: "woman child"
    },
  ];

  const faqItems = [
    {
      question: "Preciso de experiência na cozinha para fazer as receitas?",
      answer: "De jeito nenhum! As receitas foram criadas para serem simples e fáceis de seguir, mesmo que você seja iniciante. O passo a passo é detalhado para garantir seu sucesso."
    },
    {
      question: "Os ingredientes são difíceis de encontrar?",
      answer: "Não. Priorizamos ingredientes fáceis de achar em supermercados e lojas de produtos naturais em todo o Brasil. Você não precisará de nada exótico ou caro."
    },
    {
      question: "Realmente posso ganhar dinheiro com essas receitas?",
      answer: "Com certeza! O guia inclui dicas de como precificar e vender seus doces, transformando seu novo hobby em uma fonte de renda extra. Muitas alunas já estão lucrando!"
    },
    {
      question: "O acesso ao guia é vitalício?",
      answer: "Sim! Ao adquirir o guia 'Minha Receita', você terá acesso ilimitado a todo o material para sempre, incluindo futuras atualizações, para consultar quando quiser."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="beforeInteractive" />
      
      {/* Hero Section (VSL) */}
      <section className="w-full py-6 md:py-8 bg-gradient-to-b from-[#FFC8C8]/50 to-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-xl md:text-3xl font-extrabold text-secondary uppercase tracking-tight max-w-4xl mx-auto">
            Cansado de sofrer com intolerâncias alimentares?
          </h2>
          <p className="text-lg md:text-2xl font-bold text-primary mt-2 mb-4 max-w-4xl mx-auto">
            Descubra o sabor sem culpa e ainda faça uma renda extra!
          </p>
          <div className="max-w-sm mx-auto bg-gradient-to-b from-primary to-[#FF9696] p-2 rounded-lg shadow-2xl">
            <WistiaPlayer videoId="5xgv99ozmz" />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <div className="transition-all duration-700 ease-in-out">
          <section className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-[#FFC8C8]/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-extrabold text-secondary">Apresento a você o guia completo</h2>
                <h1 className="text-3xl md:text-5xl font-bold text-primary mt-2 mb-10">Minha Receita: Doces e Delícias Sem Culpa e com Lucro!</h1>

                <div className="max-w-4xl mx-auto text-left space-y-8">
                    <Card className="bg-white shadow-lg border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-secondary text-xl md:text-2xl flex items-center gap-2"><Heart className="text-primary"/>Os Benefícios em Detalhe</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-base md:text-lg text-gray-700">
                           <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Liberdade para comer:</strong> Receitas deliciosas sem lactose, glúten e açúcar.</span></p>
                           <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Renda Extra:</strong> Aprenda a precificar e vender seus produtos.</span></p>
                           <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Saúde e Sabor:</strong> Ingredientes saudáveis que não sacrificam o paladar.</span></p>
                           <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Para toda a família:</strong> Agradam a todos, com ou sem restrições.</span></p>
                        </CardContent>
                    </Card>

                    <div className="text-center py-8">
                        <h3 className="text-xl md:text-2xl font-bold text-secondary">Sua Chance de Saborear a Liberdade, Por Um Preço Incrível!</h3>
                        <p className="text-4xl md:text-5xl font-extrabold text-primary my-4">Apenas R$ 27,90</p>
                        <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md my-4 text-center max-w-lg mx-auto">
                          <p className="font-bold">Atenção: Este desconto especial é válido somente até hoje, {currentDate}!</p>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-primary to-[#FF9696] hover:scale-105 transition-transform text-primary-foreground font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg w-full max-w-md mx-auto h-auto whitespace-normal">
                           <span className="text-center">
                            QUERO MINHA LIBERDADE <br/> E MINHA RENDA EXTRA AGORA!
                           </span>
                        </Button>
                    </div>

                </div>
            </div>
          </section>

          {/* Motivational Images Section */}
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image 
                  src="https://placehold.co/600x400.png"
                  alt="Família feliz cozinhando junto"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="happy family cooking"
                />
                 <Image 
                  src="https://placehold.co/600x400.png"
                  alt="Crianças comendo doces saudáveis e sorrindo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="children eating healthy"
                />
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="w-full py-12 bg-[#FFC8C8]/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <ShieldCheck className="h-20 w-20 md:h-24 md:w-24 text-primary shrink-0"/>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Garantia de Satisfação Incondicional de 7 Dias</h3>
                    <p className="text-gray-700 mt-2 text-base md:text-lg">
                        Seu risco é zero. Se por qualquer motivo você não amar o guia "Minha Receita", basta pedir seu dinheiro de volta em até 7 dias. Simples assim, sem perguntas.
                    </p>
                  </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-center text-secondary mb-10">Veja o que nossos alunos estão dizendo</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white border-primary/20 shadow-xl text-center flex flex-col">
                    <CardHeader className="items-center">
                      <div className="flex justify-center w-full">
                       <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-primary"
                          data-ai-hint={testimonial.hint}
                        />
                      </div>
                      <CardTitle className="text-secondary pt-2 text-xl">{testimonial.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-center text-secondary mb-10">
                Perguntas Frequentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-secondary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-auto bg-gray-100">
        <div className="container mx-auto text-center text-gray-500 px-4">
          <p>&copy; {new Date().getFullYear()} Minha Receita. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
