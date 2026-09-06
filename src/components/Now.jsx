import { now } from '../data/site'
import Section from './Section'

const Now = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Now" title="Outside the day job.">
    <p className="prose">
      {now.building} Reading <em>{now.reading}</em>. {now.habit}
    </p>
  </Section>
)

export default Now
