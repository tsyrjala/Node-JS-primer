//console.log("Hello world2");

class order{
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
    summarize(){    const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
    return summary;

    }
    summarize2 = () => {
        const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        return summary;
    }

}

// (param1, param2, param3) => {koodi} 

// summarize2 = () => {
//     const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
//     return summary;
// }

// let order = {
//     id:1234,
//     message: "My order",
//     delivered: false
// }

// Muuttuja 
const order_id = 1234;
//var order_message = "my order";
var order_message1 = 'my order';

var order_message = `my order: ${order_id}`;
//console.log(order_message);



let order_delivered = false;

function summarize_order(id, message, delivered){
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

const order_summary = summarize_order(order_id, order_message, order_delivered);
console.log(order_summary)

order_delivered = true;
const order_summary_2 = summarize_order(order_id, order_message, order_delivered);
console.log(order_summary_2)

const order_summary_3 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary_3)
// order_id = 4332;

let order_obj = new order(543, 'second order');
const order_summary_4 = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
console.log(order_summary_4)

const order_summary_5 = order_obj.summarize2();
console.log(order_summary_5)



/*
Monen 
rivin
kommentti
*/