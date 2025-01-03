import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('que estoy en la página de OrangeHRM', async ()=> {
    await loginPage.navigateToOrangePage();
})

When('ingreso mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})

When('el inicio de sesión es satisfactorio', async ()=> {
    await dashboardPage.loginSuccess();
})
When('entro a la ventada pim y agregar empleado', async()=>{
    await dashboardPage.navigateToAddE();
})

When('ingreso los datos del usuario firstName {string} y middleName {string} y lastName {string} y userNameE {string} passwordE {string}', async (firstName, middleName, lastName, userNameE, passwordE) => {
    await dashboardPage.addE(firstName, middleName, lastName, userNameE, passwordE);
})

Then('y valido los datos de la creacion exitosa', async () => {
  await dashboardPage.creationSuccess();
})
