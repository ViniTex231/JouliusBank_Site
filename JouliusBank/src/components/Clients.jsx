// Importa a lista de clientes (clients) do arquivo '../constants'
import { clients } from "../constants"

// Importa estilos do arquivo '../style'
import styles from "../style"

// Componente funcional 'Clients' para exibir logotipos dos clientes
const Clients = () => (
  // Seção que exibe os logotipos dos clientes, aplicando estilos de centralização e margens
  <section className={`${styles.flexCenter} my-4`}>
    {/* Container flexível para exibir os logotipos dos clientes */}
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* Mapeia a lista de clientes e renderiza cada logotipo em um bloco separado */}
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          {/* Imagem do logotipo do cliente */}
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

// Exporta o componente 'Clients' como padrão para uso em outros arquivos/componentes React
export default Clients
