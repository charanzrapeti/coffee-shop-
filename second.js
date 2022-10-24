
const prices = 
[
    {
        drink_name:"espresso",
        base_price:100,
        add_ons:{
            milk:60,
            cream:75,
            latte:100
        }
    },
    {
        drink_name:"cappuccino",
        base_price:100,
        add_ons:{
            milk:80,
            cream:90,
            latte:125
        }
    },
    {
        drink_name:"latte",
        base_price:100,
        add_ons:{
            milk:100,
            cream:125,
            latte:150
        }
    }
    
]

class Order{
    constructor(username,drinks,quantities,add_ons,prices){
        this.username = username,
        this.drinks = drinks,
        this.quantities = quantities, 
        this.add_ons = add_ons,
        this.prices = prices
        this.total_base_price = 0;
    }
    process() {
        this.drinks.forEach((drink,index) => {
            const base_price = this.CalculateBasePrice(drink,this.add_ons[index]);
            this.total_base_price = this.total_base_price + this.quantities[index] * base_price
        })
    }
    CalculateBasePrice(drink,add_on) {
        const drink_result = this.prices.find(eachdrink => eachdrink.drink_name == drink)
        const base_amount =  drink_result.base_price
        const add_on_amount = drink_result.add_ons[add_on]
        const total_amount = base_amount + add_on_amount
        return total_amount
    }
    GenerateBill() {
        return {
            "Username":this.username,
            "Drinks":this.drinks,
            "quantities":this.quantities,
            "add_ons":this.add_ons,
            "total_amount":this.total_base_price

        }
    }
}
first_order = new Order("firstuser",["espresso", "cappuccino"],[1,1],["milk","cream"],prices)
first_order.process();
console.log(first_order.GenerateBill())

// const sampleorder = 
// {
//     user:"firstuser",
//     drink:["latte"],
//     quantity:[1],
//     add_ons:["milk"]
// }