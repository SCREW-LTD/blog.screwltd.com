import Link from 'next/link';



export default function Header({ name }) {
  return (
    <header className="pt-20 pb-4">
      <Link href="/">
        <img className="logo-screw" src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
      </Link>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <style jsx>{`
        .logo-screw {
          margin: 0 auto;
          padding-bottom: 5px;
        }
      `}</style>
    </header>
  );
}
