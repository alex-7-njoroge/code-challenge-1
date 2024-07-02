//calculate the gross salary
//Net salary = (GrossSalary-deducations+benefits)

const { table } = require("console")

let GrossSalary = 0:
let Taxrate = 0:
let Nhif=0


function Taxrates (gross) {
    if(gross<=24000)
        taxrate=0.1
}else if(gross<=32333){
      taxrate=0.25
}else if(gross<=500000){
      taxrate=0.30
}else if(gross<=800000){
    taxrate=0.325
}else if(gross>800001){
    taxrate=0.35
}
Taxrate(GrossSalary)

function Nhif (gross){
 if(gross<=5999)
    taxrate=150
}else if(gross<=7999){
    taxrate=300
}else if(gross<=11999){
    taxrate=400
}else if(gross<=14999){
    taxrate=500
}else if(gross<=19999){
    taxrate=600
}else if(gross<=24999){
    taxrate=750
}else if(gross<=29999){
    taxrate=850
}else if(gross<=34999){
    taxrate=900
}else if(gross<=39999){
    taxrate=950
}else if(gross<=44999
    taxrate=1000
)else if(gross<=49999){
    taxrate=1100
}else if(gross<=59999){
    taxrate=1200
}else if(gross<=69999){
    taxrate=1300
}else if(gross<=79999){
    taxrate=1400
}else if(gross<=89999){
    taxrate=1500
}else if(gross<=99999){
    taxrate=1600
}else if(gross>=100000){
    taxrate=1700
}
Nhif(gross)

function Nssf(gross){
    if tier1(gross<=7000){
        taxrate=6000
    }else if tier2(gross<=16000)
}

Nssf(gross)
