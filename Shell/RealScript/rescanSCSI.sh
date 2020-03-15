#!/usr/bin/env bash

for host in 'ls /sys/class/scsi_host'
do 
	echo ${host}; echo "- - -" > /sys/class/scsi_host/${host}/scan
done
