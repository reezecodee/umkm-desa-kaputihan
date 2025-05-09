import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  /**
   * Fungsi untuk menampilkan halaman dashboard admin & super admin
   */
  public async dashboard({ view, bouncer }: HttpContext) {
    await bouncer.with('UserPolicy').denies('editAdminChat')

    view.share({
      title: 'Dashboard Admin',
      pageHeader: true,
      headerData: {},
    })

    return view.render('pages/admin/dashboard/index')
  }
}
