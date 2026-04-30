import PageLayout from '../components/PageLayout'
import AboutSection from '../components/AboutSection'
import CursorGlow from '../components/CursorGlow'

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <PageLayout><AboutSection /></PageLayout>
    </>
  )
}
