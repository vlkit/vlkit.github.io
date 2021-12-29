rm -rf .git*
git init && git add -A && git commit -m "init"
git remote add origin git@github.com:vlkit/vlkit.github.io
git push -u origin master -f
