import { departments, departmentPath } from './departments'

export const institution = {
  ministry:
    'МИНИСТЕРСТВО НАУКИ, ВЫСШЕГО ОБРАЗОВАНИЯ И ИННОВАЦИЙ КЫРГЫЗСКОЙ РЕСПУБЛИКИ',
  name: 'Факультет ветеринарной медицины',
  university: 'КНАУ им. К.И. Скрябина',
  fullName: 'Факультет ветеринарной медицины КНАУ им. К.И. Скрябина',
  portal: 'https://avn.knau.kg',
  official: 'https://fv.knau.kg/',
  phone: '+996 312 54-05-34',
  phoneLink: 'tel:+996312540534',
  emailPlaceholder: 'Электронная почта уточняется',
} as const

export interface NavigationItem {
  title: string
  to: string
  children?: readonly { title: string; to: string }[]
  submenuLabel?: string
  id?: string
}

export const aboutNavigation = [
  { title: 'О факультете', to: '/about' },
  { title: 'Миссия', to: '/about/mission' },
  { title: 'Деканат', to: '/about/deans-office' },
  { title: 'Документы', to: '/about/documents' },
]

export const facultySections = [
  {
    title: 'Миссия факультета',
    to: '/about/mission',
    description: 'Цели и направления работы факультета.',
  },
  {
    title: 'Деканат',
    to: '/about/deans-office',
    description: 'Руководство факультета и сведения о сотрудниках.',
  },
]

export const primaryNavigation: NavigationItem[] = [
  { title: 'Главная', to: '/' },
  {
    title: 'О нас',
    to: '/about',
    id: 'about',
    submenuLabel: 'Разделы о факультете',
    children: aboutNavigation,
  },
  {
    title: 'Абитуриентам',
    to: '/applicants',
    id: 'applicants',
    submenuLabel: 'Разделы для абитуриентов',
    children: [
      { title: 'Обращение ректора', to: '/applicants/rector-address' },
    ],
  },
  { title: 'Студентам', to: '/students' },
  {
    title: 'Кафедры',
    to: '/departments',
    id: 'departments',
    submenuLabel: 'Разделы кафедр',
    children: departments.map((department) => ({
      title: department.name,
      to: departmentPath(department),
    })),
  },
  { title: 'Индустриальный совет', to: '/industrial-council' },
]

// Only the fully readable faculty paragraph is transcribed; clipped text is not reconstructed.
export const facultyMission = {
  motto: 'Человеческая медицина хранит человека, а ветеринарная — человечество',
  paragraphs: [
    'Факультет обеспечивает получение обучающимися качественного высшего ветеринарного образования, формирует профессиональные компетенции, практические навыки, научно-исследовательскую культуру и способность к непрерывному профессиональному развитию.',
  ],
} as const

// Role and qualifications are legible in the original screenshots uploaded to Stitch.
// The user has now explicitly authorised transferring the displayed original contact details.
export const staff = {
  name: 'Анарбек уулу Советбек',
  slug: 'anarbek-uulu-sovetbek',
  route: '/about/deans-office/anarbek-uulu-sovetbek',
  role: 'Заместитель декана',
  image: 'anarbek-uulu-sovetbek.webp',
  email: 'sovetbek.1989@gmail.com',
  phone: '+996 505 058 998',
  phoneLink: 'tel:+996505058998',
  degree: 'Кандидат ветеринарных наук',
  title: 'Исполняющий обязанности доцента',
} as const

export const dean = {
  role: 'Декан факультета',
  image: 'dean.webp',
  route: '/about/deans-office/dean',
  facultyReference: 'Факультет ветеринарной медицины имени А.А. Алдашева',
  degree: 'Кандидат ветеринарных наук, доцент',
} as const
