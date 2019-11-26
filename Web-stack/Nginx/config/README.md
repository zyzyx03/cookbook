# Asas Konfigurasi Nginx

## Memahami Terma Konfigurasi

Terdapat 2 terma utama didalam konfigurasi nginx iaitu.

* Konteks(*Context*)

* Direktif(*Directive*):


    ```javascript
    events {}

    http {

    include mime.types;

    server {

        listen 80;
        server_name 167.99.93.26;

        root /var/www/sites/demo;
    }
    }
    ```

* Berikut adalah contoh direktif yang memiliki nama dan nilai sebagai contoh *listen* adalah nama dan 80 adalah nilai.

    ```javascript
        listen 80;
        server_name 167.99.93.26;
    ```

* Berikut adalah contoh konteks, konteks adalah bahagian didalam konfigurasi dan terdapat direktif didalamnya. Secara amnya konteks adalah sama seperti skop, dan skop boleh bersarang(*nested*) dan mewarisi dari skop yang di atas. Keseluruhan file konfigurasi dipanggil sebagai konteks utama (*main context*)

    ```javascript
    http {

    include mime.types;

    server {

        listen 80;
        server_name 167.99.93.26;

        root /var/www/sites/demo;
    }
    }
    ```

    ## Konfigurasi Blok Pelayan

    Tempatkan lokasi file demo dibahagian server dgn nama direktif root.

    ## Konfigurasi Blok Lokasi

    Gunakan konteks lokasi(*location*) dengan nama direktori seperti berikut. Terdapat empat padanan lokasi yang dapat digunakan. Keutamaan akan diberikan mengikut turutan dibawah. 

    1. Exact Match : = uri
    2. Preferential Prefix Match : ^~ uri
    3. REGEX match : ~* uri
    4. Prefix match : uri

    ```javascript
    events {}
    http {

    include mime.types;

    server {

        listen 80;
        server_name 167.99.93.26;

        root /var/www/sites/demo;

        # Preferential Prefix match
        # location /Greet2 {
        #    return 200 "Hello from Nginx greet location";
        #}

        # Exact match
        # location = /greet {
        #    return 200 "Hello from Nginx greet location - EXACT MATCH";
        #}

        # Regex match
        #location ~ /greet[0-9] {
        #    return 200 "Hello from Nginx greet location - REGEX MATCH";
        #}

        # Regex match - case insensitive
        location ~* /greet[0-9] {
            return 200 "Hello from Nginx greet location - REGEX MATCH INSENSITIVE";
        }   
    }
    }
    ```