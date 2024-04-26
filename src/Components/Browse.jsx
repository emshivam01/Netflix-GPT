import Header from "./Header";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Browse = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("No user found");
    }
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
