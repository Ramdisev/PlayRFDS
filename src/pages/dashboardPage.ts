import { expect } from "@playwright/test";

export default class DashboardPage{
    async creationSuccess() {
        await global.page.waitForSelector(this.Elements.personalDetailsTitle);
        await expect(global.page.locator(this.Elements.personalDetailsTitle)).toBeVisible();
    }
    async addE(firstName: any, middleName: any, lastName: any, username: any, passwordE: any) {
        await global.page.waitForSelector(this.Elements.employeeFNInput);
        await global.page.type(this.Elements.employeeFNInput, firstName);
        await global.page.type(this.Elements.employeeMNInput, middleName);
        await global.page.type(this.Elements.employeeLNInput, lastName);
        await global.page.click(this.Elements.detailsEFlag);
        await global.page.type(this.Elements.userNameE, username);
        await global.page.type(this.Elements.passwordE, passwordE)
        await global.page.type(this.Elements.confirmPassE, passwordE)
       await global.page.click(this.Elements.saveEBtn);
    }
    async navigateToAddE() {
        await global.page.click(this.Elements.pimWindowsBtn);
        await global.page.click(this.Elements.addEWindowsBtn);
    }
    private Elements = {
        dashboardTitle: "//header/div[1]/div[1]/span[1]/h6[1]",
        pimWindowsBtn: "//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[2]/a[1]",
        addEWindowsBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]",
        employeeFNInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]",
        employeeMNInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/input[1]",
        employeeLNInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/input[1]",
        detailsEFlag: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[2]/div[1]/label[1]/span[1]",
        userNameE: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/input[1]",
        passwordE: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/input[1]",
        confirmPassE: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[2]/input[1]",
        saveEBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[2]/button[2]",
        personalDetailsTitle: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/h6[1]"
        
    }

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
    }
}