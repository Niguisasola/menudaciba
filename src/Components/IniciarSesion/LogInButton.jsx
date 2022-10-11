import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className='d-flex justify-content-center'>
            <button className='btn btn-light rounded-5 border-dark mt-5' onClick={() => loginWithRedirect()}>
                Iniciar Sesión 
            </button>
            </div>
        )
    )
}

export default LoginButton