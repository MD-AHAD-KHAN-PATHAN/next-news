import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async () => {

    const {data} = await getAllCategories();

    return (
        <div>
            <h1>Category List</h1>
        </div>
    );
};

export default CategoryList;