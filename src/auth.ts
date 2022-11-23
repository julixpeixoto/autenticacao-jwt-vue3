import jwtDecode, { JwtPayload } from 'jwt-decode';
import request from './request';

export async function signIn(email: string, password: string) {
  const { token } = await request('POST', '/auth', {
    email,
    password
  });
  window.localStorage.setItem('token', token);
}

export function signOut() {
  localStorage.removeItem('token');
}

export function isSignedIn() {
  const token = localStorage.getItem('token');

  if (!token)     // Se não existe o token no LocalStorage
    return false; // significa que o usuário não está assinado.

  try {
    const decodedToken: JwtPayload = jwtDecode(token);
    const isExpired = !!decodedToken.exp && Date.now() > decodedToken.exp * 1000;

    if (isExpired) {
      return false;
    }

    return true;
  } catch (_) {   // O "jwt-decode" lança erros pra tokens inválidos.
    return false; // Com um token inválido o usuário não está assinado.
  }
}