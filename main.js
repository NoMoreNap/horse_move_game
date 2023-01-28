const field = document.querySelector('.main-field');
let activeField = [], firstTurn = true, nav = [], iterator = 0;

for (let i = 1; i <= 100; i++) {
    field.innerHTML += '<div class="cell" pos="' + i + '"></div>';
}

const cell = document.querySelectorAll('.cell');


cell[0].style.borderRadius = '10px 0 0 0';
cell[9].style.borderRadius = '0 10px 0 0';
cell[90].style.borderRadius = '0 0 0 10px';
cell[99].style.borderRadius = '0 0 10px 0';

cell.forEach(el => {
    el.addEventListener('click', cellClick, false);
})

function cellClick() { 
    if (!firstTurn) {
        let check = 0;
        for (let j in nav) {
            for (let x in activeField) {
                if (nav[j] == this) {
                    check = 2;
                } else if ( activeField[x] === this ) {
                    check = 1;
                }
            }
        }
        if (check === 2) {
            iterator++;
            this.classList.add('pushed');
            this.innerHTML = '<h1 class="main-iterator">'+ iterator + '</h1>';
        } else if ( check === 1) {
            alert('Клетка уже занята!');
            return;
        } else {
            alert('Неправильная клетка!');
            return;
        }
    }
    if (firstTurn) {
        this.classList.add('pushed');
        iterator++;
        this.innerHTML = '<h1 class="main-iterator">'+ iterator + '</h1>';
        firstTurn = false;
    }
    cell.forEach(elem => {
        elem.classList.remove('active');
    })
    let pos = +this.getAttribute('pos') - 1;

    if ( pos >= 22 && pos <= 27 ||
         pos >= 32 && pos <= 37 ||
         pos >= 42 && pos <= 47 ||
         pos >= 52 && pos <= 57 ||
         pos >= 62 && pos <= 67 ||
         pos >= 72 && pos <= 77 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos >= 2 && pos <= 7 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 2 + 10]
        ];
    } else if (pos >= 12 && pos <= 17) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 0 ) {
        nav = [
            cell[pos + 20 + 1],
            cell[pos + 2 + 10]
        ];
    } else if ( pos === 10) {
        nav = [
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10]
        ];  
    } else if ( pos === 1 ) {
        nav = [
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 2 + 10]
        ];
    } else if ( pos === 11 ) {
        nav = [
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10]
        ];
    } else if ( pos === 20 || pos === 30 || pos === 40 || pos === 50 || pos === 60 || pos === 70) {
        nav = [
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20]
        ];
    } else if ( pos === 21 || pos === 31 || pos === 41 || pos === 51 || pos === 61 || pos === 71) {
        nav = [
            cell[pos + 20 + 1],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 1 + 20]
        ];
    } else if ( pos === 80 ) {
        nav = [
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20]
        ];
    } else if ( pos === 90 ) {
        nav = [
            cell[pos + 2 - 10],
            cell[pos + 1 - 20]
        ];
    } else if ( pos === 81 ) {
        nav = [
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20]
        ];
    } else if ( pos === 91 ) {
        nav = [
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20]           
        ];
    } else if ( pos >= 92 && pos <= 97) {
        nav = [
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ]
    } else if ( pos >= 82 && pos <= 87 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos + 2 + 10],
            cell[pos + 2 - 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ]
    } else if ( pos === 88 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 89 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 98 ) {
        nav = [
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos == 99 ) {
        nav = [
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 29 || pos === 39 || pos === 49 || pos === 59 || pos === 69 || pos === 79 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 28 || pos === 38 || pos === 48 || pos === 58 || pos === 68 || pos === 78 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos + 1 - 20],
            cell[pos - 1 - 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 18 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1],
            cell[pos - 2 - 10]
        ];

    } else if ( pos === 19 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos - 2 - 10]
        ];
    } else if ( pos === 8 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20],
            cell[pos + 20 + 1]
        ];
    } else if ( pos === 9 ) {
        nav = [
            cell[pos - 2 + 10],
            cell[pos - 1 + 20]
        ];
    }
    activeField.push(this);
    if ( activeField.length === cell.length ) {
        alert('Победа!!');
    }
    if(checkLose(activeField) && activeField.length != cell.length){
        alert('Вы проиграли');
    }
}

function checkLose(activeField){
    for ( let i in nav ) {
        if ( activeField.indexOf(nav[i]) === -1 ) return false;
    } 
    return true;
}

