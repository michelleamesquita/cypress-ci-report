FROM cypress/base:10
RUN npm install cypress
RUN $(npm bin)/cypress verify
RUN npm run test
RUN npm run report:merge 
RUN npm run report:generate
