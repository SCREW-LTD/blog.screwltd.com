import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <a href="/">
        <img style="height: 60px; margin: 0 auto; padding-bottom: 5px;" src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
      </a>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
