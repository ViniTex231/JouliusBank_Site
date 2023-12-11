// Importa a imagem de quotes do diretório "../assets"
import { quotes } from "../assets"

// Componente FeedbackCard
const FeedbackCard = ({ content, name, title, img }) => (
  // Define a estrutura do componente usando classes do Tailwind CSS e estilos personalizados
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    {/* Imagem de aspas usando a imagem importada */}
    <img src={quotes} alt='double_quotes' className="w-[42px] h-[27px] object-contain"/>
    {/* Parágrafo com o conteúdo do feedback */}
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

    {/* Divisão para exibir o nome, título e imagem */}
    <div className="flex flex-row">
      {/* Imagem do autor do feedback */}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      {/* Informações do autor (nome e título) */}
      <div className="flex flex-col ml-4">
        {/* Nome do autor */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        {/* Título do autor */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
)

// Exporta o componente FeedbackCard
export default FeedbackCard
