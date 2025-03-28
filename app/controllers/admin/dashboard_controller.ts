import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  public dashboard({ view }: HttpContext) {
    view.share({
      title: 'Dashboard Admin',
      pageHeader: true,
      headerData: {},
    })

    return view.render('pages/admin/dashboard/index')
  }
}
