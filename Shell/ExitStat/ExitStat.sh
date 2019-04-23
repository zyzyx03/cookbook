#!/bin/bash
# Author:zyzyx03
# Script that will display exit status

ls -alh

if  [ $? -eq 0 ]
then
	echo "The code is Correct"
fi
