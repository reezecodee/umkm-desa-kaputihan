import Store from '#models/store'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  async run() {
    await Store.createMany([
      {
        nama_pemilik: 'Slamet Santoso',
        nama_toko: 'Toko Pisang Pak Slamet',
        deskripsi: 'Menyediakan pisang berkualitas dari kebun terbaik di Tasikmalaya',
        alamat: 'Jl. Tanuwijaya, Empang Sari, Tawang, Kota Tasikmalaya, Jawa Barat',
        no_telepon: '081298897000',
        email: 'pakslamet@gmail.com',
        status: 'Aktif',
        foto_toko: '/foto_toko/contoh.jpg',
      },
      {
        nama_pemilik: 'Budi Santoso',
        nama_toko: 'Toko Sayuran Pak Budi',
        deskripsi: 'Menyediakan sayuran berkualitas dari kebun terbaik di Tasikmalaya',
        alamat: 'Jl. Tanuwijaya, Empang Sari, Tawang, Kota Tasikmalaya, Jawa Barat',
        no_telepon: '081298897001',
        email: 'pakbudi@gmail.com',
        status: 'Aktif',
        foto_toko: '/foto_toko/contoh.jpg',
      },
      {
        nama_pemilik: 'Ambajat Santoso',
        nama_toko: 'Toko Manggis Pak Ambajat',
        deskripsi: 'Menyediakan manggis berkualitas dari kebun terbaik di Tasikmalaya',
        alamat: 'Jl. Tanuwijaya, Empang Sari, Tawang, Kota Tasikmalaya, Jawa Barat',
        no_telepon: '081298897002',
        email: 'pakambajat@gmail.com',
        status: 'Nonaktif',
        foto_toko: '/foto_toko/contoh.jpg',
      },
    ])
  }
}
