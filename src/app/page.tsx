import Link from "next/link";

export default async function Home() {
  return (<>
    <h1>Mahesh here</h1>
    <Link href='/blog'>Blog page</Link>
  </>
  );
}
