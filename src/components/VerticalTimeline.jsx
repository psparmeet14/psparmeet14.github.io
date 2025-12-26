import { useMemo, useState } from 'react'

function toKey(value) {
  return String(value)
}

function parseDateLabelToUtcMillis(dateLabel) {
  const raw = String(dateLabel || '').trim()
  if (!raw) return 0

  // Supported formats:
  // - "December 2025"
  // - "Dec 2025"
  // - "2025"
  // Anything else falls back to 0.
  const monthMap = {
    january: 0,
    jan: 0,
    february: 1,
    feb: 1,
    march: 2,
    mar: 2,
    april: 3,
    apr: 3,
    may: 4,
    june: 5,
    jun: 5,
    july: 6,
    jul: 6,
    august: 7,
    aug: 7,
    september: 8,
    sep: 8,
    sept: 8,
    october: 9,
    oct: 9,
    november: 10,
    nov: 10,
    december: 11,
    dec: 11
  }

  const yearOnly = raw.match(/^(\d{4})$/)
  if (yearOnly) {
    const year = Number(yearOnly[1])
    return Date.UTC(year, 11, 31, 23, 59, 59)
  }

  const monthYear = raw.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (monthYear) {
    const monthToken = monthYear[1].toLowerCase()
    const year = Number(monthYear[2])
    const monthIndex = monthMap[monthToken]
    if (monthIndex == null || Number.isNaN(year)) return 0
    return Date.UTC(year, monthIndex, 1, 0, 0, 0)
  }

  return 0
}

function compareMilestonesDesc(a, b) {
  const aTime = parseDateLabelToUtcMillis(a.dateLabel)
  const bTime = parseDateLabelToUtcMillis(b.dateLabel)
  if (aTime !== bTime) return bTime - aTime

  // Tie-breakers for stable-ish sorting
  const aTitle = toKey(a.title)
  const bTitle = toKey(b.title)
  if (aTitle !== bTitle) return aTitle.localeCompare(bTitle)
  return toKey(b.dateLabel).localeCompare(toKey(a.dateLabel))
}

function extractYear(dateLabel) {
  const raw = String(dateLabel || '').trim()
  const yearMatch = raw.match(/(\d{4})$/)
  return yearMatch ? yearMatch[1] : 'Unknown'
}

/**
 * data shape (flat):
 * [
 *   {
 *     dateLabel: 'December 2025',
 *     title: 'Prompt Engineering',
 *     description: 'One-liner…',
 *     highlights: [...],
 *     tags: [...]
 *   }
 * ]
 */
const VerticalTimeline = ({ data }) => {
  const items = useMemo(() => {
    return [...data].sort(compareMilestonesDesc)
  }, [data])

  const groupedByYear = useMemo(() => {
    const groups = new Map()
    items.forEach((item) => {
      const year = extractYear(item.dateLabel)
      if (!groups.has(year)) groups.set(year, [])
      groups.get(year).push(item)
    })

    const years = Array.from(groups.keys()).sort((a, b) => Number(b) - Number(a))
    return years.map((year) => ({ year, items: groups.get(year) }))
  }, [items])

  const allItemKeys = useMemo(
    () => items.map((item, idx) => `${item.dateLabel}-${item.title}-${idx}`),
    [items]
  )

  const allYearKeys = useMemo(() => groupedByYear.map((g) => g.year), [groupedByYear])

  const [expandedItems, setExpandedItems] = useState(() => new Set())
  const [expandedYears, setExpandedYears] = useState(() => new Set())
  const isAllExpanded = expandedItems.size === allItemKeys.length && allItemKeys.length > 0
  const isAllYearsExpanded = expandedYears.size === allYearKeys.length && allYearKeys.length > 0

  const toggleAll = () => {
    const nextExpand = !(isAllExpanded && isAllYearsExpanded)

    setExpandedItems(() => (nextExpand ? new Set(allItemKeys) : new Set()))
    setExpandedYears(() => (nextExpand ? new Set(allYearKeys) : new Set()))
  }

  return (
    <section className="vtimeline" aria-label="Milestones timeline">
      <div className="vtimeline__controls">
        <button type="button" className="btn-custom vtimeline__toggle" onClick={toggleAll}>
          {isAllExpanded && isAllYearsExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <div className="vtimeline__years">
        {groupedByYear.map((group, groupIdx) => {
          const previewTitles = group.items
            .slice(0, 2)
            .map((i) => i.title)
            .filter(Boolean)
            .join(', ')

          const summaryParts = [`${group.items.length} ${group.items.length === 1 ? 'item' : 'items'}`]
          if (previewTitles) summaryParts.push(previewTitles)
          const summaryText = summaryParts.join(' · ')

          const yearOpenFromState = expandedYears.has(group.year)

          return (
            <details
              key={group.year}
              className="vtimeline__year"
              open={groupIdx === 0 || yearOpenFromState}
              onToggle={(e) => {
                const nextOpen = e.currentTarget.open
                setExpandedYears((prev) => {
                  const next = new Set(prev)
                  if (nextOpen) next.add(group.year)
                  else next.delete(group.year)
                  return next
                })
              }}
            >
              <summary className="vtimeline__year-summary">
                <span className="vtimeline__year-label">
                  <span className="vtimeline__year-chevron" aria-hidden="true" />
                  {group.year}
                </span>
                <span className="vtimeline__year-summary-text">
                  {summaryText}
                </span>
              </summary>

              <div className="vtimeline__flat" aria-label={`Milestones in ${group.year}`}>
                {group.items.map((milestone, idx) => {
                  const itemKey = `${milestone.dateLabel}-${milestone.title}-${idx}`
                  const open = expandedItems.has(itemKey)

                  return (
                    <details
                      key={itemKey}
                      className="vtimeline__milestone vtimeline__milestone--flat"
                      open={open}
                      onToggle={(e) => {
                        const nextOpen = e.currentTarget.open
                        setExpandedItems((prev) => {
                          const next = new Set(prev)
                          if (nextOpen) next.add(itemKey)
                          else next.delete(itemKey)
                          return next
                        })
                      }}
                    >
                      <summary className="vtimeline__milestone-summary">
                        <div className="vtimeline__milestone-text">
                          <span className="vtimeline__milestone-title">{milestone.title}</span>
                          {milestone.description ? (
                            <span className="vtimeline__milestone-subtitle">
                              {milestone.description}
                            </span>
                          ) : null}
                        </div>
                        <span className="vtimeline__milestone-date">{milestone.dateLabel}</span>
                      </summary>

                      <div className="vtimeline__milestone-body">
                        {Array.isArray(milestone.highlights) && milestone.highlights.length > 0 ? (
                          <ul>
                            {milestone.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        ) : null}

                        {Array.isArray(milestone.tags) && milestone.tags.length > 0 ? (
                          <div className="vtimeline__tags" aria-label="Tags">
                            {milestone.tags.map((tag) => (
                              <span key={tag} className="skill-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </details>
                  )
                })}
              </div>
            </details>
          )
        })}
      </div>
    </section>
  )
}

export default VerticalTimeline
