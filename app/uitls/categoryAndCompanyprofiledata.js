import axios from "axios"; // Add missing axios import
import Swal from "sweetalert2"; // Ensure Swal is imported
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL; // Add missing SERVER_URL definition

export async function fetchCategoriesAndCompanyProfile(setIsLoading, setCategories, setCompanyData) {
    setIsLoading(true);

    try {
        // Fetch categories and company profile data concurrently
        const [categoriesResponse, companyProfileResponse] = await Promise.all([
            axios.get(`${SERVER_URL}/api/categories`),
            axios.get(`${SERVER_URL}/api/company-profile/67d7e08b75c754b93314d410`)
        ]);

        // Update state with fetched data
        setCategories(categoriesResponse.data);
        setCompanyData(companyProfileResponse.data);

     
    
    } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
            title: "Error",
            text: "Error fetching categories or company profile",
            icon: "error"
        });
    } finally {
        setIsLoading(false);
    }
}
