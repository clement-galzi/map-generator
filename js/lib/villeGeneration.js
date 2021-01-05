var start = ['Peu', 'Prou', 'Fil', 'Né', 'Che', 'Mir', 'Tré',
    'Cor', 'Fèri', 'Mol', 'Fente', 'Chon', 'Plume', 'Mériè',
    'Mis', 'Motte', 'St-', 'Bi', 'glu','Marseille'];
var middle = ['an', 'fouin', 'fu', 'mer', 'tran', 'chon', 'né',
    'nal', 'pan', '-en-', ' de ', 'mu', '-sur-', '&nbsp', '-',
    'os', 'flu', 'sou', 'poin', 'ral', 'cli', 'moule','lyon'];
var end = ['net', 'pou', 'fru', 'patte', 'potte',
    'tru', 'dié', 'pel', 'let', 'bru', 'tulle', 'mine',
    'ac', 'oy', 'foute', 'puy', 'bran', 'ière', '-les-bains',
    'gnolles', 'diou', 'ouet', 'erie', 'flet', 'tandre', 'dieu',
    'ouille', 'onde', 'el', 'aille','montpellier', '-sur-mer'];


function rnd(d){ return d[~~(Math.random()*d.length)]; }

function rndRepeat(d){
    var n = ~~(Math.random()*3);
    console.log(n);
    return d3.range(n).map(function(){
        return d[~~(Math.random()*d.length)];}).join('');
}

var display = d3.select('#display');
var button = display.append('button')
button.text('generate')
    .style({
        position: 'relative',
        top: '10px'
    });
button.on('click', generate);

var wordContainer = display.append('div')
wordContainer.style({
    position: 'relative',
    left: '10px',
    top: '10px',
    'text-transform': 'capitalize'
});
generate();

function generate(){
    var word = rnd(start)+''+rndRepeat(middle)+''+rnd(end);
    wordContainer.html(word);
}