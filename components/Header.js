import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src="https://screwltd.com/img/screw---------1@2x.png"/>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
