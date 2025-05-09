import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RestrictingUserMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    if (!ctx.auth.isAuthenticated) {
      return ctx.response.redirect().toRoute('login.show')
    }

    const user = ctx.auth.user

    if (!user || (user.role !== 'Admin' && user.role !== 'Super Admin')) {
      return ctx.response.redirect().toRoute('admin.dashboard')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
