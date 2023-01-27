import Link from 'next/link';



export default function Header({ name }) {
  const styles = {
    center: {
      margin: "0 auto"
    }
  }
  
  return (
    <header className="pt-20 pb-12">
      <img className={styles.center} src="https://raw.githubusercontent.com/moonway-dev/screw-blog/main/components/logo.png" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
