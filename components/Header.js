import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
      <img src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
