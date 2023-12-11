// Importa estilos e imagens necessárias
import styles from '../style'
import { arrowUp } from '../assets'

// Componente GetStarted (Obter Iniciado)
const GetStarted = () => (
  // Estrutura do componente usando classes do Tailwind CSS e estilos personalizados
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* Divisão interna do componente */}
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      {/* Linha com texto e ícone */}
      <div className={`${styles.flexStart} flex-row`}>
        {/* Texto "Comece" */}
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Comece</span>
        </p>
        {/* Ícone de seta para cima */}
        <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
      </div>
      {/* Segundo texto */}
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Já</span>
      </p>
    </div>
  </div>
)

// Exporta o componente GetStarted
export default GetStarted
