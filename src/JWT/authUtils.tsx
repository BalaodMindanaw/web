
import {jwtDecode} from 'jwt-decode';
interface DecodedToken {
    exp: number;
}
function isTokenExpired(token: string | null): boolean {
    if (!token) return true;


    try {
        const decodedToken: DecodedToken = jwtDecode(token);
        return decodedToken.exp < Date.now() / 1000;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
}

export default isTokenExpired