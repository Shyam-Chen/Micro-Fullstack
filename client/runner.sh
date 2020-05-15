#!/bin/sh

set -e

for arg in "$@"
do
  case $arg in
    -i|--install)
      yarn concurrently \
        "cd app-gateway && yarn install" \
        "cd app-foo && yarn install" \
        "cd app-bar && yarn install"
      ;;
    -s|--serve)
      yarn concurrently \
        "cd app-gateway && yarn serve" \
        "cd app-foo && yarn serve" \
        "cd app-bar && yarn serve"
      ;;
    -b|--build)
      yarn concurrently \
        "cd app-gateway && yarn build" \
        "cd app-foo && yarn build" \
        "cd app-bar && yarn build"
      ;;
    *)
      echo "usage: [-i install] | [-s serve] | [-b build]"
      exit 1
      ;;
  esac
done
