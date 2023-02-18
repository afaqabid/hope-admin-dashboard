// ----------------------------------------------------------------------
import { auth } from "../firebase/firebase";

const account = {
  displayName: 'Admin',
  email: 'demo@minimals.cc',
  // email: auth.currentUser.email,
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

export default account;
