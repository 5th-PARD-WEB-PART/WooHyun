import Image from "next/image";
import Link from "next/link";

export default function Pard() {
  return (
    <div>
      <Link href="https://we-pard.com/">
        <Image src="/pard.png" alt="로고" width={200} height={100} />
      </Link>
    </div>
  );
}
