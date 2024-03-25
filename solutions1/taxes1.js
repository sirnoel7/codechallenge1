function paye(monthlyincome,commissions,allowances){
    const grossincome = monthlyincome + commissions + allowances;
    let paye;
     if(grossincome <= 24000){
     return paye = 24000*0.1       
    }
 else if(grossincome >= 24001 && grossincome <= 32333)
     return paye = 24000*0.1 + (32333-24000)
 else if (grossincome >= 32334 && grossincome <= 500000){
     return paye = 24000*0.1 + 0.25*(32333-24000) + 0.3*(grossincome-500000)
 }
 else if (grossincome >=500001 && grossincome <= 800000){
    return paye = 24000*0.1 + 0.25*(32333-24000) + 0.3*(500000-32333) + 0.325*(grossincome - 500000)
 }
 else { return paye = 24000*0.1 + 0.25*(32333-24000) + 0.3*(500000-32333) + 0.325*(grossincome - 500000) + 0.35*(grossincome-800000)
 
 }
 
 }
 //this function calculates the monthly paye tax
 const payetax = "Your paye tax this month is " + paye()
 console.log(payetax);
 
 function payeyr(income,commissions,allowances){
     const yrincome = income + commissions + allowances;
     let payeyr;
      if(yrincome <= 288000){
      return payeyr = 288000*0.1       
     }
  else if(yrincome >= 288001 && yrincome <= 388000)
      return payeyr = 288000*0.1 + 0.25*(yrincome-288000)
  else if (yrincome >= 388001 && yrincome <= 6000000){
      return payeyr = 288000*0.1 + 0.25*(388000- 288000) + 0.3*(yrincome-500000)
  }
  else if (yrincome >=6000001 && yrincome <= 9600000){
     return payeyr = 288000*0.1 + 0.25*(388000- 288000)+ 0.3*(6000000-388000) + 0.325*(yrincome - 500000)
  }
  else { return payeyr = 288000*0.1 + 0.25*(388000- 288000)+ 0.3*(6000000-388000) + 0.325*(9600000 - 6000000) + 0.35*(yrincome-9600000)
   }
  }
  //this function calculates the yearly paye tax
  
  const payeyrtax = "Your paye tax this year is " + payeyr()
  console.log(payeyrtax)
  