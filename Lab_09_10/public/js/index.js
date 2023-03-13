// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });

function getProducts() {
   $.post("./mvc/controllers/API_Product.php", function(data, status){
   //     data.data.forEach(product => {
   //         let row = `
   //         <tr class="item">
   //             <td><img src="/Lab_08/${product.image}" style="max-height: 80px"></td>
   //             <td>${product.name}</td>
   //             <td>${product.price}</td>
   //             <td>${product.description}</td>
   //             <td><a href="#" onclick="updateProduct(this)">Edit</a> | <a href="#" onclick="confirmRemoval(this)" class=\"delete\">Delete</a></td>
   //             <td hidden>${product.id}<td>
   //         </tr>
   //         `
   //         $('table').append(row)
   //     })
   // },"json");
   console.log(data);
}, "json")}