import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes } from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

console.log('applications', applications)

applications.forEach(registerApplication);
start();
