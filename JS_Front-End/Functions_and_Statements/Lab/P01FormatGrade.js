function formatGrade(grade){
    let textGrade = '';
    if(grade < 3){
        textGrade = 'Fail';
    }else if(grade >= 3 && grade < 3.50){
        textGrade = 'Poor';
    }else if(grade >= 3.50 && grade < 4.50){
        textGrade = 'Good';
    }else if(grade >= 4.50 && grade < 5.50){
        textGrade = 'Very good';
    }else if(grade >= 5.50){
        textGrade = 'Excellent';
    }

    
    function printGrade(){
        if(grade < 3){
            console.log(`${textGrade} (2)`);
        }else{
        console.log(`${textGrade} (${grade.toFixed(2)})`);
    }
    };
    printGrade(grade,textGrade);
}

formatGrade(2.99);