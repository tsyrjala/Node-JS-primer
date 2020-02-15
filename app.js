//console.log("Hello world2");

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


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

    deliver = async () => {
        console.log('start deliver')
        await sleep(2000);
        this.delivered = true;
        console.log('stop deliver')
    }

    summarize3 = async () => {
        console.log('start summarize3')
        await sleep(2000);
        const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        console.log('stop summarize3')
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

console.log('vaihe 1');

order_obj.deliver()
.then(() => {
    return order_obj.summarize3();
})
.then((a) => {console.log(a);})

// const order_summary_4 = summarize_order(order_obj.id, order_obj.message, order_obj.delivered);
// console.log(order_summary_4);
// Tapahtumapohjainen 
const order_summary_wait = order_obj.summarize3().then((summary) => {console.log(summary)});
// console.log(order_summary_wait);

console.log('Vaihe 2')






/*
Monen 
rivin
kommentti
*/