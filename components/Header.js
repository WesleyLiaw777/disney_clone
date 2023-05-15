import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { signOut, signIn, useSession } from "next-auth/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "/firebase";
import { useEffect } from "react";

function Header() {
  const router = useRouter();
  const { data } = useSession();
  // const { user } = useSession().data;

  console.log(auth);
  console.log(data);
  // console.log(user);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       // User is signed in, so add their data to the database
  //       const usersRef = collection(db, "users");
  //       await addDoc(usersRef, {
  //         uid: user.name,
  //         email: user.email,
  //         displayName: user.name,
  //         photoURL: user.image,
  //       });
  //     }
  //   });

  //   // Return a function that will clean up the effect
  //   return () => unsubscribe();
  // }, [auth]);


  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {data && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span>Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {data === null ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <img
          src={data.user.image}
          alt=""
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />
      )}
    </header>
  );
}
export default Header;
