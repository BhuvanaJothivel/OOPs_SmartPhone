class SmartPhone {
    constructor(ram, batteryPower, price) {
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }
    displayFeatures() {
        return this.ram +'\n'+this.batteryPower+'\n'+this.price;
    };
    remainingAmount(priceIHave) {
        this.price = this.price - priceIHave;
    };
}
// Viking
class AndroidPhone extends SmartPhone {
    constructor(modelName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.modelName = modelName;
    }

    displayFeatures(){
        return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave) {
        this.price = priceIHave - this.price;
        

        if(this.price <=0){
            return 'Customer has no more amount';
        }

        else if(this.price > 0){
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }
    };
}
// Saxon
class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.seriesName = seriesName;
    }

    displayFeatures(){
        return this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
    }
    remainingAmount(priceIHave) {
        this.price = priceIHave - this.price;
        if(this.price > 0){
            console.log(this.price);
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }

        else if(this.price == 0){
            return 'Customer has no more amount';
        }

        else{
            return "Customer can't able to buy a phone due to insufficient amount";
        }
    }
}