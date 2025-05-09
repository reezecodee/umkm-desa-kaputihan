import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutsController {
  /**
   * Fungsi untuk logout dan menghapus session
   */
  async handle({ response, auth }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().toRoute('user.home')
  }
}
