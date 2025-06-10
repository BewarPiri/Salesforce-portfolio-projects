import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets"
import {getRecord, getFieldValue} from "lightning/uiRecordApi";
import FULLNAME from "@salesforce/schema/Portfolio__c.FullName__c"
import COMPANY_LOCATION from "@salesforce/schema/Portfolio__c.CompanyLocation__c"
import COMPANY_NAME from "@salesforce/schema/Portfolio__c.CompanyName__c"
import DESIGNATION from "@salesforce/schema/Portfolio__c.Designation__c"


export default class PortfolioBanner extends LightningElement {
    @api recordId //="a04Qy0000048HvsIAE"
    @api linkedinUrl //= "https://www.linkedin.com/in/bewar-piri-7a522ab3/"
    @api githubUrl //= "https://github.com/BewarPiri"
    @api trailheadUrl //= "https://www.salesforce.com/trailblazer/xhj5rnysd4jsylf09z"

    
 
    userPic  =`${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin  =`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github =`${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead  =`${PortfolioAssets}/PortfolioAssets/Social/trailhead.svg`
 
    @wire(getRecord, { recordId:"$recordId", fields:[FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION] })
    portfolioData

/*portfolioHandler({data, error}) {
    if (data) {
        console.log("Record Data", JSON.stringify(data));
        this.fullName = data.fields.FullName__c.value;
        this.companyLocation = data.fields.CompanyLocation__c.value;
        this.companyName = data.fields.CompanyName__c.value;
        this.designation = data.fields.Designation__c.value;
    }if (error) {
        console.error("Error fetching portfolio record:", error);
    }*/

        get fullName() {
            return getFieldValue(this.portfolioData.data, FULLNAME);
        }
        get companyLocation() {
            return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
        }
        get companyName() {
            return getFieldValue(this.portfolioData.data, COMPANY_NAME);
        }
        get designation() {
            return getFieldValue(this.portfolioData.data, DESIGNATION);
        }

}