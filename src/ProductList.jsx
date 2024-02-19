import Card from './Product.jsx'

const supplements = [
    {
      brand: 'Optimum Nutrition',
      productName: 'Gold Standard 100% Whey Protein',
      imageUrl: 'https://www.optimumnutritionsea.com/frontend/images/products/whey_bottele.png',
      price: 49.99,
      stock: 5
    },
    {
      brand: 'MuscleTech',
      productName: 'Platinum Creatine',
      imageUrl: 'https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF6cjRST0plQUwuX0FDX1NMMTUwMF8uanBn.jpg',
      price: 9.99,
      stock: 0
    },
    {
      brand: 'BSN',
      productName: 'Amino X',
      imageUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/bsn/bsn00330/y/23.jpg',
      price: 29.99,
      stock: 5
    },
    {
      brand: 'Cellucor',
      productName: 'C4 Original Pre Workout',
      imageUrl: 'https://ffsupplements.com.ph/cdn/shop/products/C4301080p.png?v=1638329509',
      price: 39.99,
      stock: 5
    },
    {
      brand: 'MusclePharm',
      productName: 'Combat Crunch Protein Bar',
      imageUrl: 'https://m.media-amazon.com/images/I/71H47SmZJYL._AC_UF1000,1000_QL80_.jpg',
      price: 24.99,
      stock: 0
    },
    {
      brand: 'Optimum Nutrition',
      productName: 'Amino Energy',
      imageUrl: 'https://www.optimumnutritionsea.com/frontend/images/products/amino_bottele_square.png',
      price: 19.99,
      stock: 5
    },
    {
      brand: 'Dymatize',
      productName: 'ISO100 Whey Protein Isolate',
      imageUrl: 'https://i5.walmartimages.com/seo/Dymatize-ISO100-Whey-Protein-Powder-Isolate-Cocoa-Pebbles-25g-Protein-5-Lb-80-Oz_c6701afc-ab10-488e-a946-5e5afba7d290.de39162805d7d74e0008028f8b580c8b.jpeg',
      price: 69.99,
      stock: 5
    },
    {
      brand: 'BSN',
      productName: 'Syntha-6 Protein Powder',
      imageUrl: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/bsn/bsn00720/y/21.jpg',
      price: 54.99,
      stock: 5
    },
    {
      brand: 'Evogen Nutrition',
      productName: 'Carnigen Plus',
      imageUrl: 'https://images-cdn.ubuy.qa/633ac830ec9006383b02cdb8-evogen-carnigen-plus.jpg',
      price: 34.99,
      stock: 0
    },
    {
      brand: 'MuscleMilk',
      productName: 'Genuine Protein Shake',
      imageUrl: 'https://m.media-amazon.com/images/I/81DynemsC+L.jpg',
      price: 29.99,
      stock: 5
    }
  ];

  const productItems = supplements.map((product, index) => (
    <Card
      key={index}
      brand={product.brand}
      name={product.productName}
      price={'$' + product.price}
      stock={product.stock}
      link={product.imageUrl}
    ></Card>
  ));

  function ProductList() {
    return (
      <div className='row'>
        <div className='d-flex col-10 align-content-center'>
          {productItems}
        </div>
      </div>
    );
  }

export default ProductList;