Automatización de WebApp OrangeHrm con PlayWright y TypeScript
Introducción
Configure PlayWright, Node.js para automatizar los casos de prueba para los módulos de la aplicación Orange Hrm y escriba scripts de prueba a partir de escenarios de casos de prueba. Ejecute los scripts y genere informes. Web App: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Escenario de prueba del proyecto
|	Dado que estoy en la página de OrangeHRM
	Cuando ingreso mis credenciales username y password
	Y el inicio de sesión es satisfactorio
	Y entro a la ventada pim y agregar empleado
	Y ingreso los datos del usuario firstName y middleName y lastName y userNameE y passwordE
	Entonces valido los datos de la creacion exitosa
Pre requisito
Node.js 22.12.0
Configurar variables de entorno
Clonar este repositorio de GitHub
Abrir en Visual Studio Code
Antes de ejecutar el proyecto desde la consola con lineas de comando, debe cambiar los datos para el nuevo usuario en el feature "creacion_empleado.feature" (userName, firstName,midleName, lastName).
Ejecutar el proyecto desde el comando "npm run test-uat --tag=@creacion_empleado"
Herramientas y Frameworks usados
Playwright
Node.Js
Cucumber