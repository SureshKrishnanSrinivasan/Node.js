var fortunes =['Fortune1',
'Fortune2',
'Fortune3',
'Fortune4'];

exports.getfortune = function(){
    var idx = Math.floor(Math.random()*fortunes.length);
    return fortunes[idx];
};


