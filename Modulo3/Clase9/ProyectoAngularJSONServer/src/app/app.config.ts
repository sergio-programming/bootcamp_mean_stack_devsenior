// Importaciones principales de Angular para configuración de la aplicación
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Otras utilidades de Angular para proveer dependencias
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

//Link: https://stackoverflow.com/questions/78430636/httpclientmodule-is-deprecated-in-angular-18-whats-the-replacement
// Importamos las rutas de la aplicación definidas en app.routes.ts
import { routes } from './app.routes';

/**
 * appConfig es un objeto de tipo ApplicationConfig
 * que define los proveedores (providers) globales para toda la aplicación.
 * 
 * En aplicaciones Angular standalone (Angular 15+), 
 * se usa este objeto en lugar de AppModule para configurar la app.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * provideBrowserGlobalErrorListeners:
     * Registra listeners para manejar errores globales en el navegador.
     * Esto ayuda a capturar excepciones y errores de forma centralizada.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * provideZoneChangeDetection:
     * Configura la detección de cambios en Angular.
     * eventCoalescing: true -> Agrupa varios eventos en uno solo
     * para optimizar la detección de cambios y mejorar el rendimiento.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * provideRouter:
     * Configura el enrutamiento de la aplicación.
     * Recibe las rutas que se importan desde app.routes.ts.
     */
    provideRouter(routes),

    /**
     * provideHttpClient(withFetch()):
     * Habilita el uso de HttpClient en la aplicación para hacer peticiones HTTP.
     * withFetch() indica que se usará la API Fetch moderna en lugar de XMLHttpRequest.
     */
    provideHttpClient(withFetch())
  ]
};
