class Product{
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
}

class UI{/*Clase interfaz par el crud */
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted Successfully !!!! ','danger');
        }

    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

}

//Eventos del DOM
document.getElementById('product-form')
    .addEventListener('submit', function (e){
    const name = document.getElementById('name').value;
         price = document.getElementById('price').value;
         year = document.getElementById('year').value;
    
   // alert("Producto : "+name +" \n"+"Precio :"+ price+" \n"+"Año :"+ year);
    
   // console.log(new Product(name, price, year));

    const product = new Product(name, price, year); 
    //alert(product.name);

     const ui = new UI();

        if(name===''| price ==='' | year===''){
            return ui.showMessage('Complete fields please','danger');
        }

     ui.addProduct(product);
     ui.showMessage('Product Added Successfully!!!!','success');
     ui.resetForm();

    e.preventDefault();//cambia el comportamiento del form
        //ya no se borrar los datos de los imput al refrescar la
        //pagina
});



//Evento click
document.getElementById('product-list')
    .addEventListener('click', function(e){
 
    const ui = new UI();
     ui.deleteProduct(e.target);
});


