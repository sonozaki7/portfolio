/* eslint-disable @next/next/no-img-element */
import { Header } from '../components/Header';
import { background, contact, intro, navigation, principles, products, proof, SEO } from '../config/config';

const progressImage = 'https://raw.githubusercontent.com/sonozaki7/sonozaki7/main/assets/founder-progress.svg';

function ExternalLink({ href, children, className = '' }) {
  const external = href.startsWith('http');
  return <a className={className} href={href} target={external ? '_blank' : undefined} rel="noreferrer">{children}</a>;
}

function SectionHeading({ index, label, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-index">{index} / {label}</p>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header seo={SEO} />
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell nav-shell">
          <a className="wordmark" href="#top" aria-label="So Nozaki, back to top"><span>so</span>.dev</a>
          <nav aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.link} href={item.link}>{item.title}</a>)}
          </nav>
          <a className="availability" href="#contact"><span aria-hidden="true" /> open to useful work</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero section-rule">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="command">{intro.eyebrow}<span className="cursor" aria-hidden="true">_</span></p>
              <h1>{intro.title}</h1>
              <p className="hero-lede">{intro.description}</p>
              <div className="hero-actions">
                {intro.actions.map((action) => <ExternalLink key={action.title} href={action.link} className={action.primary ? 'button button-primary' : 'button'}>{action.title}<span aria-hidden="true"> ↗</span></ExternalLink>)}
              </div>
            </div>

            <aside className="identity-panel" aria-label="Current founder status">
              <div className="panel-bar"><span>founder.json</span><span>● ● ●</span></div>
              <img src={intro.image} alt="So Nozaki" width="480" height="480" />
              <dl>
                {intro.status.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
              </dl>
            </aside>
          </div>
        </section>

        <section id="systems" className="section-rule">
          <div className="shell section-space">
            <SectionHeading index="01" label="systems" title="Products in the world" description="Current systems I build, operate, and keep improving. Public links only." />
            <div className="product-list">
              {products.map((product) => (
                <ExternalLink key={product.name} href={product.href} className="product-row">
                  <span className="product-index">{product.index}</span>
                  <div className="product-main">
                    <div className="product-title"><h3>{product.name}</h3><span className="state"><i aria-hidden="true" />{product.state}</span></div>
                    <p>{product.description}</p>
                    <ul aria-label={`${product.name} areas`}>{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  </div>
                  <span className="product-arrow" aria-hidden="true">↗</span>
                </ExternalLink>
              ))}
            </div>
          </div>
        </section>

        <section id="operating-log" className="section-rule operating-section">
          <div className="shell section-space">
            <SectionHeading index="02" label="operating log" title="The workflow is part of the product" description="A live twelve-month view of shipping cadence, throughput, focus, and the routines behind the work." />
            <a className="progress-frame" href="https://github.com/sonozaki7#readme" target="_blank" rel="noreferrer">
              <img src={progressImage} alt="Twelve-month founder operating review with month-by-month workflow comparisons" />
            </a>
            <p className="data-note"><span>live data</span> Aggregate public and private GitHub activity. Private repository names and source remain private.</p>
          </div>
        </section>

        <section id="method" className="section-rule">
          <div className="shell section-space">
            <SectionHeading index="03" label="method" title="How I keep speed from becoming chaos" description="AI makes implementation cheaper. Judgment, verification, and clear authority become more valuable." />
            <div className="principle-grid">
              {principles.map((principle, index) => (
                <article className="principle" key={principle.command}>
                  <span className="principle-number">0{index + 1}</span>
                  <code>$ {principle.command}</code>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="background" className="section-rule">
          <div className="shell section-space">
            <SectionHeading index="04" label="background" title="Technical depth, founder ownership" description="A compact history. The current systems above are the better proof." />
            <div className="background-grid">
              <div className="timeline">
                {background.map((item) => (
                  <article key={`${item.period}-${item.role}`}>
                    <p className="period">{item.period}</p>
                    <div><h3>{item.role}</h3><p className="place">{item.place}</p><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
              <dl className="proof-list">
                {proof.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="shell contact-grid">
            <div><p className="command">~/contact</p><h2>{contact.title}</h2><p>{contact.description}</p></div>
            <div className="contact-links">
              {contact.links.map((item) => <ExternalLink key={item.title} href={item.link}>{item.title}<span aria-hidden="true">↗</span></ExternalLink>)}
            </div>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><span>© {new Date().getFullYear()} So Nozaki</span><span>built with plain intent / shipped on GitHub Pages</span></div></footer>
    </>
  );
}
