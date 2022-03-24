#!/usr/env/bin bash

echo $BASH_VERSION

yarn install

export NODE_ENV=production

yarn run format
yarn run build