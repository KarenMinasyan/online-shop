import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/common/UI/Table/Table';
import Continer from '../../components/Continer/Continer';
import { cartSelector } from '../../helpers/reduxSelectors';
import { deleteCart } from '../../redux/ducks/cartDuck';

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(cartSelector)

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const deleteFromCard = (cart) => {
        dispatch(deleteCart(cart))
    }


    return (
        <div>
            <Continer >
                <Table list={ cartItems } cb={ deleteFromCard } />
            </Continer>
        </div>
    )
}

export default Cart;
