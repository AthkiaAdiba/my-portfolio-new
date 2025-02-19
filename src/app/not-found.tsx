import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-[50%] mx-auto my-5 ">
      <Image
        src="/not-found.jpg"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full rounded-3xl"
      />
      <div className="flex justify-center">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
