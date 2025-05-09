import Product from '#models/product'
import Store from '#models/store'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoreProfilesController {
  /**
   * Fungsi untuk menampilkan halaman profile toko
   */
  public async storeProfile({ view, params }: HttpContext) {
    view.share({
      title: 'Profile Toko UMKM',
      store: await Store.query()
        .select(['nama_toko', 'deskripsi'])
        .where('id', params.id)
        .firstOrFail(),
      latestProducts: await Product.query()
        .select(['slug', 'nama_produk', 'stok', 'harga', 'foto_produk', 'kategori_id'])
        .where('status', 'Disetujui')
        .preload('category')
        .orderBy('created_at', 'asc')
        .limit(10),
    })

    return view.render('pages/user/store-profile')
  }
}
