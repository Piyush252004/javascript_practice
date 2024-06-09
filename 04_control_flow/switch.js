// switch (key) {               // Syntax of switch case
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
                                        // IT IS mendatory to put break statement in end of every code if we not put it it will execute all other cases without checking it will execute all the cases which comes after that matched case except default.
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case");
        break;
}