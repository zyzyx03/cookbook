# Docker Mastery for Node.js

## Making Image Efficiently
1. Pick proper FROM
2. Line order matters
3. COPY twice: package.json then . .
4. One apt-get per docker file (try to make it RUN all at once on the top of Dockerfile)
