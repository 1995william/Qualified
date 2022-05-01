// challenge 3

const withdraw = amount => {
    let arr = [0, 0, 0];
    
        if (amount >= 100) {
            let troco = amount / 100;
            troco = troco.toString();
            troco = troco.split('.');
            
            
            arr[0] = Number(troco[0]);
            if(troco[1] == 1) {
                arr[0] = arr[0] - 1
            }
            
            amount = amount % 100;
        }
        if (amount == 50 || amount < 60) {
    
            let troco = amount / 50;
            troco = troco.toString();
            troco = troco.split('.');
    
            
            arr[1] = Number(troco[0]);
            if(troco[1] == 2) {
                arr[1] = 1
                arr[2] = 3
            }
            amount = amount % 50;
            
        } 
        if (amount >=20) {
            let troco = amount / 20;
            troco = troco.toString();
            troco = troco.split('.');
            arr[2] = Number(troco);
            let z = troco.join('')
    
            console.log(z);
            if(z === '15') {
                arr[2] = 4
                arr[1] = 1
                arr[0] = arr[0] -1
                
            } else if (z === '35') {
                arr[2] = 1
                arr[1] = 1
                
            }  
            else if(z === '05') {
                arr[2] = 4
                arr[1] = 1
                arr[0] = arr[0] -1
                
            }  else if (z ==='45') {
                arr[1] = 1
                arr[2] = 2
                
            }
        }
      return arr
    };