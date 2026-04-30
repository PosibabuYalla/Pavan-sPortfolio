import PageLayout from '../components/PageLayout'
import ProjectsSection from '../components/ProjectsSection'
import CursorGlow from '../components/CursorGlow'

export default function ProjectsPage() {
  return (
    <>
      <CursorGlow />
      <PageLayout><ProjectsSection /></PageLayout>
    </>
  )
}
