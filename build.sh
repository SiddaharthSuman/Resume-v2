#
search_dir=./scss
for entry in "$search_dir"/*
do
  tmp=${entry:7}
  name=${tmp%.scss}
  echo "${name}"
  sass --no-source-map ./scss/$name.scss ./styles/$name.css
done