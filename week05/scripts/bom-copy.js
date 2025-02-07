const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function displayList(item) {
    const li = document.createElement('li');
    const deletButton = document.createElement('button');
    li.textContent = item;
    deletButton.textContent = "❌";
    deletButton.classList.add('delete');
    li.append(deletButton);
    list.append(li);
    deletButton.addEventListener('click', function () {
        list.removeChild(li);
        deletChapter(li.textContent);
        input.focus();
    });
}


let chaptersArray = getChapterList () || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deletChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}