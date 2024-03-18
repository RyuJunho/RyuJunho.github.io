const contents = document.querySelector('.contents');
const pageBtn = document.querySelector('.page_btn');

//데이터 가져오기 함수
async function fetchData() {
    try {
        const url = `http://192.168.25.51:12000/db`;
        const showBtn = 5;
        const page = 1;

        const response = await fetch(url);
        const {totalPages, clothes} = await response.json();
        console.log(totalPages);
        
        const maxPage = totalPages;

        displayData(clothes);

        //이미지 생성 함수
        function displayData(data) {
            data.forEach(item => {
            const imageElement = new Image(200, 200)
            imageElement.src = item.imageData;
            console.log(item.ID);

            contents.appendChild(imageElement);
            });
        } //페이지 이동 함수
        const movePrevPage = () => {
            page -= showBtn;
            render(page);
        };
        
        const moveNextPage = () => {
            page += showBtn;
            render(page);
        };
        
        //이전, 다음 페이지 버튼 생성
        const prev = document.createElement("button");
        prev.classList.add("button", "prev");
        prev.innerText = '<';
        prev.addEventListener("click", movePrevPage);
        
        const next = document.createElement("button");
        next.classList.add("button", "next");
        next.innerText = '>';
        next.addEventListener("click", moveNextPage);

        const makeBtn = (id) => {
            const btn = document.createElement("button");
            btn.classList.add("page");
            btn.dataset.num = id;
            btn.innerText = id;
        
            // 페이지 버튼 클릭 이벤트 (특정 버튼 클릭 시 해당 페이지 버튼 활성화, 다른 버튼 비활성화시키는 반복문)
            btn.addEventListener("click", (e) => {
                Array.prototype.forEach.call(pageBtn.children, (btn) => {
                    if (btn.dataset.num) btn.classList.remove("active");
                });
            e.target.classList.add("active");
            console.log(e.target.dataset.num);
            page = e.target.dataset.num;
            });
            return btn;
        };

        const renderBtn = (page) => {
            //버튼 리스트 초기화
            while (pageBtn.hasChildNodes()) {
                pageBtn.removeChild(pageBtn.lastChild);
            }
        
            //화면에 최대 5개의 페이지 버튼 생성
            for (let id = page; id < page + showBtn && id <= maxPage; id++) {
                pageBtn.appendChild(makeBtn(id));
            }
        
            //첫 버튼 활성화(class="active")
            pageBtn.children[0].classList.add("active");
        
            pageBtn.prepend(prev);
            pageBtn.append(next);
        
            //이전, 다음 페이지 버튼이 필요한지 체크
            if(page - showBtn < 1) pageBtn.removeChild(prev);
            if(page + showBtn > maxPage) pageBtn.removeChild(next);
        };

        const render = (page) => {
            renderBtn(page);
        };
        
        render(page);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 페이지 로드 시 데이터 표시 함수 호출
fetchData();