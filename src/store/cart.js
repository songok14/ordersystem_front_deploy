function initState() {
    return {
        totalQuantity: localStorage.getItem("totalQuantity") || 0,
        productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
    }
}

export const cart = {
    state: initState,
    mutations: {
        addCart(state, product) {
            // 장바구니 내 상품의 총 수량
            state.totalQuantity = parseInt(state.totalQuantity) + product.productCount;
            localStorage.setItem("totalQuantity", state.totalQuantity);

            // 장바구니 내 상품 목록
            const existProduct = state.productsInCart.find(p => p.productId === product.productId);
            if (existProduct) {
                existProduct.productCount += product.productCount;
            } else {
                state.productsInCart.push(product);
            }
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
        },
        clearCart(state) {
            state.productsInCart = [];
            state.totalQuantity = 0;
            localStorage.removeItem("totalQuantity");
            localStorage.removeItem("productsInCart");
        }
    },
    actions: {
        addCart(context, productCount) {
            context.commit("addCart", productCount);
        },
        clearCart(context) {
            context.commit("clearCart");
        }
    },
    getters: {
        getTotalQuantity: state => state.totalQuantity,
        getProductsInCart: state => state.productsInCart,
    }
}