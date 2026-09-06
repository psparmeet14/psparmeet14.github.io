import { profile } from '../data/site'
import { ArrowUpRight } from './Icons'

const Hero = () => (
  <section id="top" className="container hero">
    <div className="hero__text">
      <p className="eyebrow">
        {profile.role} · {profile.company} · {profile.location}
      </p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__tagline">{profile.tagline}</p>
      <p className="hero__bio">{profile.bio}</p>
      <div className="hero__actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
          <ArrowUpRight />
        </a>
        <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowUpRight />
        </a>
      </div>
    </div>
    <img className="hero__photo" src={profile.photo} alt={profile.name} width="280" height="280" />
  </section>
)

export default Hero
