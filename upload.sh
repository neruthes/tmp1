#!/bin/sh

rm -rf .git;
git init;
git add .;
git commit -m 'hello world';
git remote add origin https://neruthes:$(pasm p token.github.clipass-synced)@github.com/neruthes/tmp1.git;
git push -u origin master --force;

echo 'Uploaded.'
#open 'https://neruthes.xyz/tmp1/'
