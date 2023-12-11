// Importa estilos e imagens necessárias
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

// Componente Hero (herói ou seção principal)
const Hero = () => (
  // Estrutura do componente utilizando classes do Tailwind CSS e estilos personalizados
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Divisão esquerda da seção */}
    <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
      {/* Bloco de desconto */}
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          Desconto Para {" "}
          <span className='text-white'>1 Mês </span>
          de Conta
        </p>
      </div>
      {/* Título principal */}
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          A nova <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>Geração</span> {" "}
        </h1>
        {/* Componente GetStarted (Botão Começar) */}
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      {/* Subtítulo e descrição */}
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>de Pagamentos.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5}`}>Nossa equipe de especialistas utiliza uma metodologia para identificar os cartões de crédito com maior probabilidade de atender às suas necessidades. Examinamos taxas percentuais anuais e taxas anuais.</p>
    </div>

    {/* Divisão direita da seção */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* Imagem de robô */}
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      {/* Elementos de fundo com gradientes */}
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
    </div>

    {/* Seção oculta para dispositivos móveis pequenos */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* Componente GetStarted (Botão Começar) */}
      <GetStarted />
    </div>
  </section>
)

// Exporta o componente Hero
export default Hero
