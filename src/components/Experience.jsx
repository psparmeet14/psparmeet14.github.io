import { experience } from '../data/site'
import Section from './Section'

const Experience = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Experience" title="One product, eight years, growing scope.">
    <div className="rows">
      {experience.map(({ period, title, org, bullets }) => (
        <div className="row" key={title}>
          <span className="label row__meta">{period}</span>
          <div>
            <h3 className="row__title">{title}</h3>
            <p className="row__sub">{org}</p>
            {bullets && (
              <ul className="bullets">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export default Experience
