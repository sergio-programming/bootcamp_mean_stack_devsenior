describe('Flujo: Login → Dashboard → Registro', () => {
  it('Debe loguear, ir al dashboard, navegar a registro y registrar usuario', () => {
    
    // --- LOGIN ---
    cy.visit('http://localhost:4200/login'); // Abre la app en la página de login
    cy.contains('h2', 'Inicio de Sesión').should('be.visible'); // Verifica el título
    cy.wait(2000);

    // Renderizado inicial del formulario
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('button[type="submit"]').should('be.disabled'); // Botón bloqueado si form inválido
    cy.wait(2000);

    // Credenciales de ejemplo (ajusta a tu backend o mock)
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').should('not.be.disabled').click();
    cy.wait(2000);

    // --- DASHBOARD ---
    cy.location('pathname').should('eq', '/dashboard'); // Verifica redirección
    cy.contains('h2', 'Bienvenido al Dashboard').should('be.visible'); // Confirma dashboard
    cy.wait(2000);

    // Validación de tabla con encabezados correctos
    cy.get('table').should('exist');
    cy.wait(2000);
    cy.get('table thead th').eq(0).should('contain', '#');
    cy.wait(2000);
    cy.get('table thead th').eq(1).should('contain', 'Nombre');
    cy.wait(2000);
    cy.get('table thead th').eq(2).should('contain', 'Correo');
    cy.wait(2000);
    cy.get('table thead th').eq(3).should('contain', 'Rol');
    cy.wait(2000);

    // Botón para crear usuario (routerLink="/registro")
    cy.contains('button', '+ Crear usuario').should('be.visible').click();
    cy.wait(2000);

    // --- REGISTRO ---
    cy.location('pathname').should('eq', '/registro'); // Validar redirección
    cy.contains('h2', 'Registro de Usuario').should('be.visible'); // Confirmar título
    cy.wait(2000);

    // Completar formulario de registro
    cy.get('input[formcontrolname="nombre"]').type('Sergio Pedraza');
    cy.wait(2000);
    cy.get('input[formcontrolname="email"]').type('sergio.pedraza@example.com');
    cy.wait(2000);
    cy.get('input[formcontrolname="telefono"]').type('3001234567');
    cy.wait(2000);
    cy.get('input[formcontrolname="fechaNacimiento"]').type('1988-10-03');
    cy.wait(2000);
    cy.get('input[formcontrolname="direccion"]').type('Carrera 114 # 80-51');
    cy.wait(2000);
    cy.get('select[formcontrolname="pais"]').select('colombia'); // selecciona por value
    cy.wait(2000);
    cy.get('input[formcontrolname="password"]').type('secreto123');
    cy.wait(2000);
    cy.get('input[formcontrolname="confirmPassword"]').type('secreto123');
    cy.wait(2000);
    cy.get('input[formcontrolname="terminos"]').check(); // acepta términos
    cy.wait(2000);

    // Enviar formulario
    cy.get('button[type="submit"]').should('not.be.disabled').click();
    cy.wait(2000);

    // Verificar alert de éxito
    cy.get('div','El usuario se ha registrado correctamente').should('be.visible');
})
})