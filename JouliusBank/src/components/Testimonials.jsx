// Importa os dados de feedback e estilos
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard'; // Importa o componente FeedbackCard

// Componente Testimonials
const Testimonials = () => (
  // Estrutura do componente usando classes do Tailwind CSS e estilos personalizados
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/* Elementos visuais de fundo com gradientes */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Título e descrição */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        O que as pessoas estão <br className="sm:block hidden" /> falando sobre nós
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Tudo que você precisa para aceitar pagamentos com cartão e expandir seus negócios
          em qualquer lugar do planeta.
        </p>
      </div>
    </div>

    {/* Contêiner de feedbacks */}
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* Mapeamento dos feedbacks para renderização dos cards */}
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials; // Exporta o componente Testimonials
