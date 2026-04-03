import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import MediaCard from "./components/MediaCard";
import { BarChart3, Brain, Headphones } from "lucide-react";
import AudioCard from "./components/AudioCard";
import QuizCard from "./components/QuizCard";
import CollapsibleBlock from "./components/CollapsibleBlock.jsx";
import Footer from "./components/Footer";

import grafenoImg from "./assets/grafeno.jpg";
import carbonoImg from "./assets/carbono-formas.jpg";
import descobertaImg from "./assets/descoberta.jpg";
import descobertaMuseuImg from "./assets/descoberta-museu.jpg";
import nobelImg from "./assets/geim-novoselov.jpg";
import aplicacoesImg from "./assets/aplicacoes.jpg";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const quizRef = useRef(null);
  useEffect(() => {
  if (showQuiz && quizRef.current) {
    quizRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [showQuiz]);

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main>
      <Section
  id="oque"
  title="O que é o grafeno?"
  subtitle="Um material ultrafino com propriedades extraordinárias."
>
  <div className="grafeno-bloco">
    <div className="grafeno-bloco__texto">
      <p>
        O grafeno é um material formado por uma única camada de átomos
        de carbono, organizada numa rede hexagonal semelhante a um favo
        de mel. Com apenas um átomo de espessura — cerca de 0,334 nanómetros, ou seja, aproximadamente um milionésimo 
        do diâmetro de um cabelo humano — é considerado o material mais fino alguma vez isolado e observado. 
        Pode imaginar-se como uma folha extremamente fina retirada da
        grafite, o material presente na mina de um lápis. 
      </p>
      <p>
        Esta comparação com o lápis não é por acaso: quando escrevemos com um lápis, estamos a depositar camadas de grafite sobre 
        o papel. Cada uma dessas camadas é, em teoria, composta por múltiplas folhas de grafeno empilhadas umas sobre as outras. 
        Apesar da sua simplicidade, esta estrutura microscópica revelou propriedades
        físicas extraordinárias que rapidamente despertaram o interesse
        da comunidade científica e da indústria.
      </p>
      <p>
        O que os cientistas demoraram décadas a conseguir foi separar uma dessas folhas individualmente, uma tarefa que, apesar 
        de parecer simples, se revelou um enorme desafio técnico e científico.
      </p>
    </div>

    <div className="grafeno-bloco__imagem">
      <img
        src={grafenoImg}
        alt="Estrutura hexagonal do grafeno"
      />
    </div>
  </div>


<div className="grafeno-bloco--carbono">
  <CollapsibleBlock title="O carbono e as suas formas">
    <div className="grafeno-bloco grafeno-bloco--carbono">
      <div className="grafeno-bloco__texto">
      <p>
Para compreender o grafeno, é útil conhecer melhor o carbono, o elemento químico que lhe dá origem. O carbono é um dos elementos mais versáteis da natureza: dependendo da forma como os seus átomos se organizam, pode dar origem a materiais completamente diferentes.
      </p>
      <p>
O diamante, por exemplo, é carbono puro com os átomos organizados numa estrutura tridimensional muito rígida — daí a sua dureza extrema. 
      </p>
      <p>
A grafite, pelo contrário, é também carbono puro, mas com os átomos organizados em camadas planas empilhadas, o que a torna macia e escorregadia.
O grafeno é, precisamente, uma dessas camadas individuais da grafite. Enquanto na grafite existem milhares de camadas sobrepostas, no grafeno existe apenas uma. Esta diferença, aparentemente pequena, tem consequências enormes nas propriedades do material e foi essa descoberta que revolucionou a ciência dos materiais no início do século XXI.
      </p>
      <p>
      Além do diamante e da grafite, o carbono pode ainda formar outras estruturas fascinantes. Em 1985, os cientistas descobriram os fulerenos — moléculas de carbono em forma de esfera, parecidas com bolas de futebol à escala molecular. Depois, em 1991, foram identificados os nanotubos de carbono — cilindros microscópicos com propriedades mecânicas e elétricas notáveis. O grafeno veio juntar-se a esta família em 2004, sendo de certa forma o "parente plano" destas estruturas: um nanotubo de carbono pode ser visto como uma folha de grafeno enrolada sobre si mesma, e um fulereno como uma folha de grafeno dobrada e fechada em esfera.
      </p>
      </div>

      <div className="grafeno-bloco__imagem">
        <img
          src={carbonoImg} alt="Estruturas do carbono"
        />
      </div>
    </div>
  </CollapsibleBlock>
</div>

<div className="grafeno-bloco--descoberta">
  <CollapsibleBlock title="A descoberta: fita adesiva e curiosidade">
    <div className="grafeno-bloco grafeno-bloco--descoberta">
      <div className="grafeno-bloco__texto">
        <p>
          Durante décadas, os físicos teóricos previam que uma camada isolada de grafeno deveria ter propriedades extraordinárias. Contudo, havia um problema: acreditava-se que materiais bidimensionais, com apenas uma ou poucas camadas atómicas de espessura, seriam termodinamicamente instáveis à temperatura ambiente, ou seja, que simplesmente não poderiam existir de forma isolada sem se degradar ou enrolar sobre si mesmos.
        </p>
        <p>
          Esta ideia estava tão enraizada na comunidade científica que poucos investigadores se deram ao trabalho de tentar isolar grafeno experimentalmente. Foi neste contexto que, em 2004, dois investigadores da Universidade de Manchester, no Reino Unido, mudaram completamente o panorama. Andre Geim, físico nascido na União Soviética, e Konstantin Novoselov, o seu jovem colaborador russo, conseguiram isolar grafeno de uma forma que surpreendeu toda a comunidade científica pela sua simplicidade: usaram fita adesiva comum.
        </p>
        <p>
          O método, que ficou conhecido como "esfoliação mecânica" ou, de forma mais popular, o "método da fita de Scotch", consistia em colocar fita adesiva sobre um bloco de grafite e depois separá-la, arrancando camadas do material. Repetindo este processo várias vezes — colando e descolando a fita sobre as mesmas camadas —, conseguia-se reduzir progressivamente a espessura das camadas de grafite até obter fragmentos com apenas uma camada atómica. Esses fragmentos eram depois transferidos para uma superfície de silício, onde podiam ser identificados e estudados ao microscópio.
        </p>
        <p>
          O que torna esta história ainda mais curiosa é o contexto em que nasceu. Geim era conhecido na sua equipa pelas chamadas "experiências de sexta-feira à noite" — tentativas informais e por vezes improváveis de explorar ideias não convencionais fora do horário normal de trabalho. Foi precisamente nesse espírito de curiosidade descomprometida que a experiência com a fita adesiva foi realizada. Não havia grandes expectativas nem pressão de resultados — apenas a vontade de tentar algo diferente. O resultado foi histórico. Pela primeira vez, tinha sido possível isolar e estudar um material verdadeiramente bidimensional, com apenas um átomo de espessura. E, ao contrário do que se previa, o grafeno era estável, manipulável e apresentava propriedades físicas que ninguém esperava encontrar num material tão simples.
        </p>
      </div>

      <div className="grafeno-bloco__imagem grafeno-bloco__imagem--descoberta">
        <img
          src={descobertaImg}
          alt="A descoberta do grafeno - o método da fita de Scotch"
        />

        <img
          src={descobertaMuseuImg}
          alt="Representação da descoberta do grafeno em contexto laboratorial"
        />
      </div>
    </div>
  </CollapsibleBlock>
</div>
  
<div className="grafeno-bloco--nobel">
  <CollapsibleBlock title="O Nobel da Física em 2010">
    <div className="grafeno-bloco grafeno-bloco--nobel">
      <div className="grafeno-bloco__texto">
        <p>
          A importância da descoberta foi reconhecida rapidamente pela comunidade científica. Em apenas seis anos após a publicação do trabalho original na revista Science, Andre Geim e Konstantin Novoselov foram galardoados com o Prémio Nobel da Física em 2010, um dos intervalos mais curtos alguma vez registados entre uma descoberta e a atribuição do Nobel.
        </p>
        <p>
          O Comité Nobel destacou não apenas a descoberta em si, mas sobretudo o que ela representava: a abertura de um campo inteiramente novo da física e da ciência dos materiais. O grafeno demonstrou que era possível criar e estudar materiais bidimensionais estáveis, algo que até então era considerado impossível. Esta ideia abriu as portas para a investigação de toda uma família de novos materiais com apenas algumas camadas atómicas de espessura, muitos dos quais estão hoje a ser intensamente investigados em todo o mundo.
          Curiosamente, Geim já tinha recebido um prémio científico de natureza completamente diferente anos antes: o Ig Nobel da Física, em 2000, por ter conseguido levitar uma rã usando um íman poderoso. Tornou-se assim a única pessoa na história a receber tanto um Ig Nobel — o prémio humorístico que celebra a ciência absurda mas genuína — como um Nobel oficial. Uma trajetória que diz muito sobre o seu estilo de investigação: curioso, irreverente e disposto a explorar o inesperado.
        </p>
      </div>

      <div className="grafeno-bloco__imagem grafeno-bloco__imagem--nobel">
        <img
          src={nobelImg}
          alt="Prémio Nobel de Física 2010 — Andre Geim e Konstantin Novoselov"
        />
      </div>
    </div>
  </CollapsibleBlock>
</div>

<div className="grafeno-bloco--desafio">
  <CollapsibleBlock title="Um material que desafiou as expectativas">
    <div className="grafeno-bloco grafeno-bloco--desafio">
      <div className="grafeno-bloco__texto">
        <p>
      Após a descoberta, os investigadores rapidamente perceberam que o
      grafeno não era apenas uma curiosidade científica, era um material
      com propriedades físicas verdadeiramente excecionais, muitas das quais
      não tinham paralelo em nenhum outro material conhecido.
    </p>

    <p>
      A sua resistência mecânica revelou-se extraordinária: é cerca de 200
      vezes mais resistente do que o aço e, ao mesmo tempo, muito flexível,
      podendo ser dobrado sem se partir.
    </p>

    <p>
      A sua condutividade elétrica é igualmente notável: os eletrões movem-se
      no grafeno a velocidades muito superiores às verificadas no silício, o
      material que hoje domina a eletrónica.
    </p>

    <p>
      A condutividade térmica é das mais elevadas alguma vez medidas num
      material.
    </p>

    <p>
      E tudo isto num material que é quase completamente transparente: uma
      única camada absorve apenas cerca de 2,3% da luz visível que a atravessa.
    </p>

    <p>
      Estas propriedades, que serão exploradas em detalhe nos capítulos
      seguintes deste site, fizeram do grafeno um dos materiais mais estudados
      do mundo nas últimas duas décadas. Desde a eletrónica e as baterias até
      à medicina e à construção civil, as potenciais aplicações são vastas, e
      muitas delas estão já a transformar-se em produtos reais disponíveis no
      mercado.
    </p>

    <p>
      O grafeno é, em suma, um exemplo fascinante de como a simplicidade
      estrutural pode esconder uma complexidade de propriedades sem igual, e de
      como a curiosidade científica, mesmo quando começa com um simples rolo de fita
      cola, pode mudar o mundo!
    </p>
      </div>

      <div className="grafeno-bloco__imagem grafeno-bloco__imagem--aplicacoes">
        <img
          src={aplicacoesImg}
          alt="Aplicações do grafeno em diferentes setores"
        />
      </div>
    </div>
  </CollapsibleBlock>
</div>

<div className="multimedia-grid">
  <AudioCard
    icon={<Headphones size={20} strokeWidth={1.8} />}
    duration="3 minutos"
    title="O que é o grafeno?"
    description="Uma introdução sobre o que é o grafeno, sua descoberta e o seu potencial."
    src="/grafeno-oquee.mp3"
  />

<MediaCard
  variant="infografico"
  icon={<BarChart3 size={20} strokeWidth={1.8} />}
  eyebrow="Explorar infográfico"
  title="Formas do carbono"
  description="Veja de forma visual como o grafeno se relaciona com outras formas do carbono."
  buttonText="Ver infográfico"
/>

<MediaCard
  variant="quiz"
  icon={<Brain size={20} strokeWidth={1.8} />}
  eyebrow="Testar conhecimentos"
  title="Quiz rápido"
  description="Consolide o que aprendeu com 5 perguntas de resposta rápida."
  buttonText="Começar quiz"
  onButtonClick={() => setShowQuiz(true)}
/>
</div>

{showQuiz && (
  <div ref={quizRef} className="quiz-wrapper">
    <QuizCard />
  </div>
)}

</Section>

        <Section
          id="propriedades"
          title="Propriedades"
          subtitle="Resistência, condutividade e flexibilidade num único material."
        >
          <p>
            O grafeno destaca-se pela sua elevada resistência, condutividade
            elétrica e flexibilidade.
          </p>
        </Section>

        <Section
          id="aplicacoes"
          title="Aplicações"
          subtitle="Da eletrónica à energia, o grafeno abre novas possibilidades."
        >
          <p>
            As aplicações incluem eletrónica avançada, sensores, energia e
            materiais compósitos.
          </p>
        </Section>

        <Section
          id="futuro"
          title="O futuro do grafeno"
          subtitle="Investigação, inovação e desafios para transformar potencial em impacto."
        >
          <p>
            A investigação continua a explorar novas formas de produzir e
            aplicar este material revolucionário.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}