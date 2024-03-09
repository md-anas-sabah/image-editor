import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "../service/auth";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/image-editor"),
  { ssr: false }
);

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default Home;
