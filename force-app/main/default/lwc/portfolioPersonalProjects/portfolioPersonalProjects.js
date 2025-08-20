import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets"
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/bmi-calculator",
        },
                {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/alarm-clock",
        },
                {
            "name":"Currency Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/currency-converter",
        },
                {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/weather-app",
        },
                {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiQy00000047pJ&surveyName=employee_survey&UUID=b06d3233-e5f1-48e2-8653-3000536398d3",
        },
                {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://bewar-portfolio-dev-ed.trailblaze.my.site.com/note-taking-app",
        },
        
    ]
}