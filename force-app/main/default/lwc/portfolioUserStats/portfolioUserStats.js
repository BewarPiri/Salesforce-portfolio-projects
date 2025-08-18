import { LightningElement, api } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/portfolioAssets";
export default class PortfolioUserStats extends LightningElement {

trailheadRankImg = `${PortfolioAssets}/PortfolioAssets/Ranks/Adventurer.png`;
@api badges
@api points 
@api trails 
@api rank  

renderedCallback() {
    if(this.rank) {
        let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
        this.trailheadRankImg = url
    }
}

}