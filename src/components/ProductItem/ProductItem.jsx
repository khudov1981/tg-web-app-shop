import { Button } from '../Button/Button'
import './productItem.css'

export const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler =() => {
        onAdd(product)
    }

    return (
        <div className={'product' + className}> 
            <div className={'img'} />
            <div className={'title'}>
                {product.title}
            </div>
            <div className={'descrription'}>
                {product.description}
            </div>
            <div>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>

        </div>
    )
}