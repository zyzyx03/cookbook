# Quickstart:

1. Set up DigitalOcean credentials:
* DigitalOcean Signup Link (if you use this link to sign up for DO, we both get some DO credits)

* DigitalOcean SSH Key/API Token Setup video

* Put those credentials into the variables.tf file.

2. Initialize and run terraform:
```bash
terraform init

terraform plan \
-var "do_token" \
-var "pub_key"  \
-var "pvt_key"  \
-var "ssh_fingerprint=$SSH_FINGERRINT" {} 
```

3. If you're ready to spend some money (or DO credits):
```bash
terraform apply
```
