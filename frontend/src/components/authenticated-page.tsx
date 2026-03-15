import { Header } from '@/components/header'

type AuthenticatedPageProps = {
  children: React.ReactNode
}

export function AuthenticatedPage({ children }: AuthenticatedPageProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
