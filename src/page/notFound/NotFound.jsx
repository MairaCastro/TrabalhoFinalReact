import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  const { error } = location.state || {};

  return (
    <div id="error-page">
      <h1>Opa, ocorreu algum erro!!</h1>
      <p>404 - Página não encontrada</p>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
}
