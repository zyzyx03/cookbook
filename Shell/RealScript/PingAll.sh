#!/bin/bash
#Author:zyzyx03
#Description: This script will ping multiple host

hosts="/home/zyzyx93/Github/Cookbook/Shell/RealScript/iplist.txt"

for ip in $(cat $hosts)     #Ip act as container

do
	ping -c1 $ip &> /dev/null
	if [ $? -eq 0 ]
then
	echo "$ip ip is OK!"
else
	echo "$ip ip is not OK!"
fi
done
