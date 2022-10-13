// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Simple alert handle
Cypress.Commands.add("Alert",(alertMsg)=>{
    cy.on("window:alert",(alert)=>{
        expect(alert).to.eq(alertMsg)
    })
})

//confirm alert
Cypress.Commands.add("ConfirmOkAlert",(ele, alertText)=>{
    let stub= cy.stub();
    cy.on("window:confirm",stub)
    cy.get(ele).click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith(alertText);
    })  .then(()=>{
        return true;
    })
}) 

Cypress.Commands.add("ConfirmCancelAlert",(ele, alertText)=>{
    let stub= cy.stub();
    cy.on("window:confirm",stub)
    cy.get(ele).click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith(alertText);
    })  .then(()=>{
        return false;
    })
}) 

//Frame
Cypress.Commands.add("iFrame",(frameEle, ele)=>{
 let iframeBody=cy.get(frameEle).its("0.contentDocument.body").should("be.visible").then(cy.wrap)
 return iframeBody.find(ele);
})

//Data_Table 
Cypress.Commands.add("SelectAgeFromTable",(firstName,age)=>{
    cy.get("table[id='t01'] tr td:nth-child(1)").each(($ele,index,list)=>{
        let name= $ele.text();
        if(name===(firstName))
        {
            cy.get("table[id='t01'] tr td:nth-child(1)").eq(index).next().next().then(getAge=>{
                expect(getAge.text()).includes(age);
            })
        }
    })
})

//
Cypress.Commands.add("SelectLastNameFromTable",(firstName,lastName)=>{
    cy.get("table[id='t01'] tr td:nth-child(1)").each(($ele,index,list)=>{
        let name= $ele.text();
        if(name===(firstName))
        {
            cy.get("table[id='t01'] tr td:nth-child(1)").eq(index).next().then(getName=>{
                expect(getName.text()).equal(lastName)
            })
        }
       
    })
})

// //Select Year

// import DatePicker from "../support/POM/Demo_AutomationTesting/demo_DatePicker_page"

// let dataPicker= new DatePicker();
// let currentYear = new Date().getFullYear();

// Cypress.Commands.add("SelectYear",(yearName)=>{
// dataPicker.datePickerYear().then($year=>{
//     if($year.text()===(yearName))
//     {
//         cy.log(`${yearName} is the current year`)
//         return;
//     }
//     else
//     {
//         if(yearName < currentYear)
//         {  
//             dataPicker.prevButton().click();
//         }
//         else if (yearName > currentYear)
//         {
//             dataPicker.nextButton().click();   
//         }
//     }

//     cy.SelectYear(yearName);
// })
// })

// //select Month

// import DateUtility from "../support/DateUtility/dateUtility";
// let dateUtility = new DateUtility();

// Cypress.Commands.add("SelectMonth",(monthName)=>{
//     let currentMonth= new Date().getMonth()+1;
//     let givenMonth= dateUtility.selectMonthIndex(monthName);

//     dataPicker.datePickerMonth().then(($month)=>{
//         if($month.text().equal(monthName))
//         {
//             cy.log(`${monthName} is selected`)
//             return;
//         }
//         else{
//             if(givenMonth>currentMonth)
//             {
//                 dataPicker.nextButton().click();
//             }
//             else if(givenMonth<currentMonth)
//             {
//                 dataPicker.prevButton().click();
//             }
//         }

//         cy.SelectMonth(monthName);
//     })
// })

// //select date

// Cypress.Commands.add("SelectDate",(date)=>{
//     dataPicker.datePickerDays().contains(date).click();
// })

// Select date, month and year from webdriverUni

import DatePicker from "../support/POM/datePicker_page";
let datepick= new DatePicker();
let currentYear= new Date().getFullYear();

Cypress.Commands.add("SelectYear",(yearName)=>{
datepick.datePickerSwitch().then(($year)=>{
    if($year.text()===yearName)
    {
        cy.log(`${yearName} is selected`)
        return
    }
    else
    {
      if(currentYear>yearName)
      {
        datepick.prevButton().click({force: true});
      }  
      else if (currentYear<yearName)
      {
        datepick.nextButton().click({force: true});
      }
    }  
    cy.SelectYear(yearName);
})

})



Cypress.Commands.add("SelectMonth",(monthName)=>{
    datepick.selectMonth().contains(monthName).click();
})

Cypress.Commands.add("SelectDate",(dateName)=>{
    datepick.selectDay().contains(dateName).click();
})