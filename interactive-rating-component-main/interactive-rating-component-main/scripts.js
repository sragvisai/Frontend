let selectedRating ;

const selectedItem = (index) => {
    console.log("here");
    if(selectedRating == null){
    document.getElementsByClassName('rating')[index-1].classList.add("selected");
    selectedRating = index;
    } else{
        document.getElementsByClassName('rating')[selectedRating-1].classList.remove("selected");
        document.getElementsByClassName('rating')[index-1].classList.add("selected");
        selectedRating = index;
    }
}

const onSubmit = () => {
    if(selectedRating == null){
        alert("Please select a rating");
        return;
    }
    console.log("Inside submit");
    document.getElementsByClassName('intro')[0].style.display = 'none';
    document.getElementsByClassName('thankYou')[0].style.display = 'block';
    
}

