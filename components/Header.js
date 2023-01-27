import Link from 'next/link';

const styles = {
  center: {
    margin: "0 auto"
  }
}

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className={styles.center}>
        <img src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
