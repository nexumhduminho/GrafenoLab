import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import AudioCard from "./components/AudioCard";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";

import hexagonosImg from "./assets/hexagonos.jpeg";
import nobelImg from "./assets/nobel-geim-novoselov.jpg";

export default function App() {
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
                de mel. É tão fino que tem apenas um átomo de espessura, sendo
                considerado o material mais fino alguma vez observado. Pode
                imaginar-se como uma folha extremamente fina retirada da
                grafite, o material presente na mina de um lápis. Apesar da sua
                simplicidade, esta estrutura microscópica revelou propriedades
                físicas extraordinárias que rapidamente despertaram o interesse
                da comunidade científica e da indústria.
              </p>
            </div>

            <div className="grafeno-bloco__imagem">
              <img
                src={hexagonosImg}
                alt="Estrutura hexagonal do grafeno"
              />
            </div>
          </div>

          <div className="grafeno-bloco grafeno-bloco--descoberta">
            <div className="grafeno-bloco__texto">
              <h3>A descoberta</h3>

              <p>
                Em 2004, dois investigadores da Universidade de Manchester,
                Andre Geim e Konstantin Novoselov, conseguiram isolar grafeno a
                partir de grafite utilizando um método surpreendentemente
                simples: fita adesiva.
              </p>

              <p>
                A descoberta abriu uma nova área da ciência dos materiais e
                valeu aos dois cientistas o Prémio Nobel da Física em 2010.
                Desde então, o grafeno tornou-se um dos materiais mais estudados
                no mundo.
              </p>

              <div className="multimedia-grid">
                <AudioCard
                  duration="3 minutos"
                  title="O que é o grafeno?"
                  description="Uma explicação clara sobre o que é o grafeno, como foi descoberto e porque é considerado um material do futuro."
                  src="/grafeno-oquee.mp3"
                />

                <VideoCard
                  duration="2 minutos"
                  title="A descoberta do grafeno"
                  description="Um vídeo curto para compreender como o grafeno foi isolado e porque despertou tanto interesse científico."
                  link="https://www.youtube.com/"
                />
              </div>
            </div>

            <div className="grafeno-bloco__imagem grafeno-bloco__imagem--descoberta">
              <img
                src={nobelImg}
                alt="Prémio Nobel de Física 2010 — Andre Geim e Konstantin Novoselov"
              />
            </div>
          </div>
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