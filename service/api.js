const key="25963926-3760853c8a416be9fccd09683";
const url="https://pixabay.com/api/";
export const getimages = async(text,num) => {
    let data= await fetch(`${url}/?key=${key}&q=${text}&image_type=photo&per_page=${num}&safesearch=true`);
    let json_data=await data.json();
    return json_data;
}