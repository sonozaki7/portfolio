/* eslint-disable @next/next/no-img-element */
import { Header } from '../components/Header';
import { getAssetPath, links, SEO } from '../config/config';

export default function Links() {
  return (
    <>
      <Header seo={{ ...SEO, title: 'So Nozaki — links' }} />
      <main className="links-page">
        <section className="links-panel" aria-labelledby="links-title">
          <div className="panel-bar"><span>links.json</span><span>● ● ●</span></div>
          <div className="links-head">
            <img src={links.image} alt="So Nozaki" width="164" height="164" />
            <p className="command">~/connect</p>
            <h1 id="links-title">{links.title}</h1>
            <p>{links.description}</p>
          </div>
          <nav className="links-list" aria-label="So Nozaki links">
            <a href={getAssetPath('/')}>Portfolio <span aria-hidden="true">←</span></a>
            {links.cards.map((item) => <a key={item.title} href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.title}<span aria-hidden="true">↗</span></a>)}
          </nav>
        </section>
      </main>
    </>
  );
}
