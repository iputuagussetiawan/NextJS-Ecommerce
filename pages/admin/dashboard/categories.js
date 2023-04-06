import Layout from "../../../components/admin/layout";
import db from "../../../utils/db";
import Category from "../../../models/Category";
import { useState } from "react";
import Create from "../../../components/admin/categories/Create";
export default function categories({ categories }) {
    const [data, setData] = useState(categories);
    console.log(data);
    return (
        <Layout>
        <div>
            <Create setCategories={setData}></Create>
        </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    db.connectDb();
    const categories = await Category.find({}).sort({ updatedAt: -1 }).lean();
    return {
        props: {
        categories: JSON.parse(JSON.stringify(categories)),
        },
    };
}
