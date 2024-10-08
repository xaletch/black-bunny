import { Layout } from '@/templates/layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout')({
  component: () => <LayoutContent />,
})

function LayoutContent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}