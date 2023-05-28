#!/usr/bin/env bash
# exit on error
set -o errexit


bundle install
npm install
# clean
rm -rf public
# build
yarn build
bundle exec rails assets:precompile
# bundle exec rails assets:clean
bundle exec rails db:migrate

# postbuild
cp -a app/assets/builds/. app/assets

