# Rancher Setup

1. Prepare centos node with necessary package.

```bash
yum -y update && yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. Install docker CE

> [Shell script for latest Docker CE installation](https://get.docker.com/)

3. Enable the service
```bash 
for i in enable start status; do systemctl $i docker; done
```

4. Fixing docker.socket permission

```bash 
sudo usermod -aG docker $(USER)
cd var/run/
sudo chmod 666 docker.sock
```

5. Run the rancher container.

```bash
docker run -d --restart=unless-stopped -p 80:80 -p 443:443 -v /opt/rancher:/var/lib/rancher --name rancher rancher/rancher:v2.2.8
```

6. Login and add GKE cluster
* Obtain the GCP service account private key in JSON format from IAM and admin > service account > Create key

> It will take some time for the cluster to be provisioned.

![Picture1](https://drive.google.com/uc?export=view&id=1Onh1ilkHBwefSv1xMKa0m3iR1A02U9lA)


7. Install HELM 2.0
```bash
# installs helm with bash commands for easier command line integration
curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get | bash

# add a service account within a namespace to segregate tiller
kubectl --namespace kube-system create sa tiller

# create a cluster role binding for tiller
kubectl create clusterrolebinding tiller \
    --clusterrole cluster-admin \
    --serviceaccount=kube-system:tiller

# initialized helm within the tiller service account
helm init --service-account tiller

# updates the repos for Helm repo integration
helm repo update

# verify that helm is installed in the cluster
kubectl get deploy,svc tiller-deploy -n kube-system
```

8. Install Helm 3.0 

```bash
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 > get_helm.sh

chmod 700 get_helm.sh

./get_helm.sh
```

---
> Tiller had been removed in 3.0 stable release
---


## Reference 

> [Rancher single node install](https://rancher.com/docs/rancher/v2.x/en/installation/single-node/)

> [Rancher Releases](https://github.com/rancher/rancher/releases)
