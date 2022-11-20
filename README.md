# Kisi Kisi Apps

Aplikasi penyimpanan kisi-kisi soal ujian sekolah berbasis web. Aplikasi dibuat untuk mempermudah guru-guru mendistribusikan kisi-kisi soal ujian melalui media digital, salah satunya website.

## Aplikasi dikembangkan menggunakan teknologi

1. Vue 3 (Main Front End)
2. VueRouter (Route Management)
3. TailwindCSS (CSS Utility)
4. FLowbite (TailwindCSS Components Plugin)
5. Axios (HTTP Request)
6. Vue3 Easy Datatables (Datatables)
7. Vite (Module Build Tool)
8. Font Awesome 6 Free Edition (Icon)
9. Semesta API build with Laravel 9 : [semesta-api](https://github.com/muhamadramdani275/semesta-api)

## Cara Install

1. Buka `Terminal/CMD/Git Bash` lalu clone repository [https://github.com/muhamadramdani275/kisi-kisi.git](https://github.com/muhamadramdani275/kisi-kisi.git)

   ```cli
   git clone https://github.com/muhamadramdani275/kisi-kisi.git
   ```

2. Masuk ke folder repo `kisi-kisi`. Bisa menggunakan explore bawaan dengan cara **Klik Kanan** folder repo `kisi-kisi` lalu `Open with Code` dan buka `terminal` pada `Visual Studio Code` atau menggunakan `CLI` dibawah ini

   ```cli
   cd kisi-kisi
   ```

3. Lalu jalan kan `npm install`

   ```cli
   npm install
   ```

4. Lalu jalan kan local servernya `npm run dev`

   ```cli
   npm run dev
   ```

5. Untuk melakukan build repo menjadi static site, gunakan `npm run build`

   ```cli
   npm run build
   ```

Output build akan membuat folder dengan nama `dist` dan mengenerate static file yang dapat dideploy ke hosting berbasis server `apache` atau `nginx`.

## Post Installation

Buka file `main.js`, rubah api url menjadi api masing-masing.

    ```javascript
    axios.defaults.baseURL = "API_URL";
    ```

    contoh

    ```javascript
    axios.defaults.baseURL = "http://api.laravel.com/api";
    ```

## Made with ❤️ by Muhamad Ramdani Hidayatullah
