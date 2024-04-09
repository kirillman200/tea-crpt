import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Layout = ({ children, title = 'Crypto App' }) => {
	return (
		<div className='layout'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='header'>
				<Link href='/' passHref>
					<a> </a>
				</Link>
			</header>

			<main>{children}</main>

			<footer className={styles.footer}>
				<div className={styles.footerInfo}>
					<div className={styles.websiteRights}>
						Kiril Mankovskyi &copy; {new Date().getFullYear()} All rights reserved.
					</div>
					<div className={styles.socialIcons}>
						<a href='https://www.linkedin.com/in/kiril-mankovskyi/' target='_blank' aria-label='LinkedIn'>
							<FaLinkedinIn />
						</a>
						<a href='https://github.com/kirillman200' target='_blank' aria-label='GitHub'>
							<FiGithub />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
