import { Product } from '../models/product.model.js';

export const getProducts = async(req, res) => {
    try {
        
        const products = await Product.find();

        if (products.length === 0) {
            return res.status(404).json({ mensaje : 'No hay productos registrados actualmente' });
        }

        return res.status(200).json(products);

    } catch (error) {
        console.error('Error al obtener los productos: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });      
    }
};

export const getProductById = async(req, res) => {
    try {
        
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ mensaje : `No se encuentra un producto registrado con el ${id}` });
        }

        return res.status(200).json(product);

    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const createProduct = async(req, res) => {
    try {
        
        const { nombre, descripcion, precio, stock, categoria } = req.body;

        if (!nombre || !descripcion || !precio || !stock || !categoria) {
            return res.status(400).json({ mensaje : 'Todos los campos solicitados son obligatorios' });
        }

        if (precio < 0 || stock < 0) {
            return res.status(400).json({ mensaje : 'El precio y el stock no pueden ser menores a cero' });
        }

        const newProduct = new Product({
            nombre,
            descripcion,
            precio,
            stock,
            categoria
        });

        const productDB = await newProduct.save();
        return res.status(201).json({ mensaje : 'El producto se creo correctamente', productDB });
 
    } catch (error) {
        console.error('Error al crear el producto: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });        
    }
};

export const updateProduct = async(req, res) => {
    try {
        
        const { id } = req.params;
        const { nombre, descripcion, precio, stock, categoria } = req.body;

        if (!nombre || !descripcion || !precio || !stock || !categoria) {
            return res.status(400).json({ mensaje : 'Todos los campos solicitados son obligatorios' });
        };

        if (precio < 0 || stock < 0) {
            return res.status(400).json({ mensaje : 'El precio y el stock no pueden ser menores a cero' })
        }

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ mensaje : `No se encuentra un producto registrado con el id ${id}` });
        }

        product.nombre = nombre;
        product.descripcion = descripcion;
        product.precio = precio;
        product.stock = stock;
        product.categoria = categoria

        await product.save();

        return res.status(200).json({ mensaje : 'El producto se ha actualizado correctamente', product });

    } catch (error) {
        console.error('Error al actualizar el producto: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const patchProduct = async(req, res) => {
    try {
        
        const { id } = req.params;
        const data = req.body;

        if (Object.keys(data).length === 0) {
            return res.status(400).json({ mensaje : 'Se debe diligenciar al menos un campo para actualizar' });
        };

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ mensaje : `No se encuentra un producto registrado con el id ${id}` });
        }
        
        Object.keys(data).forEach((key) => {
            product[key] = data[key];
        });

        await product.save();
        return res.status(200).json({ mensaje : 'Se ha actualizado algunos campos del producto correctamente', product });

    } catch (error) {
        console.error('Error al actualizar el producto: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
};

export const deleteProduct = async(req, res) => {
    try {
        
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ mensaje : `No se encuentra un producto registrado con el id ${id}` });
        }

        return res.status(200).json({ mensaje : 'Producto eliminado exitosamente', product })

    } catch (error) {
        console.error('Error al eliminar el producto: ', error);
        return res.status(500).json({ mensaje : 'Error interno del servidor' });
    }
}