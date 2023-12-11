// Importa os estilos do arquivo "../style" e o componente Button
import styles from "../style"
import Button from "./Button"

// Componente CTA (Call to Action)
const CTA = () => (
  // Define uma seção com classes CSS usando estilos importados e classes do Tailwind CSS
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    {/* Divisão do conteúdo da seção */}
    <div className="flex-1 flex flex-col">
      {/* Título h2 usando estilos do arquivo de estilos importado */}
      <h2 className={styles.heading2}>Teste nosso serviço já!</h2>
      {/* Parágrafo com estilos combinados do arquivo de estilos e classes do Tailwind CSS */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tudo o que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.</p>
    </div>

    {/* Divisão para o botão, usando estilos importados e classes do Tailwind CSS */}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* Renderiza o componente Button */}
      <Button />
    </div>
  </section>
)

// Exporta o componente CTA
export default CTA
