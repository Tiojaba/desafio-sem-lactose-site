
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, UtensilsCrossed, ShoppingCart, Lightbulb, ShieldCheck, Check } from 'lucide-react';
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
    { icon: ShieldCheck, title: "Foco em Resultados Rápidos e Bem-Estar", description: "Sinta a diferença no seu corpo em apenas 7 dias: menos inchaço, mais energia e o fim dos desconfortos que tanto te incomodam." },
  ];

  const bonuses = [
    { title: "Bônus #1: E-book \"Técnicas Culinárias Zero Lactose: O Segredo do Sabor e Textura\"", description: "Ataca a Dor: \"Medo de errar\", \"minhas receitas desandam\", \"perda de sabor e textura\". Um guia completo com o passo a passo para dominar as substituições mais desafiadoras (como aquele queijo que você ama!), garantindo sabor e consistência perfeitos. Inclui dicas e ilustrações para facilitar seu aprendizado." },
    { title: "Bônus #2: Guia \"Desvendando Rótulos e Ingredientes Ocultos\"", description: "Ataca a Dor: \"Confusão com rótulos\", \"medo de contaminação cruzada (até em remédios!)\". Torne-se um(a) expert em ler rótulos e identificar lactose disfarçada, comprando com segurança e sem ansiedade." },
    { title: "Bônus #3: Comunidade VIP de Suporte no WhatsApp/Telegram (30 dias)", description: "Ataca a Dor: \"Me sinto sozinho(a)\", \"preciso de apoio\", \"dúvidas que ninguém responde\". Conecte-se, tire dúvidas com especialistas, compartilhe experiências e receba motivação em um grupo exclusivo." },
    { title: "Bônus #4: Módulo Extra \"Zero Lactose & Sem Glúten: Primeiros Passos\"", description: "Ataca a Dor: \"Tenho múltiplas restrições\", \"é tudo muito complexo\". Guia rápido com as principais substituições e 5 receitas essenciais que são tanto zero lactose quanto sem glúten, para simplificar sua vida." },
  ];

  const testimonials = [
    { name: "Miriane S.", role: "Participante do Desafio", text: "Sofri por anos com dores horríveis, inchaço и sem saber o que tinha. Depois de descobrir a intolerância, o Desafio 7 Dias foi uma libertação! Finalmente me sinto no controle e sem o medo de passar mal." },
    { name: "Cliente Satisfeito", role: "São Paulo", text: "Eu tinha muita dor de barriga e gases. Mudei minha alimentação com o Desafio e em poucos dias já me sinto outra pessoa! Valeu cada centavo." },
    { name: "Lira P.", role: "Participante do Desafio", text: "Passei muito mal por anos e fui forçada a mudar. Com o plano de refeições e as dicas de substituição, estou muito melhor e comendo com prazer novamente!" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-20 bg-gradient-to-b from-accent/50 to-background text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground max-w-3xl mx-auto mb-8">
              DESAFIO 7 DIAS SEM LACTOSE: <span className="text-primary font-bold">Sabor, Leveza e Liberdade</span> na Sua Mesa!
            </h1>
             <Image 
              src="https://i.imgur.com/bpPL2HL.png" 
              alt="Prato de comida saudável e colorida" 
              width={600} 
              height={400}
              className="mx-auto rounded-xl shadow-lg mb-8 w-full max-w-md"
              data-ai-hint="healthy food vibrant"
            />
            <p className="text-md sm:text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
              Cansado(a) de inchaço, dores e a frustração de não poder comer o que ama? Aceite o desafio e descubra como é fácil viver sem lactose, <span className="text-primary font-semibold">comendo com prazer!</span>
            </p>
            <a href="#cta">
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                Quero Aceitar o Desafio Agora!
              </Button>
            </a>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="w-full py-12 md:py-20 bg-muted/40 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Você se identifica com alguma dessas dores?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((pain, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4 p-4 bg-background rounded-lg shadow-md">
                  <span className="text-3xl mt-1">😔</span>
                  <p className="text-foreground/90">{pain.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl font-semibold text-foreground mt-12 max-w-3xl mx-auto">Chega de sacrifícios! Redescubra o prazer de comer e viva com mais <span className="text-primary">leveza e confiança.</span></p>
          </div>
        </section>
        
        {/* Apresentando o Desafio Section */}
        <section className="w-full py-12 md:py-20 bg-background text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Apresentando o Desafio: Uma Jornada de 7 Dias para sua <span className="text-primary">Liberdade Alimentar</span></h2>
                <p className="text-md md:text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
                Imagine uma semana inteira sem desconforto, sem se preocupar com o que comer e, o melhor de tudo, redescobrindo o prazer de pratos deliciosos que você achou que nunca mais poderia provar. Esse é o "Desafio 7 Dias Sem Lactose". Não é apenas uma dieta, é um <span className="font-semibold text-primary">plano de ação completo</span>, criado para te guiar, passo a passo, em uma transformação real. Vamos te mostrar como a vida sem lactose pode ser surpreendentemente <span className="font-semibold text-primary">fácil, saborosa e libertadora.</span>
                </p>
                <Image 
                  src="https://i.imgur.com/4VeEcls.png" 
                  alt="Mockup da área de membros do desafio"
                  width={800} 
                  height={600}
                  className="mx-auto rounded-xl mb-12 w-full max-w-2xl"
                  data-ai-hint="challenge members area"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-2 p-4">
                    <div className="text-5xl font-bold text-primary">1-2</div>
                    <h3 className="text-lg font-semibold mt-2">Desintoxicação e Adaptação</h3>
                    <p className="text-foreground/80">Foco em refeições leves e nutritivas para acalmar seu sistema digestivo e começar a sentir os primeiros sinais de alívio.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4">
                    <div className="text-5xl font-bold text-primary">3-5</div>
                    <h3 className="text-lg font-semibold mt-2">Redescoberta dos Sabores</h3>
                    <p className="text-foreground/80">Introdução de receitas mais elaboradas e técnicas para recriar a cremosidade e textura que você ama, sem usar lactose.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4">
                    <div className="text-5xl font-bold text-primary">6-7</div>
                    <h3 className="text-lg font-semibold mt-2">Confiança e Autonomia</h3>
                    <p className="text-foreground/80">Você aprenderá a fazer substituições inteligentes e a planejar suas refeições, ganhando a confiança para seguir em frente sozinho(a).</p>
                </div>
                </div>
            </div>
        </section>
        
        {/* What You Get Section */}
        <section className="w-full py-12 md:py-20 bg-background text-center">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">O Que Você Vai Receber no Desafio 7 Dias Sem Lactose:</h2>
            <p className="text-md md:text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">Prepare-se para uma semana de descobertas e sabores incríveis! Nosso desafio foi criado para ser <span className="text-primary font-semibold">prático, delicioso e transformador,</span> atacando diretamente suas maiores dores.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatYouGet.map((item, index) => (
                <Card key={index} className="bg-accent/20 border-none shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardHeader className="flex flex-col items-center gap-4">
                    <item.icon className="w-10 h-10 text-primary" />
                    <CardTitle className="text-md font-bold text-foreground">{item.title}</CardTitle>
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
        <section className="w-full py-12 md:py-20 bg-muted/40 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">BÔNUS EXCLUSIVOS – Seu Suporte para o <span className="text-primary">Sucesso no Desafio!</span></h2>
            <p className="text-md md:text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">Para garantir que você tenha a melhor experiência e resultados, incluímos bônus que vão além das receitas, resolvendo suas maiores dificuldades:</p>
            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="bg-background shadow-md text-center">
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center gap-3 text-lg md:text-xl text-primary">
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
        <section id="cta" className="w-full py-20 bg-gradient-to-br from-primary to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Aceite o Desafio e Transforme Sua Vida em 7 Dias!</h2>
            <p className="text-md md:text-lg mb-8 max-w-3xl mx-auto">Milhares de pessoas já transformaram sua relação com a comida. Ao aceitar o desafio, você recebe <span className="font-bold underline">acesso imediato</span> ao nosso material completo para redescobrir o prazer de viver sem lactose.</p>
            <div className="bg-white text-foreground rounded-lg p-6 md:p-8 inline-block shadow-2xl max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Ao aceitar o desafio, seu acesso imediato inclui:</h3>
                <ul className="text-left space-y-2 mb-6 text-foreground/90">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary mt-1 shrink-0" /><span>E-book com Plano de Refeições para 7 Dias</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary mt-1 shrink-0" /><span>Receitas deliciosas e fáceis de fazer</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary mt-1 shrink-0" /><span>Todos os Bônus Exclusivos</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary mt-1 shrink-0" /><span>Acesso à Comunidade de Suporte</span></li>
                </ul>
              <p className="text-md md:text-lg">Tudo isso por apenas:</p>
              <p className="text-4xl md:text-6xl font-extrabold my-2 text-primary">R$27,90</p>
              <p className="text-xs md:text-sm text-gray-500">Acesso Imediato ao Desafio!</p>
              <a href="https://pay.kirvano.com/e5f45d01-223a-4886-ae05-5ced3b68a2f3" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-3 px-8 md:py-4 md:px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  SIM! QUERO ACEITAR O DESAFIO AGORA!
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* About Me Section */}
        <section className="w-full py-12 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center gap-8 md:gap-12 max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-xl md:flex-row md:text-left">
              <Image 
                src="https://i.imgur.com/nn833YV.jpeg" 
                alt="Foto da criadora do desafio" 
                width={250} 
                height={250}
                className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover shrink-0"
                data-ai-hint="portrait smiling woman"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Quem sou eu?</h2>
                <p className="text-foreground/80 mb-4">
                  Olá! Meu nome é Carolinni Sales e, assim como você, eu sei exatamente o que é viver refém da intolerância à lactose. Por anos, sofri com desconfortos, frustrações e a sensação de que comer tinha se tornado um campo minado. Depois de muitos médicos e testes, veio o diagnóstico e com ele um desafio: como viver bem e com prazer sem lactose?
                </p>
                <p className="text-foreground/80">
                  Mergulhei de cabeça na cozinha, estudei, testei e descobri um novo universo de sabores. Percebi que era possível ter uma vida leve, saudável e deliciosa! Criei o "Desafio 7 Dias Sem Lactose" para compartilhar tudo o que aprendi e encurtar o seu caminho. Meu objetivo é te mostrar que você não precisa sofrer. Você pode, e vai, redescobrir a alegria de comer sem medo. Vamos juntos nessa jornada?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-background text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">O Que Nossos Participantes Dizem:</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-muted/40 border-gray-200/50 shadow-lg flex flex-col p-6 text-center">
                   <CardContent className="flex-grow">
                    <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-lg font-semibold text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Guarantee Section */}
        <section className="w-full py-12 bg-background text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center bg-white p-6 md:p-8 rounded-lg shadow-xl border">
              <ShieldCheck className="h-16 w-16 md:h-24 md:w-24 text-primary shrink-0"/>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Sua Satisfação é Nossa Prioridade</h3>
                <p className="text-foreground/80 mt-2 text-md md:text-lg">
                  Temos tanta certeza de que o "DESAFIO 7 DIAS SEM LACTOSE" vai transformar sua vida que oferecemos uma <span className="font-bold text-primary">garantia incondicional de 7 dias</span>. Se por qualquer motivo você não estiver satisfeito(a), basta nos enviar um e-mail e devolveremos seu dinheiro, sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 text-center bg-background">
            <div className="container mx-auto px-4">
               <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-6">Comece Sua Nova Vida <span className="font-bold text-primary">Zero Lactose</span> Hoje Mesmo!</h2>
                <a href="https://pay.kirvano.com/e5f45d01-223a-4886-ae05-5ced3b68a2f3" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                        SIM! QUERO ACEITAR O DESAFIO AGORA!
                    </Button>
                </a>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-gray-800 text-gray-300">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {currentYear} Desafio 7 Dias Sem Lactose. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
