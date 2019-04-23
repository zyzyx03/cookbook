#!/bin/bash
# Author:zyzyx03
# Combine it with var

host="172.20.254.254"
ping -c1 $host &> /dev/null
if [ $? -eq 0 ]
then
	echo "$host Alive!"
else
	echo "$host Down!"
fi
