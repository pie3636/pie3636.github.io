// Computes a^n % mod
function power(a, n, mod) {
    var power = a, result = 1;
    while (n) {
        if (n & 1) {
            result = (result * power) % mod;
        }
        power = (power * power) % mod;
        n >>= 1;
    }
    return result;
}

// n−1 = 2^s * d with d odd by factoring powers of 2 from n−1
function witness(n, s, d, a) {
    var x = power(a, d, n), y = 0;
    while (s) {
        y = (x * x) % n;
        if (y == 1 && x != 1 && x != n - 1) {
            return false;
        }
        x = y;
        --s;
    }
    return y == 1;
}

function isPrimeMR(n) {
    if (((!(n & 1)) && n != 2) || (n < 2) || (n % 3 == 0 && n != 3))
        return false;
    if (n <= 3)
        return true;

    var d = n / 2, s = 1;
    while (!(d & 1)) {
        d /= 2;
        ++s;
    }

    if (n < 1373653)
        return witness(n, s, d, 2) && witness(n, s, d, 3);
    if (n < 9080191)
        return witness(n, s, d, 31) && witness(n, s, d, 73);
    if (n < 4759123141)
        return witness(n, s, d, 2) && witness(n, s, d, 7) && witness(n, s, d, 61);
    if (n < 1122004669633)
        return witness(n, s, d, 2) && witness(n, s, d, 13) && witness(n, s, d, 23) && witness(n, s, d, 1662803);
    if (n < 2152302898747)
        return witness(n, s, d, 2) && witness(n, s, d, 3) && witness(n, s, d, 5) && witness(n, s, d, 7) &&
               witness(n, s, d, 11);
    if (n < 3474749660383)
        return witness(n, s, d, 2) && witness(n, s, d, 3) && witness(n, s, d, 5) && witness(n, s, d, 7) &&
               witness(n, s, d, 11) && witness(n, s, d, 13);
    if (n < 341550071728321)
        return witness(n, s, d, 2) && witness(n, s, d, 3) && witness(n, s, d, 5) && witness(n, s, d, 7) &&
               witness(n, s, d, 11) && witness(n, s, d, 13) && witness(n, s, d, 17);
    return witness(n, s, d, 2) && witness(n, s, d, 3) && witness(n, s, d, 5) && witness(n, s, d, 7) &&
           witness(n, s, d, 11) && witness(n, s, d, 13) && witness(n, s, d, 17) && witness(n, s, d, 19) &&
           witness(n, s, d, 23);
}

function naivePrimeFactor(n) {
    if (n % 2 == 0) {
        return 2;
    }
    var max = Math.floor(Math.sqrt(n));
    for (var i = 3; i <= max; i += 2) {
        if (n % i == 0) {
            return i;
        }
    }
    return n;
}

function primeSieve(n) {
    var sieve = Array.apply(null, new Array(n)).map(Number.prototype.valueOf, 0); // Urgh
    var i, j;
    sieve[0] = true;
    sieve[1] = true;
    for (i = 4; i < n; i += 2) {
        sieve[i] = true;
    }
    for (i = 3; i * i < n; i += 2) {
        if (sieve[i]) {
            continue;
        }
        for (j = i * i; j < n; j += i + i) {
            sieve[j] = true;
        }
    }
    var primes = [];
    for (i = 0; i < sieve.length; i++) {
        if (!sieve[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

function primeIndices(n) {
    var indices = Array.apply(null, new Array(n)).map(Number.prototype.valueOf, 0);
    for (var i = 0; i < tables.primes.length; i++) {
        indices[tables.primes[i]] = i + 1;
    }
    return indices;
}