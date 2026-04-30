import PageLayout from '../components/PageLayout'
import SkillsSection from '../components/SkillsSection'
import CursorGlow from '../components/CursorGlow'

export default function SkillsPage() {
  return (
    <>
      <CursorGlow />
      <PageLayout><SkillsSection /></PageLayout>
    </>
  )
}
