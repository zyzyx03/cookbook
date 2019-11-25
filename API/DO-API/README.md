# How to Use the DigitalOcean API

I use DigitalOcean API to obtain 'slug' value to be put inside the terraform config file.

What is 'Slug'? 

A slug is a unique string (typically a normalized version of title or other representative string), often used as part of a URL. The input form will render an error message if the current slug field not unique.

# Using the API

1. Login to DigitalOcean Account. 

2. Navigate to Manage > API > Token/Keys > Generate New Token

3. Copy the token somewhere because it only appear once. 

4. Declare a variable with that token.

```bash 
TOKEN=77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3
```

# Example: List all Actions

```bash
curl -X GET "https://api.digitalocean.com/v2/actions" \
	-H "Authorization: Bearer $TOKEN" | -m python json.tool
```

# Example: List all Droplets

```bash
curl -X GET "https://api.digitalocean.com/v2/droplets" \
	-H "Authorization: Bearer $TOKEN" | -m python json.tool
```

# Example: List all OS 

```bash
#Example below I try to find the list of Ubuntu OS that available in DigitalOcean.

curl -X GET --silent "https://api.digitalocean.com/v2/images?per_page=999" -H "Authorization: Bearer $TOKEN" | python -m json.tool | grep "slug" | grep "ubuntu"
```

# Example: Create a New Droplet

```bash
curl -X POST "https://api.digitalocean.com/v2/droplets" \
	-d'{"name":"Test","region":"sgp1","size":"512mb","image":"ubuntu-18-04-x64"}' \
	-H "Authorization: Bearer $TOKEN" \
	-H "Content-Type: application/json"
```

# Example: List All Droplet

```bash
curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" "https://api.digitalocean.com/v2/droplets?page=1&per_page=1" 
```

# Example: Delete a Droplet by ID

```bash
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" "https://api.digitalocean.com/v2/droplets/168645684" 
```

# Reference

> [DigitalOcean API V2](https://developers.digitalocean.com/documentation/v2/)