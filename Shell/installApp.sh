#!/bin/bash

#install application and add user

LIST_OF_APPS="openssh-server vim sudo python3"

for i in $LIST_OF_APPS
do
    yum -y install $i

done

# user creation
if [ $(id -u) -eq 0 ]; then
    read -p "Enter name: " username
    read -p "Enter password: " password
    grep -E "^$username" /etc/passwd > /dev/null
    if [ $? -eq 0 ]; then
        echo "username exist!"
        exit 1
    else
        pass=$(perl -e 'print crypt($ARGV[0], "password")' $password)
        useradd -m -p $pass $username
        [ $? -eq 0 ] && echo "User has been added to system!" || echo "Failed to add a user!"
        usermod -aG wheel $username
        [ $? -eq 0 ] && echo "User has been added to the wheel group" || echo "Failed to append user!"
    fi

else
        echo "Only root may add a user to the system"
        exit 2
fi

