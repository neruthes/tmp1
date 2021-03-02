#!/bin/sh

rm index.html;

lastbuild=`cat .build`;

ls -1 "$lastbuild" > .ls;

node compile.js;

newbuild=`cat .build`;
mv "$lastbuild" "$newbuild";
echo "$lastbuild -> $newbuild";

echo 'Compiled.'
