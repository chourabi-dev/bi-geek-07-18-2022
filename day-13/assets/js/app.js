
var gridViewElement = document.getElementById('grid-view');
var listViewElement = document.getElementById('list-view');
var displayMode = 0; // 0 grid 1 list
var productListElement = document.getElementById('product-list-element');


var categories = [
    { id: 0, name:"Smart phone" },
    { id: 1, name:"Smart TV" },
    
]

var productList = [
    { category:0, title:"Iphone 14 pro max", price:8200, photoURL:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/09/iphone-14-pro-officiel-frandroid-2022-1200x1200.png?resize=580,580&key=d603f3e8'  },
    { category:0, title:"Samsung S22", price:5800, photoURL:'https://images.priceoye.pk/samsung-galaxy-s22-pakistan-priceoye-k2kbm.jpg'  },
    { category:0, title:"Oppo RENO6", price:2200, photoURL:'https://htsg-store-gl.heytapimg.com/ebp/202108/11/1-M00-00-3C-CgGRkWETmsuAJ9buAACooRGkyIg493_1080_960.jpg'  },
    { category:1, title:"Smart TV smasung", price:2400, photoURL:'https://www.samsungtunisie.tn/1658-large_default/televiseur-samsung-32-full-hd-smart-tv-32n5300-tunisie.jpg'  },
    
];


listViewElement.addEventListener("click",function(){

    gridViewElement.className="action-btn btn btn-outline-secondary";
    listViewElement.className="action-btn btn btn-secondary";
    displayMode = 1;

    initView();
    
})


gridViewElement.addEventListener("click",function(){

    listViewElement.className="action-btn btn btn-outline-secondary";
    gridViewElement.className="action-btn btn btn-secondary";
    displayMode = 0;

    initView();
})


 


function initView(){

    let blocHTML = '';

    productList.map((p)=>{
        if ( displayMode == 0 ) {
            const productHTMLTMP = `<div class="col-sm-4 mb-3"> 
            <div class="card  ">
                <img src="${ p.photoURL }" class="w-100" alt="">
                <div class="card-body">
                    <h3>${p.title}</h3>
                    <p>
                        <span class="badge rounded-pill text-bg-success">${p.price}$</span>
                    </p>
                </div>
            </div>  
        </div>`;

        blocHTML= blocHTML+productHTMLTMP;
  
        
        
        } else {
            const productHTMLTMP = ` <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="image-container">
                            <img src="${p.photoURL}" class="w-100" alt="">
                        </div>
                        <div class="infos">
                            <h3>${p.title}</h3>
                            <p>
                                <span class="badge rounded-pill text-bg-success">${p.price}$</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> `;

        blocHTML= blocHTML+productHTMLTMP;
        }
    })

    productListElement.innerHTML = blocHTML;
}



initView();