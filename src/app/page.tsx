
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ShieldCheck, Heart, Frown, DollarSign, XCircle } from 'lucide-react';
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

const SimpleCtaButton = ({ onScroll }: { onScroll: () => void }) => (
    <div className="text-center py-8">
      <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-[#FF9696] hover:scale-105 transition-transform text-primary-foreground font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg w-full max-w-md mx-auto h-auto whitespace-normal"
          onClick={onScroll}
      >
          <span className="text-center">
              SIM, QUERO RESOLVER ISSO!
          </span>
      </Button>
    </div>
);


const FinalCtaButton = ({currentDate, forwardedRef}: {currentDate: string, forwardedRef: React.Ref<HTMLDivElement>}) => {
  return (
    <div className="text-center py-8" ref={forwardedRef}>
        <h3 className="text-xl md:text-2xl font-bold text-secondary">Sua Chance de Saborear a Liberdade, Por Um Preço Incrível!</h3>
        <p className="text-4xl md:text-5xl font-extrabold text-primary my-4">Apenas R$ 27,90</p>
        <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md my-4 text-center max-w-lg mx-auto">
          <p className="font-bold">Atenção: Este desconto especial é válido somente até hoje, {currentDate}!</p>
        </div>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gradient-to-r from-primary to-[#FF9696] hover:scale-105 transition-transform text-primary-foreground font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg w-full max-w-md mx-auto h-auto whitespace-normal">
             <span className="text-center">
              SIM, QUERO COMER BEM E GANHAR DINHEIRO!
             </span>
          </Button>
        </a>
    </div>
  );
};


export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const finalCtaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScrollToFinalCta = () => {
    finalCtaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const testimonials = [
    {
      name: "Ana Silva",
      text: "Eu achava que nunca mais ia comer um bolo gostoso! As receitas são maravilhosas e fáceis. Já estou até vendendo para as amigas!",
      image: "https://i.imgur.com/0eebaBM.jpeg",
      hint: "woman smiling"
    },
    {
      name: "Mariana Lima",
      text: "Esse guia mudou minha vida! Voltei a comer sem medo e ainda comecei um pequeno negócio com os doces. Muito, muito feliz e grata!",
      image: "https://i.imgur.com/m03wbdO.jpeg",
      hint: "woman happy"
    },
    {
      name: "Juliana Costa",
      text: "Minha filha tem várias restrições e eu não sabia mais o que fazer. Encontrar essas receitas foi um alívio. Nossos lanches agora são deliciosos e seguros. Obrigada de coração!",
      image: "https://i.imgur.com/Gukp7FS.jpeg",
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
      answer: "Com certeza! O guia inclui dicas de como precificar e vender seus doces, transformando seu novo hobby em uma fonte de renda. Muitas alunas já estão lucrando!"
    },
    {
      question: "O acesso ao guia é vitalício?",
      answer: "Sim! Ao adquirir o guia 'Minha Receita', você terá acesso ilimitado a todo o material para sempre, incluindo futuras atualizações, para consultar quando quiser."
    }
  ];

  const currentDate = isClient ? format(new Date(), "d 'de' MMMM", { locale: ptBR }) : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="beforeInteractive" />
      
      {/* Hero Section (Headline + VSL) */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFC8C8]/50 to-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary uppercase tracking-tight max-w-4xl mx-auto">
            Cansada de não poder comer o que gosta e de se preocupar com dinheiro?
          </h2>
          <p className="text-base md:text-lg text-primary mt-4 mb-4 max-w-4xl mx-auto font-normal">
            Descubra como saborear doces incríveis, sem culpa, e ainda criar uma nova fonte de renda que pode mudar sua vida.
          </p>
          <div className="max-w-xs mx-auto bg-gradient-to-r from-primary to-[#FF9696] p-1 rounded-lg shadow-2xl mt-4">
            <div className="rounded-md overflow-hidden">
             <WistiaPlayer videoId="5xgv99ozmz" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point 1: Food Intolerance */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-white shadow-lg border-red-200/50">
                <CardHeader>
                    <CardTitle className="text-secondary text-xl md:text-2xl flex items-center justify-center text-center gap-2">
                        <Frown className="text-primary h-12 w-12"/> Você se sente frustrada com suas restrições alimentares?
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base md:text-lg text-gray-700">
                  <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>É horrível ir a festas e ver todo mundo comendo bolos e doces, enquanto você fica só olhando com medo de passar mal.</span></p>
                  <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>Você já se cansou de ter que ler cada rótulo no mercado e de ter que ficar explicando suas restrições para as pessoas.</span></p>
                  <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>A alegria de comer um docinho depois do almoço parece um luxo proibido, e muitas vezes você acaba comendo coisas sem graça só por segurança.</span></p>
                </CardContent>
            </Card>
        </div>
      </section>

      {isClient && <SimpleCtaButton onScroll={handleScrollToFinalCta} />}


      {/* Pain Point 2: Lack of Money */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-white shadow-lg border-yellow-300/50">
                <CardHeader>
                    <CardTitle className="text-secondary text-xl md:text-2xl flex items-center justify-center text-center gap-2">
                        <DollarSign className="text-primary h-12 w-12"/> A falta de dinheiro te impede de realizar seus sonhos?
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base md:text-lg text-gray-700">
                    <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>As contas chegam todo mês e parece que o dinheiro nunca é suficiente para dar mais conforto à sua família ou realizar seus próprios sonhos.</span></p>
                    <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>A ideia de depender de um emprego que não te valoriza ou de não ter sua própria renda para fazer suas coisas é desgastante e te deixa insegura.</span></p>
                    <p className="flex items-start gap-2"><XCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span>Você sonha com a liberdade de ter seu próprio dinheiro, fazendo algo que você ama e que ainda te permite ficar mais perto de quem você ama.</span></p>
                </CardContent>
            </Card>
        </div>
      </section>
      
      {isClient && <SimpleCtaButton onScroll={handleScrollToFinalCta} />}

      {/* Solution Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-[#FFC8C8]/50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary">Imagine resolver esses dois problemas de uma vez só!</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mt-2 mb-10">Apresentando: Minha Receita!</h1>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://i.imgur.com/WBtdvhJ.jpeg" 
                  alt="Doce sem culpa" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                  data-ai-hint="delicious dessert"
                />
              </div>
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://i.imgur.com/qngt4kS.jpeg" 
                  alt="Renda extra com doces" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                  data-ai-hint="homemade sweets"
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-left space-y-8">
                <Card className="bg-white shadow-lg border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-secondary text-xl md:text-2xl flex items-center gap-2"><Heart className="text-primary"/>O que você vai conquistar:</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-base md:text-lg text-gray-700">
                       <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Solução 1: Fim das Restrições!</strong> Chega de sofrer! Coma doces deliciosos sem se preocupar com lactose, glúten ou açúcar. Recupere o prazer de comer sem medo.</span></p>
                       <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Solução 2: Dinheiro no Bolso!</strong> Transforme sua paixão em lucro! Um caminho testado para fazer uma renda extra vendendo doces irresistíveis e conquistar sua independência financeira.</span></p>
                       <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Cuidado e Sabor para quem você Ama:</strong> Ingredientes saudáveis para você e sua família, sem abrir mão do sabor.</span></p>
                       <p className="flex items-start gap-2"><CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" /> <span><strong>Momentos em Família:</strong> Receitas que agradam a todos, com ou sem restrições, perfeitas para compartilhar e celebrar.</span></p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
      
      {isClient && currentDate && <FinalCtaButton currentDate={currentDate} forwardedRef={finalCtaRef} />}

      {/* Guarantee Section */}
      <section className="w-full py-12 bg-[#FFC8C8]/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <ShieldCheck className="h-20 w-20 md:h-24 md:w-24 text-primary shrink-0"/>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-secondary">Sua Satisfação ou Seu Dinheiro de Volta</h3>
                <p className="text-gray-700 mt-2 text-base md:text-lg">
                    Seu risco é zero. Se por qualquer motivo você não se apaixonar pelo guia "Minha Receita", basta nos enviar um e-mail em até 7 dias e devolvemos todo o seu investimento. Simples assim, sem perguntas e sem ressentimentos.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-secondary mb-10">Veja o que nossas alunas estão dizendo</h2>
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
            Suas Dúvidas, Respondidas
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

      {/* Footer */}
      <footer className="w-full py-6 mt-auto bg-gray-100">
        <div className="container mx-auto text-center text-gray-500 px-4">
          <p>&copy; {new Date().getFullYear()} Minha Receita. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
