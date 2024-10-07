// console.log('video');

// 1. Fetch, Load and show categories on html

// create load categories
const loadCategories = () =>{

    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err))

}

// create display categories
const displayCategories = (data) =>{
 data.forEach(item => {
    const categoryContainer = document.getElementById('categories');

    
    console.log(item);

    // create button

    const button = document.createElement('button');
    button.classList = "btn";
    button.innerText = item.category;

        // add button by category
    categoryContainer.appendChild(button);
 });
}
loadCategories();
