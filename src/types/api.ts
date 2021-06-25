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

type SocialLink = {
  socialMedia: string
  url: string
}

export type Author = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  photo: {
    name: string
    url: string
  }
  description: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
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
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
