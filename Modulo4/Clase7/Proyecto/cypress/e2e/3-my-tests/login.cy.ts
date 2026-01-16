/*
 * Bloque de pruebas E2E (end-to-end) para el módulo de Login en Angular.
 * Usamos Cypress para automatizar la interacción con el navegador,
 * simulando cómo un usuario real usaría la aplicación.
 */
describe('Login Angular', () => {

    // Caso de prueba # 1
    // Verifica que el formulario login se muestre correctamente
    it('Debe mostrar el formulario de login', () => {
        cy.visit('http://localhost:4200/login'); // Visita la ruta del login
        cy.get('h2').should('contain', 'Inicio de Sesión'); // Verifica que el titulo sea correcto
        cy.get('input[formControlName="email"]').should('be.visible'); // Verifica el campo email
        cy.get('input[formControlName="password"]').should('be.visible'); // Verifica el campo password
        cy.get('button[type="submit"]').should('be.disabled'); // El boton debe estar habilitado
    });

    // Caso de prueba # 2
    // Simula un login exitoso con credenciales válidas 
    it('Debe permitir el inicio de sesión con credenciales validas', () => {
        cy.visit('http://localhost:4200/login'); // Visita la ruta del login
        cy.wait(2000); // Breve espera para la carga del DOM(opcional)

        // Diligencia los campos del formulario con credenciales válidas
        cy.get('input[formControlName="email"]').type('admin@test.com');
        cy.get('input[formControlName="password"]').type('123456');
        cy.wait(2000);

        // El botón de enviar debe habilitarse
        cy.get('button[type="submit"]').should('not.be.disabled').click();
        cy.wait(3000);

            // Validar que se redirige al dashboard
        cy.url().should('include', '/dashboard');
        cy.contains('Bienvenido al Dashboard').should('be.visible'); // Mensaje de confirmación
    });

    // Caso de prueba # 3
    // Simula un login con credenciales en formato invalido
    // Email sin @ y password menor a 6 caracteres
    it('Mostrar mensajes cuando se ingresan formatos invalidos en credenciales', () => {
        cy.visit('http://localhost:4200/login'); // Visita la ruta del login
        cy.wait(2000); // Breve espera para la carga del DOM(opcional)

        // Diligencia los campos del formulario con credenciales válidas
        cy.get('input[formControlName="email"]').type('admin-test.com');
        cy.wait(2000);
        cy.get('input[formControlName="password"]').type('654').blur();
        cy.wait(2000);
        
        // El botón de enviar debe permanecer deshabilitado
        cy.get('button[type="submit"]').should('be.disabled');
        cy.wait(2000);
        
        // Verificar mensaje de error mostrado por email y password inválido
        cy.contains('El email es obligatorio y debe ser válido').should('be.visible');
        cy.contains('La contraseña es obligatoria y debe tener minimo seis caracteres').should('be.visible');
    });

    // Caso de prueba # 4
    // Simula un login fallido con credenciales inválidas
    // El email y el password no se encuentran registrados
    it('Debe mostrar error con credenciales inválidas', () => {
        cy.visit('http://localhost:4200/login'); // Visita la ruta del login
        cy.wait(2000); // Breve espera para la carga del DOM(opcional)

        // Diligencia los campos del formulario con credenciales válidas
        cy.get('input[formControlName="email"]').type('usuario-falso@test.com');
        cy.wait(2000);
        cy.get('input[formControlName="password"]').type('654321');
        cy.wait(2000);
        
        // El botón de enviar debe permanecer deshabilitado
        cy.get('button[type="submit"]').should('not.be.disabled').click();
        cy.wait(2000);
        
        // Verificar mensaje de error mostrado por email y password inválido
        cy.contains('Credenciales invalidas').should('be.visible');
    });  


})