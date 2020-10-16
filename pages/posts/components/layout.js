import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "./styles/utils.module.css";
import Link from "next/link";

const name = "Paul Okello";
export const siteTitle = "Next.js sample Website";
function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              alt={name}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  alt={name}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                />
              </a>
            </Link>
            <h2 className={utilStyles}></h2>
          </>
        )}
      </header>
      {children}
    </div>
  );
}

export default Layout;
