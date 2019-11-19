# Rancher Setup

1. Prepare centos node with necessary package.

```bash
yum -y update && yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. Install docker. 

> [Get Docker](https://get.docker.com/)

3. Enable the service

4. Fixing docker.socket permission

```bash 
sudo usermod -aG docker $(USER)
sudo chmod 666 docker.socker
```

5. Run the rancher container.

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 -v /opt/rancher:/var/lib/rancher --name rancher rancher/rancher:v2.2.8
```

6. Install HELM


```bash
#!/usr/bin/env bash
echo "install helm"
# installs helm with bash commands for easier command line integration
curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get | bash
# add a service account within a namespace to segregate tiller
kubectl --namespace kube-system create sa tiller
# create a cluster role binding for tiller
kubectl create clusterrolebinding tiller \
    --clusterrole cluster-admin \
    --serviceaccount=kube-system:tiller

echo "initialize helm"
# initialized helm within the tiller service account
helm init --service-account tiller
# updates the repos for Helm repo integration
helm repo update

echo "verify helm"
# verify that helm is installed in the cluster
kubectl get deploy,svc tiller-deploy -n kube-system
```


> [Rancher single node install](https://rancher.com/docs/rancher/v2.x/en/installation/single-node/)

> [Rancher Releases](https://github.com/rancher/rancher/releases)

>