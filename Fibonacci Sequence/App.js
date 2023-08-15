const target = Number.parseInt(process.argv[2] , 10)
let num1 = 0
let num2 = 1
let num3
let suite =""
let u = 0

/*calculate the fibonacci sequence*/

for (let i = false; i !== true; u++) {
    num3 = num1 + num2
    suite = `${suite} ${num1}`
        if (target == num1){
        i = true
        console.log (suite)
        }
        
    num1 = num2 + num3
    suite = `${suite} ${num2}`
        if (target == num2){
        i = true
        console.log (suite)
        }
    num2 = num1 + num3
    suite = `${suite} ${num3}`
        if (target == num3){
        i = true
        console.log (suite)
        }
        if (u == 50){
            i = true
            console.log("this number is not in the fibonacci sequence !")
        }
}
