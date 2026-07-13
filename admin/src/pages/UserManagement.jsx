import { useQuery } from "@tanstack/react-query"
import { Edit2, Trash2, Plus, ShieldCheck, User, Calendar } from "lucide-react"
import { getUsers } from "../services/auth.services"

const UserManagement = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm">
        Error loading users: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    )
  }

  const hasUsers = data?.users && data.users.length > 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">User Management</h1>
          <p className="text-sm text-zinc-500">Manage your system users, accounts, and application roles.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md shadow-sm shadow-emerald-600/10 active:scale-[0.98]">
          <Plus className="h-4 w-4" />
          Add New User
        </button>
      </div>

      {/* Main Container */}
      {hasUsers ? (
        <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80 text-xs font-bold text-zinc-500 tracking-wider uppercase">
                  <th className="px-6 py-4">User details</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined Date</th> {/* 👈 New Column Header */}
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
                {data.users.map((user) => (
                  <tr key={user._id} className="hover:bg-emerald-50/20 transition-colors group">
                    {/* User Avatar & Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                          {user.fullname?.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          {user.fullname}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-zinc-600 font-medium">{user.email}</td>

                    {/* Role Uniform Badge */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${
                        user.role === 'admin' 
                          ? 'bg-amber-50 text-amber-800 border border-amber-200/60' 
                          : 'bg-zinc-100 text-zinc-800 border border-zinc-200/60'
                      }`}>
                        {user.role === 'admin' ? <ShieldCheck className="w-3 h-3" /> : <User className="w-3 h-3" />}
                        {user.role || 'user'}
                      </span>
                    </td>

                    {/* Localized Joined Date 👈 New Column Data */}
                    <td className="px-6 py-4 text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>
                          {user.createdAt 
                            ? new Date(user.createdAt).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })
                            : 'N/A'
                          }
                        </span>
                      </div>
                    </td>

                    {/* Action Triggers */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all" title="Edit User">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" title="Delete User">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center border border-dashed border-zinc-200 rounded-2xl p-16 text-center bg-white">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-xl">
            👥
          </div>
          <h3 className="text-sm font-semibold text-zinc-900">No users found</h3>
          <p className="text-xs text-zinc-400 max-w-xs mt-1">There are no registered profiles present on your database cluster.</p>
        </div>
      )}
    </div>
  )
}

export default UserManagement