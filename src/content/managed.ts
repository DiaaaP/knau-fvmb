export const ministryName =
  'МИНИСТЕРСТВО НАУКИ, ВЫСШЕГО ОБРАЗОВАНИЯ И ИННОВАЦИЙ КЫРГЫЗСКОЙ РЕСПУБЛИКИ'

export interface EditableContent {
  homeIntro: string
  missionMotto: string
  missionBody: string
  officePhone: string
  officeEmail: string
}

export interface FacultyDocument {
  id: number
  title: string
}

export interface PublishedContent extends EditableContent {
  documents: FacultyDocument[]
}

export const defaultContent: EditableContent = {
  homeIntro: 'Ветеринарное образование и клиническая практика',
  missionMotto:
    'Человеческая медицина хранит человека, а ветеринарная — человечество',
  // The fully legible paragraph from the reference supplied by the user.
  missionBody:
    'Факультет обеспечивает получение обучающимися качественного высшего ветеринарного образования, формирует профессиональные компетенции, практические навыки, научно-исследовательскую культуру и способность к непрерывному профессиональному развитию.',
  officePhone: '+996 312 54-05-34',
  officeEmail: '',
}

export function missionParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}
