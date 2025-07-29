
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, UtensilsCrossed, ShoppingCart, Lightbulb, HeartHandshake, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const painPoints = [
    { text: "Sofre com inchaço extremo, dores abdominais intensas, diarreia (ou constipação severa!), vômitos e náuseas após comer?" },
    { text: "Sua comida fica sem graça, sem a textura que você ama (aquele queijo que não gratina, o molho que não encorpa)?" },
    { text: "Sente-se isolado(a) em eventos sociais ou tem medo de comer fora por causa da lactose (e talvez glúten ou outras restrições)?" },
    { text: "A jornada para o diagnóstico foi difícil e você ainda se sente perdido(a) sobre como adaptar sua alimentação?" },
    { text: "Preocupado(a) com o custo elevado dos produtos zero lactose e a dificuldade de encontrá-los?" },
    { text: "A enzima lactase nem sempre resolve, ou você tem receio de usá-la diariamente para tudo?" },
    { text: "Tem medo de ingredientes ocultos e contaminação cruzada em alimentos industrializados ou até em medicamentos?" },
    { text: "Lida com perda de peso indesejada, fraqueza ou o impacto emocional de ter que se privar de tanta coisa?" }
  ];

  const whatYouGet = [
    { icon: Calendar, title: "Plano de Refeições Diário Completo", description: "Um cronograma detalhado para 7 dias, com café da manhã, almoço, jantar e lanches, tudo 100% zero lactose. Acabe com a dúvida do 'o que comer?'" },
    { icon: UtensilsCrossed, title: "Receitas Exclusivas e Saborosas", description: "Receitas fáceis de seguir, com ingredientes acessíveis, que provam que o zero lactose pode ser delicioso e variado. Desfrute de pratos com sabor e textura incríveis!" },
    { icon: ShoppingCart, title: "Lista de Compras Otimizada", description: "Tudo o que você precisa para a semana, organizado para economizar seu tempo e seu bolso no supermercado. Menos preocupação, mais economia." },
    { icon: Lightbulb, title: "Dicas de Substituição Inteligentes", description: "Aprenda a fazer trocas simples e eficazes para adaptar suas receitas favoritas sem perder o sabor e a textura. Recupere o prazer de cozinhar!" },
    { icon: HeartHandshake, title: "Foco em Resultados Rápidos e Bem-Estar", description: "Sinta a diferença no seu corpo em apenas 7 dias: menos inchaço, mais energia e o fim dos desconfortos que tanto te incomodam." },
  ];

  const bonuses = [
    { title: "Bônus #1: E-book 'Técnicas Culinárias Zero Lactose'", description: "Ataca a Dor: 'Medo de errar', 'minhas receitas desandam', 'perda de sabor e textura'. Um guia completo para dominar as substituições desafiadoras." },
    { title: "Bônus #2: Guia 'Desvendando Rótulos e Ingredientes Ocultos'", description: "Ataca a Dor: 'Confusão com rótulos', 'medo de contaminação cruzada'. Torne-se um(a) expert em ler rótulos e comprar com segurança." },
    { title: "Bônus #3: Comunidade VIP de Suporte (30 dias)", description: "Ataca a Dor: 'Me sinto sozinho(a)', 'preciso de apoio'. Conecte-se, tire dúvidas e receba motivação em um grupo exclusivo." },
    { title: "Bônus #4: Módulo Extra 'Zero Lactose & Sem Glúten'", description: "Ataca a Dor: 'Tenho múltiplas restrições'. Guia rápido com substituições e 5 receitas essenciais que são tanto zero lactose quanto sem glúten." },
  ];

  const testimonials = [
    { name: "Miriane S.", text: "Sofri por anos com dores horríveis, inchaço e sem saber o que tinha. Depois de descobrir a intolerância, o Desafio 7 Dias foi uma libertação! Finalmente me sinto no controle e sem o medo de passar mal." },
    { name: "Cliente Satisfeito", location: "São Paulo", text: "Eu tinha muita dor de barriga e gases. Mudei minha alimentação com o Desafio e em poucos dias já me sinto outra pessoa! Valeu cada centavo." },
    { name: "Lira P.", text: "Passei muito mal por anos e fui forçada a mudar. Com o plano de refeições e as dicas de substituição, estou muito melhor e comendo com prazer novamente!" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section id="home" className="w-full py-20 md:py-32 bg-gradient-to-b from-accent/30 to-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground max-w-3xl mx-auto">
              DESAFIO 7 DIAS SEM LACTOSE: Sabor, Leveza e Liberdade na Sua Mesa!
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mt-4 max-w-2xl mx-auto">
              Cansado(a) de inchaço, dores e a frustração de não poder comer o que ama? Aceite o desafio e descubra como é fácil viver sem lactose, comendo com prazer!
            </p>
            <a href="#cta">
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                Quero Aceitar o Desafio Agora!
              </Button>
            </a>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Você se identifica com alguma dessas dores?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {painPoints.map((pain, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
                  <span className="text-2xl mt-1">😔</span>
                  <p className="text-foreground/90">{pain.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-primary mt-12 max-w-3xl mx-auto">Chega de sacrifícios! Redescubra o prazer de comer e viva com mais leveza e confiança.</p>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">O Que Você Vai Receber no Desafio 7 Dias Sem Lactose</h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">Prepare-se para uma semana de descobertas e sabores incríveis! Nosso desafio foi criado para ser prático, delicioso e transformador, atacando diretamente suas maiores dores.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatYouGet.map((item, index) => (
                <Card key={index} className="bg-accent/30 border-none shadow-lg text-left hover:shadow-xl transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <item.icon className="w-10 h-10 text-primary" />
                    <CardTitle className="text-lg font-bold text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">BÔNUS EXCLUSIVOS – Seu Suporte para o Sucesso no Desafio!</h2>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">Para garantir que você tenha a melhor experiência e resultados, incluímos bônus que vão além das receitas, resolvendo suas maiores dificuldades:</p>
            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="bg-white shadow-md text-left">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-primary">
                      <span className="text-2xl">🎁</span> {bonus.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="cta" className="w-full py-20 bg-gradient-to-b from-primary to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Aceite o Desafio e Transforme Sua Vida em 7 Dias!</h2>
            <p className="text-lg mb-6">Milhares de pessoas já transformaram sua relação com a comida. Chegou a sua vez!</p>
            <div className="bg-white text-foreground rounded-lg p-8 inline-block shadow-2xl">
              <p className="text-lg">Tudo isso por apenas:</p>
              <p className="text-5xl md:text-6xl font-extrabold my-2 text-primary">R$27,90</p>
              <p className="text-sm text-gray-500">Acesso Imediato ao Desafio!</p>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  SIM! QUERO ACEITAR O DESAFIO AGORA!
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">O Que Nossos Participantes Dizem:</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-50 border-gray-200 shadow-lg text-center flex flex-col p-6">
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-lg font-semibold text-primary">{testimonial.name}</CardTitle>
                    {testimonial.location && <p className="text-sm text-gray-500">{testimonial.location}</p>}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="w-full py-12 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left bg-white p-8 rounded-lg shadow-xl">
              <ShieldCheck className="h-20 w-20 md:h-24 md:w-24 text-primary shrink-0"/>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Sua Satisfação é Nossa Prioridade</h3>
                <p className="text-foreground/80 mt-2 text-base md:text-lg">
                  Temos tanta certeza de que o "DESAFIO 7 DIAS SEM LACTOSE" vai transformar sua vida que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não estiver satisfeito(a), basta nos enviar um e-mail e devolveremos seu dinheiro, sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 text-center">
            <div className="container mx-auto px-4">
               <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-6">Comece Sua Nova Vida Zero Lactose Hoje Mesmo!</h2>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                        SIM! QUERO ACEITAR O DESAFIO AGORA!
                    </Button>
                </a>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-gray-100">
        <div className="container mx-auto text-center text-gray-600 px-4">
          <p>&copy; {currentYear} Desafio 7 Dias Sem Lactose. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
