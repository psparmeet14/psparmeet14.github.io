const Section = ({ id, number, eyebrow, title, children }) => (
  <section id={id} className="container section">
    <div className="section__head">
      <p className="eyebrow">
        {number} — {eyebrow}
      </p>
      <h2 className="section__title">{title}</h2>
    </div>
    {children}
  </section>
)

export default Section
