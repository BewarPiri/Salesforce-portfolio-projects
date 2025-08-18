import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
@api recordId
@api objectApiName
@api resumeUrl

downloadResume () {
window.open(this.resumeUrl, "_blank")

}
//https://github.com/BewarPiri/bewar-resume/raw/main/Bewar%20Piri%20-%20CV.pdf

}
