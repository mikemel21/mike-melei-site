#!/bin/bash

# build project
npm run build

# add dist folder to commit
git add dist -f

# commit dist folder
git commit -m "new build: add to dist"

# push dist folder to gh-pages branch
git subtree push --prefix dist origin gh-pages