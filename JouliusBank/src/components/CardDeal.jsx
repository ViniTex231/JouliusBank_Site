// Importa a imagem necessária do diretório '../assets'
import { card } from "../assets"

// Importa estilos e layout do diretório '../style'
import styles, { layout } from "../style"

// Importa o componente Button a partir do arquivo './Button'
import Button from "./Button"

// Componente funcional 'CardDeal' representando uma seção de oferta de cartão
const CardDeal = () => (
  // Seção principal com classe CSS aplicada através de layout.section
  <section className={layout.section}>
    {/* Container para informações sobre a oferta de cartão */}
    <div className={layout.sectionInfo}>
      {/* Título da seção de oferta de cartão */}
      <h2 className={styles.heading2}>Encontre a melhor oferta de cartão <br className="sm:block hidden" /> em poucos minutos.</h2>
      {/* Descrição da seção de oferta de cartão */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      {/* Botão para interação */}
      <Button styles="mt-10" />
    </div>
    {/* Container para a imagem do cartão */}
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className="w-[100%] h-[100%]" />
    </div>
  </section>
)

// Exporta o componente 'CardDeal' como padrão para uso em outros arquivos/componentes React
export default CardDeal
