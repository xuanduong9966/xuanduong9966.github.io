// const collectionListMobile = document.getElementId('collection-list-mobile');
//             document.getElementById('collection-bar').onclick = function(){
//                 collectionListMobile.sty
//             }


const collectionListMobile= document.getElementById('collection-list-mobile');
const productListMobile= document.getElementById('product-list-mobile');
const otherListMobile= document.getElementById('other-list-mobile');
const bgListMobile= document.getElementById('bg-list-mobile');


let count1=0;
let count2=0;
let count3=0;

document.getElementById('collection-mobile').onclick = function(){
    count1++;
    if(count1%2!=0)
    {
        count2=0;
        count3=0;
        bgListMobile.style.opacity="1";
        bgListMobile.style.transform="translateY(0)";
        collectionListMobile.style.transform="translateY(115px)";
        productListMobile.style.transform="translateY(0)";
        otherListMobile.style.transform="translateY(0)";
    }
    else if(count1%2==0){
        bgListMobile.style.opacity="0";
        bgListMobile.style.transform="translateY(-100%)";
        collectionListMobile.style.transform="translateY(0)";
    }
    if(count1>1){
        count1=0;
    }
}

document.getElementById('product-mobile').onclick = function(){
    count2++;
    if(count2%2!=0)
    {
        count1=0;
        count3=0;
        bgListMobile.style.opacity="1";
        bgListMobile.style.transform="translateY(0)";
        collectionListMobile.style.transform="translateY(0)";
        productListMobile.style.transform="translateY(415px)";
        otherListMobile.style.transform="translateY(0)";
    }
    else if(count2%2==0){
        bgListMobile.style.opacity="0";
        bgListMobile.style.transform="translateY(-100%)";
        productListMobile.style.transform="translateY(0)";
    }
    if(count2>1){
        count2=0;
    }
}

document.getElementById('other-mobile').onclick = function(){
    count3++;
    if(count3%2!=0)
    {
        count2=0;
        count1=0;
        bgListMobile.style.opacity="1";
        bgListMobile.style.transform="translateY(0)";
        collectionListMobile.style.transform="translateY(0)";
        productListMobile.style.transform="translateY(0)";
        otherListMobile.style.transform="translateY(115px)";
    }
    else if(count3%2==0){
        bgListMobile.style.opacity="0";
        bgListMobile.style.transform="translateY(-100%)";
        otherListMobile.style.transform="translateY(0)";
    }
    if(count3>1){
        count3=0;
    }
}

bgListMobile.onclick = function(){
    count1=0;
    count2=0;
    count3=0;
    bgListMobile.style.opacity="0";
    bgListMobile.style.transform="translateY(-100%)";
    collectionListMobile.style.transform="translateY(0)";
    productListMobile.style.transform="translateY(0)";
    otherListMobile.style.transform="translateY(0)";
}


const shirtList = document.getElementById('shirt-list');
const underWearList = document.getElementById('under-wear-list');


let count4 =0;
let count5 =0;
document.getElementById('shirt').onclick = function(){
    count4++;
    if(count4%2!=0)
    {
        count5=0;
        shirtList.style.display="block";
        underWearList.style.display="none";
    }
    else if(count4%2==0){
        shirtList.style.display="none";
    }
    if(count4>1){
        count4=0;
    }
}

document.getElementById('under-wear').onclick = function(){
    count5++;
    if(count5%2!=0)
    {
        count5=0;
        shirtList.style.display="none";
        underWearList.style.display="block";
    }
    else if(count5%2==0){
        underWearList.style.display="none";
    }
    if(count5>1){
        count5=0;
    }
}



// search.onclick = function(){
//     count++;
//     if(count%2!=0)
//     {
//         searchBox.style.diplay="block";
//     }
//     else{
//         searchBox.style.diplay="none";
//         count=0;
//     }
// }