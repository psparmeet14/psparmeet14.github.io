import { useEffect } from 'react'

const getMetaDescriptionTag = () => {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }

  return tag
}

export const usePageMetadata = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      const metaTag = getMetaDescriptionTag()
      metaTag.setAttribute('content', description)
    }
  }, [title, description])
}
