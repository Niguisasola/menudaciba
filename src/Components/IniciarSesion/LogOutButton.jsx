import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className='d-flex justify-content-center'>
            <button className='btn btn-light rounded-5 border-dark mt-5' onClick={() => logout()}>
                Cerrar Sesión
            </button>
            </div>
        )
    )
}

export default LogOutButton