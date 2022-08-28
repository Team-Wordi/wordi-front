import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authAtoms';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
}