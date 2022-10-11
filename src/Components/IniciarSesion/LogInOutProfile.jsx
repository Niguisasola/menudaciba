import LoginButton from "./LogInButton";
import LogoutButton from "./LogOutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function LogInOutProfile() {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      <div className="d-flex justify-content-center">
      <h3 className="mt-5">Click aquí si quieres ...</h3>
      </div>
      <div>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
      </div>
    </main>
  );
}

export default LogInOutProfile;