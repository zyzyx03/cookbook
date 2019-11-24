# Asas Nginx: Pelayan berprestasi tinggi 

## Pengenalan pendek

 Berbeza dengan pesaingnya Apache yang menghasilkan  bebenang(*thread*) atau proses bagi setiap satu pelayan yang dikendalikan, Nginx menggunakan satu *Master* proses dan 1 proses pekerja(*worker*) untuk mengendalikan kandungan statik dan menyerahkan kandungan dinamik kepada proses yang lain seperti php-fmp. Dengan hanya satu benenang(*thread*) Nginx dapat mengendalikan beribu permintaan pelanggan secara serentak. 

 > 1 pekerja(*worker*) proses adalah bilangan lalai(*default*) dan dapat diubah mengikut kesesuaian. Menurut dokumentasi bilangan worker harus dipadankan dengan bilangan teras pada CPU tetapi ia bergantung pada situasi dan kesesuaian persekitaran.  

## Pemasangan Nginx pada server Ubuntu.

1. Untuk *provisioning* saya menggunakan Terraform dan memilih Digital Ocean sebagai pembekal perkomputeran awan. 
Pautan panduan bagi menggunakan Terraform disertakan di bawah. 

2. Sistem operasi yang digunakan adalah Linux dari jenis Ubuntu versi 18.4-LTS.

3. Setelah pelayan siap di *provision*, sambung ke pelayan menggunakan SSH dan gunakan baris perintah dibawah untuk tujuan pemasangan Nginx.

    ```bash
    apt -y update && apt -y upgrade && apt -y install nginx 
    ```

4. Bagi sistem operasi Ubuntu servis akan aktif secara lalai tanpa sebarang tetapan tambahan, anda boleh memeriksa servis Nginx dengan menggunakan baris perintah seperti di bawah.

    ```bash
    systemctl status nginx

    # Atau guna baris perintah ini jika anda dapati servis Nginx tidak aktif.

    for i in enable start status; do systemctl $i nginx; done
    ```

5. Setelah semuanya siap salin IP awam dan tampalkan di pelayar, anda akan disambut dengan paparan seperti berikut. 

    ![Picture1](https://drive.google.com/uc?export=view&id=199V-s-7EbJFPRv0vxs94DKHqbyCGxKjc)


## Pemasangan Nginx dari kod sumber. 

1. Muat turun kod sumber terbaru dari pautan di bawah.

    > [Pautan ke Nginx.org](https://nginx.org/)

2. Salin pautan dari halaman muat turun dan gunakan baris perintah seperti berikut bagi memuat turun.

    ```bash

    wget https://nginx.org/download/nginx-1.17.6.tar.gz

    ## Atau anda boleh menggunakan curl

    curl -O https://nginx.org/download/nginx-1.17.6.tar.gz

    ```

3. Ekstark file yang telah dimuat turun.

    ```bash
    tar -zxvf nginx-1.17.6.tar.gz
    ```

4. Masuk ke direktori yang telah diekstrak dan gunakan baris perintah berikut

* Pasang pengkompil terlebih dahulu sebelum menggunakan baris perintah ./configure

    ```bash
    ## Pasang pakej pengkompil

    apt install -y build-essential libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev 

    ## Tambah pengguna dan kumpulan nginx

    useradd -s /sbin/nologin nginx

    ## Tetapan untuk konfigurasi

    ./configure --user=nginx --group=nginx --sbin-path=/usr/bin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --with-pcre --pid-path=/var/run/nginx.pid --with-http_ssl_module 

    ## Kompil sumber konfigurasi

    make 

    ## Pasang sumber yang telah dikompil

    make install 

    ## Periksa pemasangan 

    ls -l /etc/nginx

    nginx -V

    ## Mulakan servis Nginx

    /usr/sbin/nginx

    ```

    > Mengapa melakukan pemasangan dari kod sumber ?

    > Pemasangan Nginx dari kod sumber memberikan kelebihan untuk menggunakan modul kustom yang dapat menambah fungsi yang tidak terdapat didalam pengurus pakej. Terdapat 2 variasi modul iaitu modul bundle dan modul pihak ketiga. 

5. Konfigurasi sistemd bagi Nginx

    >[Systemd Nginx service file](https://www.nginx.com/resources/wiki/start/topics/examples/systemd/)






