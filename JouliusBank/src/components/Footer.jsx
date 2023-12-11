// Importa estilos, imagens do logo e constantes para os links do rodapé e mídias sociais
import styles from "../style"
import { logo } from '../assets'
import { footerLinks, socialMedia } from "../constants"

// Componente Footer (rodapé)
const Footer = () => (
  // Estrutura do componente utilizando classes do Tailwind CSS e estilos personalizados
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Divisão principal do rodapé */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* Seção do logotipo e descrição */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* Logotipo */}
        <img src={logo} alt='jouliusBank' className="w-[266px] h-[72px] object-contain" />
        {/* Descrição do serviço */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Uma nova forma de fazer pagamentos rápido, fácil e seguro.</p>
      </div>

      {/* Links do rodapé */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            {/* Título do grupo de links */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            {/* Lista de links */}
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Rodapé inferior */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* Texto de direitos autorais */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2023 JouliusBank, All Rights Reserved.
      </p>
      {/* Ícones das redes sociais */}
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
        ))}
      </div>
    </div>
  </section>
)

// Exporta o componente Footer
export default Footer
