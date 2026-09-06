import { toolbox } from '../data/site'
import Section from './Section'

const Toolbox = ({ id, number }) => (
  <Section id={id} number={number} eyebrow="Toolbox" title="What I reach for.">
    <dl className="rows rows--tight">
      {toolbox.map(({ group, items }) => (
        <div className="row" key={group}>
          <dt className="label row__meta">{group}</dt>
          <dd className="row__text">{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
)

export default Toolbox
