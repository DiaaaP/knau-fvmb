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
  email: 't-ainura@bk.ru',
} as const

export const primaryNavigation = [
  { title: 'Главная', to: '/' },
  { title: 'О нас', to: '/about' },
]
export const aboutNavigation = [
  { title: 'О факультете', to: '/about' },
  { title: 'Миссия', to: '/about/mission' },
  { title: 'Деканат', to: '/about/deans-office' },
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

// Working text retained from the supplied design brief, never presented as an approved mission.
export const missionDraft = {
  text: 'Подготовка специалистов ветеринарной медицины, развитие ветеринарной науки и практики для защиты здоровья животных, человека и обеспечения продовольственной безопасности Кыргызской Республики.',
  areas: [
    {
      title: 'Образование',
      description: 'Подготовка специалистов ветеринарной медицины.',
    },
    {
      title: 'Научная работа',
      description: 'Развитие исследований в области ветеринарии.',
    },
    {
      title: 'Практическая подготовка',
      description: 'Связь обучения с ветеринарной практикой.',
    },
  ],
}

// Role and qualifications are legible in the original screenshots uploaded to Stitch.
// Personal mobile numbers and personal email addresses are deliberately not republished.
export const staff = {
  name: 'Анарбек уулу Советбек',
  slug: 'anarbek-uulu-sovetbek',
  route: '/about/deans-office/anarbek-uulu-sovetbek',
  role: 'Заместитель декана',
  degree: 'Кандидат ветеринарных наук',
  title: 'Исполняющий обязанности доцента',
} as const

export const dean = {
  role: 'Декан факультета',
  facultyReference: 'Факультет ветеринарной медицины имени А.А. Алдашева',
  degree: 'Кандидат ветеринарных наук, доцент',
} as const
