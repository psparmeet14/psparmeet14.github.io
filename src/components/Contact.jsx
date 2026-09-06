import { contact, profile } from '../data/site'
import { ArrowUpRight } from './Icons'
import Section from './Section'

const Contact = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Contact" title="Say hello.">
    <p className="prose prose--muted">{contact.blurb}</p>
    <div className="contact__links">
      <a className="contact__email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact__social">
        <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowUpRight />
        </a>
        <a className="link" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
          <ArrowUpRight />
        </a>
      </div>
    </div>
  </Section>
)

export default Contact
