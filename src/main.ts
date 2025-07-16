import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes, routeProviders} from './app/app.routes';

routes

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
