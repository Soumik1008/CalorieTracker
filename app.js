showfoodcalorie();
// updateCalorie();
caloriecount = 0;
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let FoodTxt = document.getElementById('FoodTxt');
    let CalorieTxt = document.getElementById('CalorieTxt');
    let myObj = {
        food: FoodTxt.value,
        calorie: CalorieTxt.value
    }
    let foodcalorie = localStorage.getItem("foodcalorie");
    if (foodcalorie == null) {
        foodcalorieObj = [];
    }
    else {
        foodcalorieObj = JSON.parse(foodcalorie);
    }
    foodcalorieObj.push(myObj);
    localStorage.setItem("foodcalorie", JSON.stringify(foodcalorieObj));
    FoodTxt.value = "";
    CalorieTxt.value = "";
    console.log(foodcalorieObj);
    // updateCalories();
    showfoodcalorie();
})

//Function to show foodcalorie
function showfoodcalorie() {
    let foodcalorie = localStorage.getItem("foodcalorie");
    if (foodcalorie == null) {
        foodcalorieObj = [];
    }
    else {
        foodcalorieObj = JSON.parse(foodcalorie);
    }
    let html = "";
    foodcalorieObj.forEach((element, index) => {
        html += `<div class="foodcaloriecard my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Food Item ${index + 1}:${element.food}</h5>
                        <p class="card-text">Calories:${element.calorie}</p>
                        <button id="${index}" onclick="deletefoodcalorie(this.id)" class="btn btn-primary">Delete Item</button>
                    </div>
                </div>`
    
    });
    let foodcalorieElem = document.getElementById('foodcalorie');
    if (foodcalorieObj.length != 0) {
        foodcalorieElem.innerHTML = html;
    }
    else {
        foodcalorieElem.innerHTML = `Nothing to show now.Eat Something & Add your Meal`;
    }
}

//Function to delete foodcalorie
function deletefoodcalorie(index) {
    // console.log("I am deleting", index);
    let foodcalorie = localStorage.getItem("foodcalorie");
    if (foodcalorie == null) {
        foodcalorieObj = [];
    }
    else {
        foodcalorieObj = JSON.parse(foodcalorie);
    }
    foodcalorieObj.splice(index, 1);
    localStorage.setItem("foodcalorie", JSON.stringify(foodcalorieObj));
    showfoodcalorie();
}
// function updateCalories(){
//     let CalorieTxt = document.getElementById('CalorieTxt');
//     calorie_value=CalorieTxt.value;
//     let temp=calorie_value;
//     temp+=calorie_value;
//     if(calorie_value!=''){
//         document.getElementById('caloriecalculator').innerText=`Total Calories:${temp}`;
//     }
//     calorie_value='';

