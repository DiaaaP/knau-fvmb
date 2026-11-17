import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultContent } from './managed'
import type { PublishedContent } from './managed'

const initialContent: PublishedContent = { ...defaultContent, documents: [] }
const ContentContext = createContext(initialContent)

export function PublishedContentProvider({
  children,
}: {
  children: ReactNode
}) {
  const [content, setContent] = useState(initialContent)

  useEffect(() => {
    if (import.meta.env.VITE_ENABLE_API !== 'true') return
    const controller = new AbortController()
    async function load() {
      try {
        const response = await fetch('/api/content', {
          signal: controller.signal,
        })
        if (response.ok) setContent((await response.json()) as PublishedContent)
      } catch (error) {
        if (!controller.signal.aborted)
          console.error('Не удалось загрузить данные сайта.', error)
      }
    }
    void load()
    return () => controller.abort()
  }, [])

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

export function usePublishedContent() {
  return useContext(ContentContext)
}
