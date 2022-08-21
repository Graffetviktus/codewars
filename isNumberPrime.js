    function isPrime(num) {
        let chekNum = Math.sqrt(num)

        if(num < 2) {
            return false;
        }
        for(let i = 2; i <= chekNum; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
