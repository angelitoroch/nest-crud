import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('product')
export class ProductController {
  constructor(private _productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    //console.log(createProductDTO);
    const product = await this._productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Sucessfully Created',
      product: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this._productService.getProducts();
    return res.status(HttpStatus.OK).json({
      products: products,
    });
  }

  @Get('/:productID')
  async getProduct(@Param('productID') productID, @Res() res) {
    const product = await this._productService.getProduct(productID);
    //if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const productDeleted = await this._productService.deleteProduct(productID);
    //if (!productDeleted) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Succesfully',
      productDeleted,
    });
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('productID') productID,
  ) {
    const updateProduct = await this._productService.updateProduct(
      productID,
      createProductDTO,
    );

    return res.status(HttpStatus.OK).json({
      message: 'Product Update Successfyly',
      updateProduct,
    });
  }
}
