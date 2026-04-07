import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import MediaCard from "./components/MediaCard";
import AudioCard from "./components/AudioCard";
import QuizCard from "./components/QuizCard";
import CollapsibleBlock from "./components/CollapsibleBlock.jsx";
import IndustriaGrid from "./components/IndustriaGrid";
import industriaCards from "./data/industriaData";
import Footer from "./components/Footer";

import { images } from "./data/images";
import { BarChart3, Brain, Headphones } from "lucide-react";
import { areaDetails } from "./data/areaDetails";


import {
  quizOQueEGrafeno,
  quizPropriedades,
  quizAplicacoes
} from "./quizzes";

export default function App() {

  const mediaRef = useRef(null);
  const infograficoRef = useRef(null);
  const quizRef = useRef(null);
  const areaDetailRef = useRef(null);
  
  const [showInfografico, setShowInfografico] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [activeArea, setActiveArea] = useState("fisica");
  
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (activeQuiz && quizRef.current) {
      quizRef.current.scrollIntoView({
        behavior: "smooth",
        block: isDesktop ? "start" : "nearest",
      });
      return;
    }

    if (showInfografico && infograficoRef.current) {
      infograficoRef.current.scrollIntoView({
        behavior: "smooth",
        block: isDesktop ? "start" : "nearest",
      });
    }
  }, [activeQuiz, showInfografico]);

      useEffect(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (!isDesktop) return;
      if (!activeArea || !areaDetailRef.current) return;

      areaDetailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, [activeArea]);

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
        src={images.grafeno}
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
          src={images.carbono} 
          alt="Estruturas do carbono"
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
          src={images.descoberta}
          alt="A descoberta do grafeno - o método da fita de Scotch"
        />

        <img
          src={images.descobertaMuseu}
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
          src={images.nobel}
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
          src={images.aplicacoes}
          alt="Aplicações do grafeno em diferentes setores"
        />
      </div>
    </div>
  </CollapsibleBlock>
</div>

<div ref={mediaRef} className="multimedia-grid">

<MediaCard
  variant="audio"
  icon={<Headphones size={20} strokeWidth={1.8} />}
  eyebrow="Ouvir resumo"
  title="Podcast"
  description="Uma conversa informal para explorar o que é o grafeno, a sua descoberta e o seu potencial."
  audioSrc="/grafeno-oquee.mp3"
/>

  <MediaCard
  variant="infografico"
  icon={<BarChart3 size={20} strokeWidth={1.8} />}
  eyebrow="Síntese visual"
  title="Infográfico"
  description="Resumo sobre a descoberta, propriedades e importância científica do grafeno."
  buttonText="Ver infográfico"
  onButtonClick={() => {
  setActiveQuiz(null);
  setShowInfografico(true);
  }}
/>

<MediaCard
  variant="quiz"
  icon={<Brain size={20} strokeWidth={1.8} />}
  eyebrow="Testar conhecimentos"
  title="Quiz rápido"
  description="Consolide o que aprendeu com 5 perguntas de resposta rápida."
  buttonText="Começar quiz"
  onButtonClick={() => {
  setShowInfografico(false);
  setActiveQuiz(quizOQueEGrafeno);
  }}
/>

</div>

    {activeQuiz && (
      <div ref={quizRef} className="quiz-wrapper">
        <QuizCard questions={activeQuiz} />
      </div>
    )}

{showInfografico && (
  <div ref={infograficoRef} className="infografico-wrapper">
    <div className="infografico-card">
    
      <img
        src="/infografico_grafeno1.jpg"
        alt="Infográfico de síntese sobre o capítulo O que é o grafeno?"
        className="infografico-image"
      />

      <div className="infografico-actions">
        <a
          href="/infografico_grafeno1.pdf"
          download
          className="card-button"
        >
          Descarregar [PDF]
        </a>

        <button
          className="card-button secondary"
          onClick={() => {
            setShowInfografico(false);
            mediaRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }}
        >
          Fechar
        </button>

      </div>
    </div>
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
          id="formacao"
          title="Formação e Profissões"
          subtitle="Formação, investigação e oportunidades em expansão."
        >
          <p>
            A investigação científica continua a aprofundar métodos de produção e aplicação do grafeno, 
            abrindo caminho a novas áreas de formação e oportunidades profissionais. Longe de pertencer 
            a uma única disciplina, o estudo do grafeno é um esforço coletivo que reúne físicos, químicos, 
            engenheiros, biólogos e especialistas em informática, trabalhando de forma articulada.
          </p>
          <p>
            Esta interdisciplinaridade torna o grafeno um exemplo particularmente interessante de como 
            a ciência funciona no mundo real. Para um aluno do ensino secundário, isso significa que 
            existem múltiplas vias de entrada neste domínio — e que as disciplinas que hoje estuda podem, 
            no futuro, estar ligadas a uma das mais promissoras áreas tecnológicas do século XXI.
          </p>

          <CollapsibleBlock title="Principais áreas de estudo">
            <div className="areas-grid">

              <div className="area-item">
                <div
                  className={`area-card ${activeArea === "fisica" ? "active" : ""}`}
                  onClick={() => setActiveArea("fisica")}
                >
                  <span>⚛️</span>
                  <h4>Física</h4>
                  <p>Compreende as propriedades fundamentais do grafeno.</p>
                </div>

                {activeArea === "fisica" && (
                  <div className="area-detail-mobile">
                    <p>{areaDetails.fisica.text}</p>
                    <p><strong>Cursos:</strong> {areaDetails.fisica.courses}</p>
                  </div>
                )}
              </div>

              <div className="area-item">
                <div
                  className={`area-card ${activeArea === "quimica" ? "active" : ""}`}
                  onClick={() => setActiveArea("quimica")}
                >
                  <span>🧪</span>
                  <h4>Química</h4>
                  <p>Produz e modifica o material para diferentes aplicações.</p>
                </div>

                {activeArea === "quimica" && (
                  <div className="area-detail-mobile">
                    <p>{areaDetails.quimica.text}</p>
                    <p><strong>Cursos:</strong> {areaDetails.quimica.courses}</p>
                  </div>
                )}
              </div>

              <div className="area-item">
                <div
                  className={`area-card ${activeArea === "engenharia" ? "active" : ""}`}
                  onClick={() => setActiveArea("engenharia")}
                >
                  <span>⚙️</span>
                  <h4>Engenharia</h4>
                  <p>Transforma conhecimento em dispositivos e produtos reais.</p>
                </div>

                {activeArea === "engenharia" && (
                  <div className="area-detail-mobile">
                    <p>{areaDetails.engenharia.text}</p>
                    <p><strong>Cursos:</strong> {areaDetails.engenharia.courses}</p>
                  </div>
                )}
              </div>

              <div className="area-item">
                <div
                  className={`area-card ${activeArea === "saude" ? "active" : ""}`}
                  onClick={() => setActiveArea("saude")}
                >
                  <span>🧬</span>
                  <h4>Saúde e Biologia</h4>
                  <p>Explora aplicações no corpo humano e na medicina.</p>
                </div>

                {activeArea === "saude" && (
                  <div className="area-detail-mobile">
                    <p>{areaDetails.saude.text}</p>
                    <p><strong>Cursos:</strong> {areaDetails.saude.courses}</p>
                  </div>
                )}
              </div>

              <div className="area-item">
                <div
                  className={`area-card ${activeArea === "computacao" ? "active" : ""}`}
                  onClick={() => setActiveArea("computacao")}
                >
                  <span>💻</span>
                  <h4>Computação</h4>
                  <p>Simula materiais e usa IA para prever propriedades.</p>
                </div>

                {activeArea === "computacao" && (
                  <div className="area-detail-mobile">
                    <p>{areaDetails.computacao.text}</p>
                    <p><strong>Cursos:</strong> {areaDetails.computacao.courses}</p>
                  </div>
                )}
              </div>

            </div>

            <div
              ref={areaDetailRef}
              className="areas-detail areas-detail--desktop"
            >
              <h4>{areaDetails[activeArea].title}</h4>
              <p>{areaDetails[activeArea].text}</p>
              <p><strong>Cursos:</strong> {areaDetails[activeArea].courses}</p>
            </div>

          </CollapsibleBlock>

          <CollapsibleBlock title="Saídas profissionais">
            <p>
              O grafeno pode abrir portas a profissões muito diferentes, desde a investigação académica à indústria, à saúde e à inteligência artificial.
            </p>

            <div className="saidas-grid">

              <div className="saida-card">
                <h4>Investigador em materiais</h4>
                <p>
                  Estuda propriedades do grafeno, desenvolve novos métodos de produção e explora aplicações emergentes.
                </p>
                <p><strong>Onde trabalha:</strong> universidades, laboratórios e centros de investigação.</p>
              </div>

              <div className="saida-card">
                <h4>Engenheiro de processos</h4>
                <p>
                  Desenvolve e otimiza processos de fabrico e integração do grafeno em materiais e produtos.
                </p>
                <p><strong>Onde trabalha:</strong> indústria química, materiais e produção industrial.</p>
              </div>

              <div className="saida-card">
                <h4>Engenheiro de produto</h4>
                <p>
                  Aplica grafeno em dispositivos, sensores, compósitos ou soluções energéticas.
                </p>
                <p><strong>Onde trabalha:</strong> empresas tecnológicas, energia, eletrónica e indústria automóvel.</p>
              </div>

              <div className="saida-card">
                <h4>Investigador biomédico</h4>
                <p>
                  Explora aplicações do grafeno em diagnóstico, biossensores e biomateriais.
                </p>
                <p><strong>Onde trabalha:</strong> hospitais, centros de investigação biomédica e indústria farmacêutica.</p>
              </div>

              <div className="saida-card">
                <h4>Cientista de dados e modelação computacional</h4>
                <p>
                  Utiliza modelos matemáticos, simulações e algoritmos para prever propriedades e acelerar a descoberta de novos materiais.
                </p>
                <p><strong>Onde trabalha:</strong> centros de investigação, empresas tecnológicas e indústria avançada.</p>
              </div>

              <div className="saida-card">
                <h4>Engenheiro de I&amp;D</h4>
                <p>
                  Desenvolve e testa novas soluções com grafeno, desde a investigação aplicada até à criação de protótipos.
                </p>
                <p><strong>Onde trabalha:</strong> indústria, empresas de inovação e centros de investigação.</p>
              </div>

            </div>

            <p>
              Não existe um único caminho. O grafeno é uma área interdisciplinar que integra perfis teóricos, experimentais, tecnológicos e computacionais.
            </p>
          </CollapsibleBlock>

          <CollapsibleBlock title="Investigação em Portugal e na Europa">
              <div className="grafeno-bloco grafeno-bloco--investigacao">
                <div className="grafeno-bloco__texto">
                  <p>
                  O grafeno é hoje estudado em universidades, centros de investigação e também em empresas tecnológicas. Em Portugal, existem instituições com trabalho relevante nesta área, muitas delas integradas em redes europeias de investigação.
                  </p>

                  <p>
                  Universidades como a{" "}
                    <a href="https://www.uminho.pt" target="_blank" rel="noopener noreferrer">
                      Universidade do Minho
                    </a>, a{" "}
                    <a href="https://www.up.pt" target="_blank" rel="noopener noreferrer">
                      Universidade do Porto
                    </a>, a{" "}
                    <a href="https://www.ua.pt" target="_blank" rel="noopener noreferrer">
                      Universidade de Aveiro
                    </a> e o{" "}
                    <a href="https://tecnico.ulisboa.pt" target="_blank" rel="noopener noreferrer">
                      Instituto Superior Técnico
                    </a> têm grupos dedicados a nanomateriais e materiais bidimensionais.
                  </p>

                  <p>
                  O <a href="https://inl.int" target="_blank" rel="noopener noreferrer">
                    INL — Laboratório Ibérico Internacional de Nanotecnologia
                  </a>, em Braga, destaca-se como uma infraestrutura científica de referência na Europa, desenvolvendo investigação em áreas como eletrónica, energia e saúde. É também um local onde trabalham investigadores e engenheiros altamente qualificados.
                  </p>

                  <p>
                  A nível europeu, o <a href="https://graphene-flagship.eu" target="_blank" rel="noopener noreferrer">
                    Graphene Flagship</a> reúne universidades, centros de investigação e empresas num dos maiores projetos científicos da União Europeia, promovendo a colaboração entre investigação e indústria e criando oportunidades de formação, estágios e carreiras científicas.
                  </p>

                  <p>
                  Para além da investigação académica, o grafeno está já presente em vários setores industriais — da eletrónica à energia, da saúde aos materiais avançados — o que significa que as oportunidades profissionais vão muito além do laboratório.
                  </p>

                  <p>
                  Para um estudante, o percurso passa geralmente por uma formação universitária sólida, seguida de especialização através de mestrado ou doutoramento, muitas vezes integrada em projetos internacionais.
                  </p>
                </div>
            <div className="grafeno-bloco__imagem grafeno-bloco__imagem--investigacao">
              <img
                src={images.investigacao}
                alt="Investigação sobre o grafeno"
              />
            </div>
            </div>
          </CollapsibleBlock>

          <CollapsibleBlock title="O grafeno na indústria">
            <p>
              O grafeno já está presente em diferentes setores industriais, desde a produção de materiais até ao desenvolvimento de tecnologias e à integração em produtos finais.
            </p>

            <IndustriaGrid cards={industriaCards} />
          </CollapsibleBlock>

        </Section>

      </main>

      <Footer />
    </div>
  );
}