let items = document.querySelectorAll('.list-group-item');
items[1].style.color='green';
for(let i=0;i<items.length;i++){
    if(i%2==0){
        items[i].style.backgroundColor='green';
    }
}

