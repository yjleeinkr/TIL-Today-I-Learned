let DB_DATA = {};
let CUR_PAGE;
const QTY_ROW = 10;
const QTY_PAGER = 10;
let total_page;

document.addEventListener('DOMContentLoaded', async ()=>{
	const response = await axios.post('http://localhost:4001/api/board/list', {
		withCredentials: true,
	});
    
	DB_DATA = {
		...response
	};

	console.log('BACK서버에서 받음', DB_DATA);

	const boardData = response.data.result;
	const dataQty_total = boardData.length; // 320
    
	total_page = Math.ceil(dataQty_total/QTY_ROW); // 32pages
	const total_block = Math.ceil(total_page/QTY_PAGER); // 4 blocks

	// 페이징

	const paging = document.querySelector('#pagingTemp').innerHTML;
	let pagingTemp = '';

	for(let i=1; i<=total_page; i++){
		if(i>QTY_PAGER) break;
		pagingTemp +=  paging.replace(/{page}/g, i);
	}

	const pagingDiv = document.querySelector('#paging');
	pagingDiv.innerHTML = pagingTemp;

	movePage(1);

});
 
function movePage(page){
	if( page % 10 === 1 ){
		const paging = document.querySelector('#pagingTemp').innerHTML;
		let pagingTemp ='';
        
		for(let i=0; i<10; i++){
			pagingTemp += paging.replace(/{page}/g, i+page);
		}
		const pagingDiv = document.querySelector('#paging');
		pagingDiv.innerHTML = pagingTemp;
	}

	const board = document.querySelector('#boardTemp').innerHTML;
	const datasOnPage = DB_DATA.data.result.slice((page-1)*QTY_ROW, page*QTY_ROW);
	let boardTemp = '';
	datasOnPage.forEach(v=>{
		boardTemp += board.replace('{idx}', v.idx)
			.replace('<a href="/board/view?idx={idx}">', `<a href="/board/view?idx=${v.idx}">`)
			.replace('{subject}', v.subject)
			.replace('{nickname}', v.nickname)
			.replace('{date}', v.date)
			.replace('{hit}', v.hit);
	});

	const tbody = document.querySelector('#board tbody');
	tbody.innerHTML = boardTemp;
	CUR_PAGE = page;
}

function movePrev(){
	if(CUR_PAGE === 1){
		alert('첫 페이지 입니다');
		return;
	}
	CUR_PAGE -= 1;
	movePage(CUR_PAGE);
}

function moveNext(){
	if(CUR_PAGE === total_page){
		alert('마지막 페이지 입니다');
		return;
	}
	CUR_PAGE += 1;
	movePage(CUR_PAGE);
}


