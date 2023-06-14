'use client'

import AppUsersTable from '@/components/app/app-users-table'
import { ButtonSIWELogin } from '@/integrations/siwe/components/button-siwe-login'
import { IsSignedIn } from '@/integrations/siwe/components/is-signed-in'
import { IsSignedOut } from '@/integrations/siwe/components/is-signed-out'
import { useGetAppUsers } from '@/lib/hooks/app/use-get-app-users'
import { useUser } from '@/lib/hooks/use-user'

export default function PageDashboardTransactions() {
  return (
    <section className="p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-normal">Application Users</h3>
        <IsSignedOut>
          <div className="flex items-center gap-x-5 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-100">Authenticate to access admin area.</span>
            <ButtonSIWELogin className="btn btn-emerald btn-sm" />
          </div>
        </IsSignedOut>
      </div>
      <hr className="my-5 opacity-50" />
      <IsSignedIn>
        <RenderUserTable />
      </IsSignedIn>
    </section>
  )
}

const RenderUserTable = () => {
  const { user } = useUser()
  const { isLoading, isError, data } = useGetAppUsers(user)
  if (isError) return <div className="py-6 text-center">Unauthorized Access</div>
  return <div>{!isLoading && <AppUsersTable data={data?.users} className="w-full flex-1" />}</div>
}
