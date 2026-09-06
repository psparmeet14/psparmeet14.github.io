import { posts, profile } from '../data/site'
import { ArrowUpRight } from './Icons'
import Section from './Section'

const Writing = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Writing" title="Notes from the work.">
    <div className="rows">
      {posts
        .filter((post) => post.url)
        .map(({ date, title, summary, url }) => (
          <article className="row post" key={title}>
            <span className="label row__meta">{date}</span>
            <div>
              <h3 className="post__title">
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <p className="post__sub">{summary}</p>
            </div>
            <span className="post__arrow" aria-hidden="true">
              <ArrowUpRight size={22} />
            </span>
          </article>
        ))}
    </div>
    <p className="section__more">
      <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
        More on LinkedIn
        <ArrowUpRight />
      </a>
    </p>
  </Section>
)

export default Writing
