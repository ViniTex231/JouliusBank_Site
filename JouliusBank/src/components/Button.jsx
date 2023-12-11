import React from 'react'

// Componente funcional 'Button' que representa um botão
const Button = ({ styles }) => {
  return (
    // Botão com diferentes estilos, incluindo classes dinâmicas passadas através da propriedade 'styles'
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Comece Já
    </button>
  )
}

// Exporta o componente 'Button' como padrão para uso em outros arquivos/componentes React
export default Button
