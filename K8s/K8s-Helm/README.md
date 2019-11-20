# HELM Configuration and Basic

## 'helm search': finding chart
* Searching chart from hub
```bash
$ helm search hub wordpress
```
* Searching chart from repo
```bash
$ helm search repo stable/mariadb
```

## Adding stable repo 

1. You can obtain your helm hub and another repository.  

```bash
## Adding repo
$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/

## Listing repo
$ helm repo list
```

## 'helm install': installing a package

```bash
# You can --generate-name for auto generate name (release object) or you can specify it yourself.

 $ helm install --generate-name stable/mysql

```

## ‘helm uninstall’: uninstalling a release
```bash
$ helm uninstall <release-name>
```

## helm status
```bash
# To keep track of a release’s state, or to re-read configuration information, you can use helm status

$ helm status <release-object>
```

## Customizing the Chart before installing
```bash
# To see what options are configurable on a chart

$ helm show values stable/mariadb

# You can then override any of these settings in a YAML formatted file, and then pass that file during installation.

$ echo '{mariadbUser: user0, mariadbDatabase: user0db}' > config.yaml

$ helm install -f config.yaml stable/mariadb
```

## Creating your own chart
```bash
## Creating chart

$ helm create <chart-name>

# As you edit your chart, you can validate that it is well-formed by running

$ helm lint

#When it’s time to package the chart up for distribution

$ helm package

# And that chart can now easily be installed

$ helm install ./deis-workflow-0.1.0.tgz

```