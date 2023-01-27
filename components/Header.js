import Link from 'next/link';



export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img className="margin: 0 auto" src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
