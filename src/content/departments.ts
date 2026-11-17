export interface Department {
  slug: string
  name: string
  mission?: readonly string[]
  image?: string
  head?: DepartmentHead
  gallery?: readonly string[]
  studySections?: readonly { title: string; description: string }[]
}

interface DepartmentHead {
  name: string
  role: string
  route: string
  image: string
}

export const departmentHead = {
  name: 'Кельдибекова Замира Салдыбакасовна',
  role: 'Заведующая кафедрой инфекционных и инвазионных болезней животных',
  route: '/departments/infectious-diseases/keldibekova-zamira-saldybakasovna',
  image: 'zhamira-keldibekova.webp',
} as const

export const departments: readonly Department[] = [
  {
    slug: 'infectious-diseases',
    name: 'Кафедра инфекционных и инвазионных болезней животных',
    image: 'infectious-department-team.webp',
    head: departmentHead,
    gallery: Array.from(
      { length: 8 },
      (_, index) => `infectious-staff-${index + 1}.webp`,
    ),
    studySections: [
      {
        title: 'История становления и развития кафедры',
        description: 'Исторические материалы раздела дополняются.',
      },
      {
        title: 'Профильные направления подготовки',
        description:
          'Подробная информация об образовательных направлениях дополняется.',
      },
    ],
    mission: [
      'Миссия кафедры инфекционных и инвазионных болезней животных заключается в подготовке высококвалифицированных специалистов в области ветеринарной медицины, обладающих глубокими теоретическими знаниями, практическими навыками и профессиональными компетенциями в области профилактики, диагностики и борьбы с инфекционными и инвазионными заболеваниями животных.',
      'Основными приоритетами кафедры являются обеспечение качественного образовательного процесса, развитие научно-исследовательской деятельности и совершенствование практической подготовки студентов с использованием современных методов ветеринарной диагностики и исследований.',
    ],
  },
  {
    slug: 'veterinary-sanitary-expertise',
    name: 'Кафедра ветеринарно-санитарной экспертизы, гистологии и патологии',
  },
  { slug: 'internal-diseases', name: 'Кафедра внутренних болезней животных' },
  { slug: 'anatomy-physiology', name: 'Кафедра анатомии и физиологии' },
  { slug: 'obstetrics-surgery', name: 'Кафедра акушерства и хирургии' },
]

export function departmentPath(department: Department) {
  return '/departments/' + department.slug
}
