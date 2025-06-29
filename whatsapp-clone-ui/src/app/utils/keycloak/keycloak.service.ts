import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;

  constructor() { }

  get keycloak() {
      if (!this._keycloak) {
        this._keycloak = new Keycloak({
          url: 'http://localhost:9090',
          realm: 'whatsapp-clone',
          clientId: 'whatsapp-clone-app'
        });
      }
      return this._keycloak;
    }
}
