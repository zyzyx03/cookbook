# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = "${var.do_token}"
}
# Configure a small VM
resource "digitalocean_droplet" "web-1" {
  image  = "ubuntu-18-04-x64"
  name   = "web-1"
  region = "sgp1"
  size   = "512mb"
  ssh_keys = [var.ssh_fingerprint] # SSH keys that need to be installed on the server.
  tags = ["web-1"]

connection {
    user = "root"
    type = "ssh"
    host = digitalocean_droplet.web1.ipv4_address
    private_key = "${file(var.pvt_key)}"
    timeout = "2m"
  }
}