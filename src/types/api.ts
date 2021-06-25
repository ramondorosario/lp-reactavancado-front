export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  image: {
    alternativeText: string
    url: string
  }
  title: string
  description: string
}

type TechIcon = {
  name: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  priceInstallment: number
  numberInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
}
