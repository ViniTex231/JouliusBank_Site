// Importa o componente Input do Material Tailwind React e a função useState do React
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import styles from "../style"; // Importa estilos
import Button from "./Button"; // Importa o componente Button

// Componente Login
const Login = () => {
  // Declaração de estados para armazenar username e password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para atualizar o estado do username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Função para atualizar o estado da password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      username: username,
      password: password
    };

    try {
      // Envia uma solicitação POST para a API com dados de login
      const response = await fetch('http://10.109.71.16:8000/api/v1/auth/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Login bem sucedido! Bem vindo, ${data.username}`);
      } else {
        console.error('Erro no login');
      }
    } catch (error) {
      console.log('Erro ao conectar à API: ', error);
    }
  };

  return (
    // Estrutura do componente de login
    <section id="login" className={`${styles.padding} ${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      {/* Elementos visuais de fundo com gradientes */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      {/* Título do login */}
      <h2 className={styles.heading2}>Login</h2>

      {/* Formulário de login */}
      <form onSubmit={handleSubmit}>
        <div className="w-72">
          {/* Campo de entrada para CPF ou CNPJ */}
          <label className={`${styles.paragraph} max-w-[470px] mt-5`} htmlFor="password">CPF ou CNPJ:</label>
          <input
            type="text"
            id="username"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="CPF ou CNPJ"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="flex flex-col">
          {/* Campo de entrada para senha */}
          <label className={`${styles.paragraph} max-w-[470px] mt-5`} htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        {/* Botão de submissão */}
        <div className={`${styles.flexCenter} flex flex-col sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </form>
    </section>
  );
};

export default Login; // Exporta o componente Login
