const express = require('express');
const { ObjectId } = require('mongodb');
const app = express()
const port = 8080;

const url = require('url');


app.get('/', (req, res) => {
  res.send('Hello World!')
})
 

app.post('/somme', (req, res) => {

    let body = [];

    req.on('data',(data)=>{
        body.push(data);
    }).on('end',()=>{

        let info = JSON.parse(Buffer.concat(body).toString());

        const x = info.x;
        const y = info.y;
        
        res.send('La somme de '+x+' et '+y+' = '+ (x+y))
    })




    
})
   

app.get('/products',(req,res)=>{


    const query = url.parse(req.url,true).query;

    console.log(query);

    let price = null;

    if ( query.price != null ) {
        price = query.price;
    }

    // DATABASE !!!
    const products = [
        { id:1, name:"Samsung s21", price:500 },
        { id:2, name:"HP pavillion", price:800 },
        { id:3, name:"iphone", price: 900 }, 
    ];


    if ( price != null ) {
        // search !!!!

       let filteredProduct =  products.filter( ( p)=> p.price <= Number(price) )

       res.send(filteredProduct);
    }else{
        res.send(products);
    }

    

})




/**************************** API ************************************* */



app.get("/products/list",(req,res)=>{


    // 1 connect to mongodb

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{

    // 2 select the DATABASE to work on !!!!

    const db = dbServer.db('productsbigeek');

    db.collection('products').find(  {}  ).toArray().then( ( products )=>{
        res.send(products);
    } )



    } ).catch( (error)=>{
        res.send({ success:false, message:"error db" })
    })


})


app.post('/products/add',(req,res)=>{
    let body = [];

    req.on('data',(data)=>{
        body.push(data);
    }).on('end',()=>{

        let product = JSON.parse(Buffer.concat(body).toString());


        // 1 connect to db
        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{
    
        // 2 select the DATABASE to work on !!!!
    
        const db = dbServer.db('productsbigeek');
    
        db.collection('products').insertOne(product).then(()=>{
            res.send({ success:true })
        }).catch( (error)=>{
            res.send({ success:false, message:"error inserting product" })
        })
     
    
        } ).catch( (error)=>{
            res.send({ success:false, message:"error db" })
        })
         
    })

})



app.delete("/products/delete",(req,res)=>{

    // 1 connect to mongodb

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{

    // 2 select the DATABASE to work on !!!!

    const db = dbServer.db('productsbigeek');


    const query = url.parse(req.url,true).query;

    const id = query.id;

    db.collection('products').deleteOne( { _id: ObjectId(id) } ).then(()=>{
        res.send({ success:true })
    }).catch( (error)=>{
        res.send({ success:false, message:"error deleting product" })
    })
 

    } ).catch( (error)=>{
        res.send({ success:false, message:"error db" })
    })


})



app.put('/products/update',(req,res)=>{
    let body = [];

    req.on('data',(data)=>{
        body.push(data);
    }).on('end',()=>{

        let product = JSON.parse(Buffer.concat(body).toString());

        const query = url.parse(req.url,true).query;

        const id = query.id;



        // 1 connect to db
        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{
    
        // 2 select the DATABASE to work on !!!!
    
        const db = dbServer.db('productsbigeek');
    
        db.collection('products').updateOne( { _id : ObjectId(id) } , { $set : product } ) .then(()=>{
            res.send({ success:true })
        }).catch( (error)=>{
            res.send({ success:false, message:"error updating product" })
        })
     
    
        } ).catch( (error)=>{
            res.send({ success:false, message:"error db" })
        })
         
    })

})



// search !!!!
app.get('/product/search',(req,res)=>{

    

    // 1 connect to mongodb

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{

    // 2 select the DATABASE to work on !!!!

    const db = dbServer.db('productsbigeek');


    let filter = {};


    let params = url.parse( req.url ,true ).query;



    if ( params.quantity != null ) {
        filter.quantity =   { $lt: Number(params.quantity) }   ;
    }


    if ( params.price != null ) {
        filter.price =   { $lt: Number(params.price) }   ;
    }



    if ( params.title != null ) {
        filter.title =   params.title ;
    }
 
    db.collection('products').find(   filter   ).toArray().then( ( products )=>{
        res.send(products);
    } )



    } ).catch( (error)=>{
        res.send({ success:false, message:"error db" })
    })

})


 
// updateMany

app.put('/products/update-many',(req,res)=>{
    let body = [];

    req.on('data',(data)=>{
        body.push(data);
    }).on('end',()=>{

        let product = JSON.parse(Buffer.concat(body).toString());

   

        // 1 connect to db
        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{
    
        // 2 select the DATABASE to work on !!!!
    
        const db = dbServer.db('productsbigeek');
    
        db.collection('products').updateMany( {  quantity : 10  } , { $set :   {   quantity: 20 , updateDate: new Date()  }   } ) .then(()=>{
            res.send({ success:true })
        }).catch( (error)=>{
            res.send({ success:false, message:"error updating product" })
        })
     
    
        } ).catch( (error)=>{
            res.send({ success:false, message:"error db" })
        })
         
    })

})







// insertMany

app.post('/products/add-many',(req,res)=>{
    let body = [];

    req.on('data',(data)=>{
        body.push(data);
    }).on('end',()=>{

        let products = JSON.parse(Buffer.concat(body).toString());


        // 1 connect to db
        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{
    
        // 2 select the DATABASE to work on !!!!
    
        const db = dbServer.db('productsbigeek');
    
        db.collection('products').insertMany(products).then(()=>{
            res.send({ success:true })
        }).catch( (error)=>{
            res.send({ success:false, message:"error inserting product" })
        })
     
    
        } ).catch( (error)=>{
            res.send({ success:false, message:"error db" })
        })
         
    })

})
 

// deleteMany
app.delete("/products/delete-many",(req,res)=>{

    // 1 connect to mongodb

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017").then( (dbServer)=>{

    // 2 select the DATABASE to work on !!!!

    const db = dbServer.db('productsbigeek');


    const query = url.parse(req.url,true).query;

    const id = query.id;

    db.collection('products').deleteMany( {  quantity : 0  } ).then(()=>{
        res.send({ success:true })
    }).catch( (error)=>{
        res.send({ success:false, message:"error deleting product" })
    })
 

    } ).catch( (error)=>{
        res.send({ success:false, message:"error db" })
    })


})





app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})