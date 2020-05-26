#!/bin/sh

set -e

for arg in "$@"
do
  case $arg in
    -i|--install)
      yarn concurrently \
        "cd app-gateway && yarn install" \
        "cd app-components && yarn install" \
        "cd app-foo && yarn install" \
        "cd app-bar && yarn install"
      ;;
    -s|--serve)
      yarn concurrently \
        "cd app-gateway && yarn serve" \
        "cd app-components && yarn serve" \
        "cd app-foo && yarn serve" \
        "cd app-bar && yarn serve"
      ;;
    -b|--build)
      yarn concurrently \
        "cd app-gateway && yarn build" \
        "cd app-components && yarn build" \
        "cd app-foo && yarn build" \
        "cd app-bar && yarn build"
      ;;
    *)
      echo "unknown option: $arg"
      echo "usage: sh run.sh [-i | --install]"
      echo "                 [-s | --serve]"
      echo "                 [-b | --build]"
      exit 1
      ;;
  esac
done
