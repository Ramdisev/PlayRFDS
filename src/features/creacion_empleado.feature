Feature: Creación de Empleado

@creacion_empleado
Scenario: Crear un empleado con datos válidos
    Given que estoy en la página de OrangeHRM
    When ingreso mis credenciales username "Admin" y password "admin123"
    And el inicio de sesión es satisfactorio
    And entro a la ventada pim y agregar empleado
    And ingreso los datos del usuario firstName "Ramon" y middleName "Diaz" y lastName "Sevilla" y userNameE "Ramonfds" passwordE "abcde123"
    Then y valido los datos de la creacion exitosa