// Importa os dados estatísticos e estilos
import { stats } from '../constants';
import styles from '../style';

// Componente Stats
const Stats = () => (
  // Estrutura do componente usando classes do Tailwind CSS e estilos personalizados
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {/* Mapeamento das estatísticas para renderização */}
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        {/* Valor estatístico */}
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        {/* Título da estatística */}
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats; // Exporta o componente Stats
