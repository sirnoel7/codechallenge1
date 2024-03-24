 function speedcheck(speed){
   
    if(speed<70){
      return 'Okay';
}
// this causes the app to print 'okay" if the speed is less than 70km/hr
 else { 
        const speedoverlimit= speed - 70;
        const pointsofdemerit = Math.round (0.2*speedoverlimit)
// this creates an object known as speedoverlimit which is needed in the calculation of demeritpoints. 
//rounding off is required to get a simple and clear final answer seen in Math.round
    if(pointsofdemerit<=12){
        return `Be careful, your demerit points are ${pointsofdemerit}`;
    }
//this warns the driver to slow down and shows how many points they have
    else {
        return `Your license is hereby suspended`;
    }
  }
// this last else is for when the speed exceeds or is equal to 130km/hr or
// if the points are equal to more than 12. The driver's license is revoked at this point.
 }

 const response = speedcheck()
 console.log(response);
 // this makes the function to be executed effectively and for received figures to be displayed under the
 // const response