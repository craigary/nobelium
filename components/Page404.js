import Container from './Container'

// TODO: locale is provided as a prop here to ensure hooks order. It should call
//       `useLocale()` directly. We might need refactor this part later.
export default function Page404 ({ locale }) {
  return (
    <Container>
      <h1 className="text-5xl text-black dark:text-white text-center">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center">{locale.PAGE.ERROR_404.MESSAGE}</p>
    </Container>
  )
}
