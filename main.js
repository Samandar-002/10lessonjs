
let home_pc = {
  case_color : ["red", "green", "black", "blue"],
  RAM : ["8gb", "16gb","32gb","64gb"],
  storage : ["512GB", "1TB", "2TB"],
  graphicCard : ["RTX3070", "RTX3080TI","RTX3090TI","RTX4090"],
  brain : ["coreI5", "coreI7 12h","AMD7","coreI9"],
};

let is_shop_open = true;


let order = (time, work) => {

  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(() => {
        resolve(work());  
      }, time);
    } else {
      reject(new Error("Shop closed"));
    }
  });

};

order(2000, () => console.log(`${home_pc.case_color[0]} was selected`))

  .then(() => {
    return order(0, () => console.log('Yigish boshlandi'))
  })

  .then(() => {
    return order(2000, () => console.log("Yiguv jarayoni"))
  })

  .then(() => {
    return order(1000, () => 
      console.log(`${home_pc.RAM[3]} added`)
    )
  })

  .then(() => {
    return order(1000, () => console.log("Joylashtiruv"))
  })

  .then(() => {
    return order(2000, () =>  
      console.log(`Kerakli ${home_pc.storage[1]} asboblar`)
    )
  })

  .then(() => {
    return order(3000, () => 
     console.log(`Drivelarga moslangan ${home_pc.graphicCard[3]} qo'yilmoqda`)
    )
  })
  .then(() => {
    return order(3000, () => 
     console.log(`Usluniy mator ${home_pc.brain[3]} qo'yilmoqda`)
    )
  })

  .then(() => {
    return order(2000, () => console.log("Spartivni avtomabil tayyor"))
  })

  .catch((error) => {
    console.log("Error:", error.message);
  });




const ticketDates = ['2023-09-15', '2023-10-27', '2023-11-12'];

function showDate() {
 let date = document.getElementById('drivedate').value;
 let strDate = String(date);

 for (let i = 0; i < ticketDates.length; i++) {
  if (ticketDates[i] === strDate) {
    console.log(true);
    break;
  } else {
    console.log(false);
  }
  
 }

}



