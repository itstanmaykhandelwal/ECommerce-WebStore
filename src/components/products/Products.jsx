import React from 'react';
import Grid from '@material-ui/core';

const Products = [
    {
        id:1,
        name:"Shoes",
        description:"Running Shoes",
        price:"Rs1500"
    },
    {
        id:2,
        name:"MacBook",
        description:"Apple Macbook",
        price:"Rs82,000"
    },
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;