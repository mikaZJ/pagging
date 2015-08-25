/**
 * Created by zhujing on 2015/8/25.
 */
var theUL = document.getElementById("pageContent");
var totalPage = document.getElementById("spanTotalPage");
var pageNum = document.getElementById("spanPageNum");       //��ȡ��ǰҳ<span>
var spanPre = document.getElementById("spanPre");   //��ȡ��һҳ<span>
var spanNext = document.getElementById("spanNext");   //��ȡ��һҳ<span>
var spanFirst = document.getElementById("spanFirst");  //��ȡ��һҳ<span>
var spanLast = document.getElementById("spanLast");   //��ȡ���һҳ<span>
var numberRowsInTable = theUL.getElementsByTagName("li").length;    //��¼������
var pageSize = 8;           //ÿҳ��ʾ�ļ�¼����
var page = 1;            //��ǰҳ��Ĭ�ϵ�һҳ

//��һҳ
function next(){
    hideTable();
    currentRow = pageSize * page;   //��ǰ��
    maxRow = currentRow + pageSize;
    if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable;
    for ( var i = currentRow; i< maxRow; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = '';
    }
    page++;
    if ( maxRow == numberRowsInTable ) {
        nextText();
        lastText();
    }
    showPage();
    preLink();
    firstLink();
}

//��һҳ
function pre(){
    hideTable();
    page--;
    currentRow = pageSize * page;
    maxRow = currentRow - pageSize;
    if ( currentRow > numberRowsInTable ) currentRow = numberRowsInTable;
    for ( var i = maxRow; i< currentRow; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = '';
    }
    if ( maxRow == 0 ){
        preText();
        firstText();
    }
    showPage();
    nextLink();
    lastLink();
}

//��һҳ
function first(){
    hideTable();
    page = 1;
    for ( var i = 0; i<pageSize; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = '';
    }
    showPage();
    firstText();
    preText();
    nextLink();
    lastLink();
}
//���һҳ
function last(){
    hideTable();
    page = pageCount();
    currentRow = pageSize * (page - 1);
    for ( var i = currentRow; i<numberRowsInTable; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = '';
    }
    showPage();
    preLink();
    nextText();
    firstLink();
    lastText();
}

//����ҳ��
function hideTable(){
    for ( var i = 0; i<numberRowsInTable; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = 'none';
    }
}
//��ʾҳ��
function showPage(){
    pageNum.innerHTML = page;
}

//�ܹ�ҳ��
function pageCount(){
    return Math.ceil(numberRowsInTable/pageSize);
}
//��ʾ����
function preLink(){
    spanPre.innerHTML = "<a href='javascript:pre();'>��һҳ</a>";
}
function preText(){
    spanPre.innerHTML = "��һҳ";
}
function nextLink(){
    spanNext.innerHTML = "<a href='javascript:next();'>��һҳ</a>";
}
function nextText(){
    spanNext.innerHTML = "��һҳ";
}
function firstLink(){
    spanFirst.innerHTML = "<a href='javascript:first();'>��ҳ</a>";
}
function firstText(){
    spanFirst.innerHTML = "��ҳ";
}
function lastLink(){
    spanLast.innerHTML = "<a href='javascript:last();'>ĩҳ</a>";
}
function lastText(){
    spanLast.innerHTML = "ĩҳ";
}

//����
function hide(){
    for ( var i = pageSize; i<numberRowsInTable; i++ ){
        theUL.getElementsByTagName("li")[i].style.display = 'none';
    }
    totalPage.innerHTML = pageCount();
    pageNum.innerHTML = '1';
    nextLink();
    lastLink();
}
hide();