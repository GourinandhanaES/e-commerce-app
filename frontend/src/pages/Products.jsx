import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/product/ProductList';
import ProductFilter from '../components/product/ProductFilter';
import Loader from '../components/common/Loader';

const Products = () => {
    const { products, loading, error } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category') || 'All';
    const searchTerm = searchParams.get('search') || '';

    const setCategory = (val) => {
        const newParams = new URLSearchParams(searchParams);
        if (val === 'All') {
            newParams.delete('category');
        } else {
            newParams.set('category', val);
        }
        setSearchParams(newParams);
    };

    const setSearchTerm = (val) => {
        const newParams = new URLSearchParams(searchParams);
        if (!val) {
            newParams.delete('search');
        } else {
            newParams.set('search', val);
        }
        setSearchParams(newParams);
    };

    const filteredProducts = products.filter((p) => {
        const matchesCategory = category === 'All' || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-7 mt-3">
                <h1 className="text-5xl font-black text-slate-900 mb-1 tracking-tight">Explore Our Collection</h1>
                {/* <p className="text-slate-500 text-lg">Explore our range of meticulously crafted products designed for the modern lifestyle.</p> */}
            </div>

            <ProductFilter
                category={category}
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {loading ? (
                <Loader />
            ) : error ? (
                <div className="bg-red-50 text-red-600 p-8 rounded-3xl border border-red-100 text-center shadow-inner">
                    <p className="font-black text-xl mb-2">Connection Error</p>
                    <p className="text-sm opacity-80">{error}. Is your server running?</p>
                </div>
            ) : (
                <>
                    <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest ml-5">
                        Showing {filteredProducts.length} items
                    </p>
                    <ProductList products={filteredProducts} />
                </>
            )}
        </div>
    );
};

export default Products;
