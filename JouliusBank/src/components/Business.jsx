// Importa as constantes necessárias do diretório '../constants'
import { features } from "../constants"

// Importa estilos e layout do diretório '../style'
import styles, { layout } from "../style"

// Importa o componente Button a partir do arquivo './Button'
import Button from './Button'

// Componente funcional 'FeatureCard' que renderiza um cartão de recurso/feature
const FeatureCard = ({ icon, title, content, index }) => (
  // Estrutura de um cartão de recurso/feature
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    {/* Ícone do recurso/feature */}
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}bg-dimBlue`}>
      <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain"/>
    </div>
    {/* Conteúdo do cartão de recurso/feature */}
    <div className="flex-1 flex flex-col ml-3">
      {/* Título do recurso/feature */}
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      {/* Descrição do recurso/feature */}
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

// Componente funcional 'Business' representando uma seção de negócios
const Business = () =>  (
  // Seção principal com ID 'features' e classe CSS aplicada através de layout.section
  <section id="features" className={layout.section}>
    {/* Container para informações de negócios */}
    <div className={layout.sectionInfo}>
      {/* Título da seção de negócios */}
      <h2 className={styles.heading2}>
        Você faz o negócios, <br className="sm:block hidden" /> nós te damos o investimento.
      </h2>
      {/* Descrição da seção de negócios */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com o cartão de crédito certo, você pode melhorar sua vida financeira
        construir crédito, ganhar recompensas e economizar dinheiro. Mas com centenas
        de cartões de crédito no mercado.
      </p>

      {/* Componente Button para interação */}
      <Button styles={`mt-10`} />
    </div>

    {/* Container para cartões de recurso/feature */}
    <div className={`${layout.sectionImg} flex-col`}>
      {/* Mapeia os recursos/features e renderiza cada cartão usando o componente FeatureCard */}
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

// Exporta o componente 'Business' como padrão para uso em outros arquivos/componentes React
export default Business
