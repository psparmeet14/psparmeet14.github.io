import { work } from '../data/site'
import { ArrowUpRight } from './Icons'
import Section from './Section'

const Work = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Selected work" title="Things I've built that you can open.">
    <div className="work-grid">
      {work.map(({ label, title, description, proof, tags, links }) => (
        <article className="card" key={title}>
          <div className="card__meta">
            <span className="label">{label}</span>
            {links.length > 0 && (
              <div className="card__links">
                {links.map(({ label: linkLabel, href }) => (
                  <a key={href} className="link" href={href} target="_blank" rel="noreferrer">
                    {linkLabel}
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            )}
          </div>
          <h3 className="card__title">{title}</h3>
          <p className="card__body">{description}</p>
          {proof && <p className="card__proof">{proof}</p>}
          <ul className="chips" aria-label="Technologies">
            {tags.map((tag) => (
              <li className="chip" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)

export default Work
