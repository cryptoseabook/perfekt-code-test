#！/bin/bash

npm run build
rm -rf ../docs/*
cp -r build/* ../docs/

git add .
git commit -m "deploy latest frontend code"
