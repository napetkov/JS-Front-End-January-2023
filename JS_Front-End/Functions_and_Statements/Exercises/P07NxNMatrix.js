function matrix(number){

    let printRow = (number) => (number.toString()+' ').repeat(number);

    for( i = 0; i < number; i++){
        console.log(printRow(number));
    }

}

matrix(7);