import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verificarAutenticacao } from '../utils/auth'; // Substitua por sua lógica de autenticação

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const verificarEAutenticar = async () => {
        const autenticado = await verificarAutenticacao(); // Substitua por sua lógica de autenticação
        if (!autenticado) {
          router.push('/login'); // Redireciona para a página de login se não estiver autenticado
        }
      };

      verificarEAutenticar();
    }, []);

    if (props.autenticado) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;