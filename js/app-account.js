const accountList= document.getElementById('account-list');


let count1=0;

document.getElementById('header-account').onclick = function(){
    count1++;
    if(count1%2!=0)
    {
        accountList.style.display="block";
    }
    else if(count1%2==0){
        accountList.style.display="none";
    }
    if(count1>1){
        count1=0;
    }
}