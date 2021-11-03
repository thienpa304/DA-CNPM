/* ------------------------------------------------ General ------------------------------------------------ */
const getListOrderUrl = "../../data/order.json"
const getMenuUrl = "../../data/menu.json"
const getTypeUrl = "../../data/type.json"

/* ------------------------------------------------ Menu ------------------------------------------------ */
async function insertTypeList(getTypeUrl) {
    const typeRespone = await fetch(getTypeUrl)
    var types = await typeRespone.json()
    let returnType = ``
    for (type of types){
        returnType += ` <div onclick="showMenuList(getMenuUrl,'${type.name}')" class="type_item text-center">
                            <img src="../static/image/${type.image}">
                            <div id="type_name" class="type_item-name">${type.name}</div>
                        </div>`
    }
    document.getElementById('type-list').innerHTML = returnType
}
insertTypeList(getTypeUrl)


async function showMenuList(getMenuUrl,type){
    const menuRespone = await fetch(getMenuUrl);
    var menu = await menuRespone.json();
    let returnHtml = ``
    for (menu_item of menu)
        if ((menu_item.type==type)||(type=="*")){
        returnHtml += `<div id="menu_${menu_item.type}" class="menu__item my-3 mx-1 col-5 col-sm-4 col-md-3 col-lg-2 text-center border ${menu_item.status =='0' ?'order-item--pending':'order-item--preparing'} ">
                            <img class="container menu__item-img p-2" src="../static/image/${menu_item.image}">
                            <div class="menu__item-info" >
                                <div class="menu__item-name">${menu_item.name}</div>
                                <div class="menu__item-price">${menu_item.price} VNĐ</div>
                                <div class="text-center quantity">
                                    <span onclick="minus(${menu_item.id})">
                                        <i class="far fa-minus-square" style="color: red;"></i>
                                    </span>
                                    <span id='quantity${menu_item.status =='0'?'none':menu_item.id}'>
                                        0
                                    </span>
                                    <span onclick="plus(${menu_item.id})">
                                        <i class="far fa-plus-square"></i>
                                    </span>
                                </div>
                                <div ${menu_item.status =='0' ?"class='text-danger'":"class='btn' onclick='add_cart("+menu_item.id+")'"}>${menu_item.status =='0' ?'Đã hết hàng':'Thêm'}</div>
                            </div>
                        </div>`
    }
    document.getElementById('menu-list').innerHTML = returnHtml
}
showMenuList(getMenuUrl,"*")

function minus(id){
    var quantity = document.getElementById("quantity"+id).innerHTML
    if (quantity>0) quantity-=1
    document.getElementById("quantity"+id).innerHTML = quantity
}
function plus(id){
    var quantity = document.getElementById("quantity"+id).innerHTML
    quantity++
    document.getElementById("quantity"+id).innerHTML = quantity
}

async function add_cart(id){
    const menuRespone = await fetch(getMenuUrl);
    var menu = await menuRespone.json();
    var quantity = document.getElementById("quantity"+id).innerHTML
    if (quantity==0) exit;
    var i=0;
    while (i<num_cart && cart_backet[i].id!=id) i++
    if (i<num_cart)
        cart_backet[i].quantity=quantity
    else {
        for (menu_item of menu)
            if (menu_item.id==id){
                cart_backet[num_cart] = new cart_item(menu_item.id, menu_item.name, menu_item.price, quantity, menu_item.image)
                num_cart++
                break
            }
    }
    show_cart()
}
/* ------------------------------------------------ Cart ------------------------------------------------ */
class cart_item{
    constructor(id,name,price,quantity,image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
}

var num_cart = 0;
const cart_backet = [];

function minus_cart_item(id){
    for(i=0; i<num_cart; i++)
        if (cart_backet[i].id==id){
            if (cart_backet[i].quantity>1) cart_backet[i].quantity--;
            break;
        }
    show_cart();
}

function plus_cart_item(id){
    for(i=0; i<num_cart; i++)
        if (cart_backet[i].id==id){
            cart_backet[i].quantity++
            break;
        }
    show_cart();
}

function show_cart(){
    let returnCart = ``
    for(product of cart_backet){
        returnCart+= ` <div class="cart__item">
                            <img src="../static/image/${product.image}" alt="" class="cart__item__img">
                            <h6 class="cart__item__name align-self-center m-0">
                                <b>${product.name}</b>
                            </h6>
                            <div class="cart__item__price">
                                ${product.price}
                            </div>
                            <div class="cart__item__quatity d-block d-md-flex">
                                <div class="count-down" onclick="minus_cart_item(${product.id})">-</div>
                                <div class="number-count" id="cart__item-quantity${product.id}">${product.quantity}</div>
                                <div class="count-up" onclick="plus_cart_item(${product.id})">+</div>
                            </div>
                            <div class="cart__item__remove" onclick="remove(${product.id})"><i class="fas fa-trash-alt"></i></div>
                        </div>` 
    }
    document.getElementById('cart_list').innerHTML = returnCart
    document.getElementById('num_cart').innerHTML = num_cart
    document.getElementById('sum_bill').innerHTML = sum();
}

function sum(){
    var sum=0;
    for(product of cart_backet){
        sum+=product.price*product.quantity;
    }
    return sum;
}

function remove(id){
    for(i=0; i<num_cart; i++)
        if (cart_backet[i].id==id){
            cart_backet.splice(i,1);
            break;
        }
    num_cart--;
    show_cart();
}
/* ------------------------------------------------ Clerk ------------------------------------------------ */
// Display

async function insertOrderList(getListOrderUrl, getMenuUrl) {
    const ordersRespone = await fetch(getListOrderUrl);
    var orders = await ordersRespone.json();
    const menuRespone = await fetch(getMenuUrl);
    var menu = await menuRespone.json();
    let returnHtml = ``
    let numberOrderPending = 0
    let numberOrderPreparing = 0
    for (order of orders) {
        if (order.status == 'pending') {
            numberOrderPending++;
        } else if (order.status == 'preparing') {
            numberOrderPreparing++;
        }
        returnHtml += showOrderData(order, menu)
    }
    returnHtml = `
    <div class='order-info ps-2 mb-4'>
        <div>Chờ xác nhận: <span class='numberOrderPending'> ${numberOrderPending}</span></div>
        <div>Đang chuẩn bị: <span class='numberOrderPreparing'> ${numberOrderPreparing}</span></div>
    </div>
    ` + returnHtml
    document.getElementById('order-list').innerHTML = returnHtml
}

function showOrderData(order, menu) {
    let total = 0
    let returnHtml = `
    <div data-id=${order.id} class="order-item mb-4 ${order.status =='pending' ?'order-item--pending':'order-item--preparing'} row">
    <div class="order-item__info col-12 col-md-12 row ">
        <div class=" col-12 col-md-5">Tên : <span class="order-item__info-name">${order.customerName}</span> </div>
        <div class="order-item__info-phone col-12 col-md-4">SDT: ${order.customerPhone}
            <a class="customer-phone px-1" href="tel: 0123456789"><i class="fas fa-phone-volume"></i></a></div>
        <div class=" col-12 col-md-3">Bàn: <span class="order-item__info-table">${order.table}</span></div>
    </div>
    <hr class="horizontal-line"></hr>
    <div class="order-item__food col-12 col-md-8 ">
        <table class="table table-striped ">
            <thead>
                <tr>
                    <!-- <th scope="col ">Id</th> -->
                    <th scope="col ">Tên</th>
                    <th scope="col ">Giá</th>
                    <th scope="col ">Số lượng</th>
                </tr>
            </thead>
            
    `
    for (item of order.items) {
        for (menuItem of menu) {
            if (item.id == menuItem.id) {
                total += parseInt(menuItem.price) * parseInt(item.quantity)
                returnHtml += `
                <tr>
                    <td>${menuItem.name}</td>
                    <td>${menuItem.price}</td>
                    <td>${item.quantity}</td>
                </tr>
                `
                break
            }
        }
    }

    returnHtml += `
            <tr>
                <td></td>
                <td>Tổng:</td>
                <td> ${total}</td>
            </tr>
            <tbody>
        </table>
    </div>
    <div class="col-12"></div>
    <div class="order-item__control col-12 ">
        <div class="order-item__status my-2">Trạng thái: ${order.status =='pending' ?'Chờ xử lí':'Đang chuẩn bị'}</div>
        <div class="order-item__action ">
            ${order.status == 'pending'
        ?'<button class="btn btn-success p-1 m-1 btn-confirm">Xác nhận</button> <button class="btn btn-danger p-1 m-1 btn-cancel">Hủy</button>'
        :'<button class="btn btn-success p-1 m-1 btn-done">Hoàn thành</button>'
        }
        </div>
    </div>
    </div>
    `

    return returnHtml

}

insertOrderList(getListOrderUrl, getMenuUrl)

/* ------------------------------------------------ Clerk ------------------------------------------------ */
// Display
async function insertOrderList(getListOrderUrl, getMenuUrl) {
    const ordersRespone = await fetch(getListOrderUrl);
    var orders = await ordersRespone.json();
    const menuRespone = await fetch(getMenuUrl);
    var menu = await menuRespone.json();
    let returnHtml = ``
    let numberOrderPending = 0
    let numberOrderPreparing = 0
    for (order of orders) {
        if (order.status == 'pending') {
            numberOrderPending++;
        } else if (order.status == 'preparing') {
            numberOrderPreparing++;
        }
        returnHtml += showOrderData(order, menu)
    }
    returnHtml = `
    <div class='order-info ps-2 mb-4'>
        <div>Chờ xác nhận: <span class='numberOrderPending'> ${numberOrderPending}</span></div>
        <div>Đang chuẩn bị: <span class='numberOrderPreparing'> ${numberOrderPreparing}</span></div>
    </div>
    ` + returnHtml
    document.getElementById('order-list').innerHTML = returnHtml
}

function showOrderData(order, menu) {
    let total = 0
    let returnHtml = `
    <div data-id=${order.id} class="order-item mb-4 ${order.status =='pending' ?'order-item--pending':'order-item--preparing'} row">
    <div class="order-item__info col-12 col-md-12 row ">
        <div class=" col-12 col-md-5">Tên : <span class="order-item__info-name">${order.customerName}</span> </div>
        <div class="order-item__info-phone col-12 col-md-4">SDT: ${order.customerPhone}
            <a class="customer-phone px-1" href="tel: 0123456789"><i class="fas fa-phone-volume"></i></a></div>
        <div class=" col-12 col-md-3">Bàn: <span class="order-item__info-table">${order.table}</span></div>
    </div>
    <hr class="horizontal-line"></hr>
    <div class="order-item__food col-12 col-md-8 ">
        <table class="table table-striped ">
            <thead>
                <tr>
                    <!-- <th scope="col ">Id</th> -->
                    <th scope="col ">Tên</th>
                    <th scope="col ">Giá</th>
                    <th scope="col ">Số lượng</th>
                </tr>
            </thead>
            
    `
    for (item of order.items) {
        for (menuItem of menu) {
            if (item.id == menuItem.id) {
                total += parseInt(menuItem.price) * parseInt(item.quantity)
                returnHtml += `
                <tr>
                    <td>${menuItem.name}</td>
                    <td>${menuItem.price}</td>
                    <td>${item.quantity}</td>
                </tr>
                `
                break
            }
        }
    }

    returnHtml += `
            <tr>
                <td></td>
                <td>Tổng:</td>
                <td> ${total}</td>
            </tr>
            <tbody>
        </table>
    </div>
    <div class="col-12"></div>
    <div class="order-item__control col-12 ">
        <div class="order-item__status my-2">Trạng thái: ${order.status =='pending' ?'Chờ xử lí':'Đang chuẩn bị'}</div>
        <div class="order-item__action ">
            ${order.status == 'pending'
        ?'<button class="btn btn-success p-1 m-1 btn-confirm">Xác nhận</button> <button class="btn btn-danger p-1 m-1 btn-cancel">Hủy</button>'
        :'<button class="btn btn-success p-1 m-1 btn-done">Hoàn thành</button>'
        }
        </div>
    </div>
    </div>
    `

    return returnHtml

}

insertOrderList(getListOrderUrl, getMenuUrl)

// Control