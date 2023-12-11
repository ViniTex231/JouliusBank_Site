// Importa imagens necessárias do diretório '../assets'
import { apple, bill, google } from '../assets'

// Importa estilos e layout do diretório '../style'
import styles, { layout } from '../style'

// Componente funcional 'Billing' representando uma seção de faturamento ou controle de gastos
const Billing = () => (
  // Seção principal com ID 'product' e classes CSS aplicadas através de layout.sectionImgReverse
  <section id='product' className={layout.sectionImgReverse}>
    {/* Container para a imagem de fatura (bill) e sobreposição de elementos */}
    <div className={layout.sectionImgReverse}>
      {/* Imagem da fatura com classes de estilo para largura, altura, posicionamento, etc. */}
      <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      {/* Elemento de sobreposição branco */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      {/* Elemento de sobreposição rosa */}
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    {/* Container para informações de texto */}
    <div className={layout.sectionInfo}>
      {/* Título h2 com estilos provenientes de styles.heading2 */}
      <h2 className={styles.heading2}>Facil controle dos seus <br className='sm:block hidden' /> Gastos.</h2>
      {/* Parágrafo com estilos provenientes de styles.paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      {/* Container flexível para os logos das lojas de aplicativos */}
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        {/* Logo da Apple Store */}
        <img src={apple} alt="app_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        {/* Logo do Google Play */}
        <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

// Exporta o componente 'Billing' como padrão para uso em outros arquivos/componentes React
export default Billing
