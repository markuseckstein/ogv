#!/bin/bash

BASEDIR=$(dirname "$0")
cd $BASEDIR/assets/img_raw
pwd
gm mogrify -output-directory ../img -resize 1400x1000 -auto-orient *.jpg