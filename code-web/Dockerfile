FROM telusgelp/angular:1.4-alpine

# Set nmp as the package manager
RUN ng set --global packageManager=npm

# copy nmp files - do this here so nmp install isn't run everytime src changes
COPY package.json .

# install dependencies
RUN npm install --quiet && npm cache clean --force

COPY . .

VOLUME /src/dist