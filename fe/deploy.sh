#！/bin/bash

npm run build
rm -rf docs/*
cp -r build/8 docs/
