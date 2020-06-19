#!/bin/sh

set -e

for arg in "$@"
do
  case $arg in
    -i|--install)
      yarn concurrently \
        "cd app-shell && yarn install" \
        "cd app-components && yarn install" \
        "cd mod-foo && yarn install" \
        "cd mod-bar && yarn install"
      ;;
    -s|--serve)
      yarn concurrently \
        "cd app-shell && yarn serve" \
        "cd app-components && yarn serve" \
        "cd mod-foo && yarn serve" \
        "cd mod-bar && yarn serve"
      ;;
    -b|--build)
      yarn concurrently \
        "cd app-shell && yarn build" \
        "cd app-components && yarn build" \
        "cd mod-foo && yarn build" \
        "cd mod-bar && yarn build"
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
